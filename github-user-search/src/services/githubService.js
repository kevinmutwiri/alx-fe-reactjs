import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const searchUsers = async ({ username, location, minRepos }) => {
    const headers = {};
    const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

    if (token) {
        headers.Authorization = `token ${token}`;
    }

    // Construct query
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}?q=${query}`, { headers });

    return response.data.items; // Array of users
};
