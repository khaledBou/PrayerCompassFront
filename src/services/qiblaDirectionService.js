import apiClient from '@/axiosConfig';

const qiblaDirectionService = {
  async getQiblaDirection(latitude, longitude) {
    return apiClient.post('/qibla-direction', { latitude, longitude });
  }
};

export default qiblaDirectionService;
