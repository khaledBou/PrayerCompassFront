<template>
    <div class="container">
      <h2>Prayer Times</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Ville</th>
            <th scope="col">Pays</th>
            <th scope="col">Fajr</th>
            <th scope="col">Dhuhr</th>
            <th scope="col">Asr</th>
            <th scope="col">Maghrib</th>
            <th scope="col">Isha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in prayerTimes" :key="time.id">
            <td>{{ time.city }}</td>
            <td>{{ time.country }}</td>
            <td>{{ formatTime(time.fajr) }}</td>
            <td>{{ formatTime(time.dhuhr) }}</td>
            <td>{{ formatTime(time.asr) }}</td>
            <td>{{ formatTime(time.maghrib) }}</td>
            <td>{{ formatTime(time.isha) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'; // Importer ref depuis Vue
  
  import prayerTimeService from '@/services/prayerTimeService';
  
  // Importer date-fns pour formater les dates
  import { format } from 'date-fns';
  
  export default {
    name: 'PrayerTimesView',
    setup() {
      const prayerTimes = ref([]);
  
      const fetchPrayerTimes = async () => {
        try {
          const response = await prayerTimeService.getPrayerTimes();
          console.log(response);
          prayerTimes.value = response.data;
        } catch (error) {
          console.error('Error fetching prayer times:', error);
        }
      };
  
      const formatTime = (dateTimeString) => {
        return format(new Date(dateTimeString), 'HH:mm:ss');
      };
  
      fetchPrayerTimes();
  
      return {
        prayerTimes,
        formatTime,
      };
    },
  };
  </script>