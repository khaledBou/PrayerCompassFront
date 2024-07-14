<template>
    <nav>
      <ul>
        <li><router-link to="/">Login</router-link></li>
        <li><router-link to="/prayer-times">Prayer Times</router-link></li>
        <li><router-link to="/qibla-direction">Qibla Direction</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavigationView',
  };
  </script>