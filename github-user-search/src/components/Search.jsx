import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        setLoading(true);
        setError('');
        setUsers([]);

        try {
            const results = await searchUsers({ username, location, minRepos });
            setUsers(results);
        } catch (err) {
            setError('Looks like we cant find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Username (required)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Location (optional)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    placeholder="Minimum Repositories (optional)"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Search
                </button>
            </form>

            <div className="mt-6">
                {loading && <p className="text-gray-600">Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {users.length > 0 && (
                    <div className="space-y-4 mt-4">
                        {users.map((user) => (
                            <div key={user.id} className="p-4 border rounded flex items-center space-x-4">
                                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                                <div>
                                    <p className="font-bold">{user.login}</p>
                                    <a
                                        href={user.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500"
                                    >
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
