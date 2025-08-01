import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const searchUsers = async ({ username, location, minRepos }) => {
  const headers = {};
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  if (token) {
    headers.Authorization = `token ${token}`;
  }

  // Build the search query string
  let query = `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `${BASE_URL}?q=${query}`;

  const response = await axios.get(url, { headers });
  return response.data.items; // returns array of users
};
