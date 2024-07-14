<template>
    <button @click="logout" class="btn btn-secondary">Logout</button>
  </template>
  
  <script>
  import authService from '@/services/AuthService';
  
  export default {
    name: 'LogoutButton',
    methods: {
      logout() {
        authService.logout();
        this.$router.push('/');
      }
    }
  };
  </script>