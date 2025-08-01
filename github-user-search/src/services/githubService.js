import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
    const headers = {};
    const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

    if (token) {
        headers.Authorization = `token ${token}`;
    }

    const response = await axios.get(`${BASE_URL}/${username}`, { headers });
    return response.data;
};
