import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    // baseURL: 'http://3.22.208.241:5000/',
    baseURL: 'https://apis.imedtimeclock.online/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;
