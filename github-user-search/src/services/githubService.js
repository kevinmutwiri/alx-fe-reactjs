import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

export const searchUsers = async ({ username, location, minRepos }) => {
  const headers = {};
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  if (token) {
    headers.Authorization = `token ${token}`;
  }

  // Build the GitHub Search API query string
  let query = `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `${BASE_URL}${query ? encodeURIComponent(query) : ''}`;

  const response = await axios.get(url, { headers });
  return response.data.items; // array of users
};
