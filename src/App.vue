<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Prayer Compass</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/prayer-times" class="nav-link">Prayer Times</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/qibla-direction" class="nav-link">Qibla Direction</router-link>
          </li>
        </ul>
        <LogoutButton />
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import LogoutButton from '@/components/LogoutButton/LogoutButton.vue';

export default {
  components: {
    LogoutButton
  }
};
</script>