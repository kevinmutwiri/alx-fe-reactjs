import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [query, setQuery] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setError('');
        setUser(null);

        try {
            const data = await fetchUserData(query);
            setUser(data);
        } catch (err) {
            setError('Looks like we cant find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div className="results">
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {user && (
                    <div className="user-info">
                        <img src={user.avatar_url} alt={user.login} width={100} />
                        <h3>{user.name || user.login}</h3>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            View GitHub Profile
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
