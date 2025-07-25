import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search recipes by title or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="shadow appearance-none border rounded-full w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 text-lg"
      />
    </div>
  );
};

export default SearchBar;
