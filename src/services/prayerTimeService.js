import apiClient from '@/axiosConfig';

const prayerTimeService = {
  async getPrayerTimes() {
    return apiClient.get('/prayer-time');
  }
};

export default prayerTimeService;