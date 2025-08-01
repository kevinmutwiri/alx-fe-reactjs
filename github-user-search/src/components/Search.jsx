import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResults([]);

        try {
            const users = await fetchUserData({ username, location, minRepos });
            if (users.length === 0) {
                setError('Looks like we cant find the user');
            } else {
                setResults(users);
            }
        } catch (err) {
            setError('Looks like we cant find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="e.g. octocat"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="e.g. Kenya"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
                    <input
                        type="number"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="e.g. 10"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Search
                </button>
            </form>

            <div className="mt-6">
                {loading && <p className="text-gray-600">Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {results.length > 0 && (
                    <ul className="space-y-4">
                        {results.map((user) => (
                            <li key={user.id} className="flex items-center space-x-4 p-4 border rounded">
                                <img
                                    src={user.avatar_url}
                                    alt={user.login}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <p className="font-semibold">{user.login}</p>
                                    <a
                                        href={user.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        View Profile
                                    </a>
                                    {/* Optional: location requires extra fetch per user, so skip it unless enhanced */}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Search;
