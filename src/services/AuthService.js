const authService = {
  logout() {
    localStorage.removeItem('token');
  }
};

export default authService;