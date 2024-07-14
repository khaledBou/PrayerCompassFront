import axios from 'axios';
import config from '@/conf';

const userService = {
    async login(email, password) {
        return axios.post(`${config.apiBaseUrl}/login`, { email, password });
    }
};

export default userService;