<template>
    <div class="container mt-5">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" v-model="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" id="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  import userService from '@/services/userService';
  
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await userService.login(this.email, this.password);
          localStorage.setItem('token', response.data.token);
          this.$router.push('/prayer-times');
        } catch (error) {
          console.error('Login failed:', error.response ? error.response.data : error);
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      }
    }
  };
  </script>
  