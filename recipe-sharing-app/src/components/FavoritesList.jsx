import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favoritesIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const favoriteRecipes = favoritesIds
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean);

  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">My Favorite Recipes</h2>
      {favoriteRecipes.length === 0 ? (
        <p className="text-gray-600 italic">You haven't added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {favoriteRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="border border-gray-200 rounded-lg p-4 bg-yellow-50 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-700">
                  <Link to={`/recipes/${recipe.id}`} className="hover:underline">
                    {recipe.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {recipe.description.substring(0, 100)}{recipe.description.length > 100 ? '...' : ''}
                </p>
              </div>
              <div className="flex justify-end mt-2">
                <button
                  onClick={() => removeFavorite(recipe.id)}
                  className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
