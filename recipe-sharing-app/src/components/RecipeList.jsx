import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Available Recipes</h2>
      {filteredRecipes.length === 0 && recipes.length > 0 ? (
        <p className="text-gray-600 italic">No recipes match your search criteria.</p>
      ) : filteredRecipes.length === 0 && recipes.length === 0 ? (
        <p className="text-gray-600 italic">No recipes added yet. Be the first to add a delicious recipe!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRecipes.map((recipe) => {
            const isFavorite = favorites.includes(recipe.id);
            return (
              <div
                key={recipe.id}
                className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">
                    <Link to={`/recipes/${recipe.id}`} className="text-blue-700 hover:underline">
                      {recipe.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {recipe.description.substring(0, 120)}{recipe.description.length > 120 ? '...' : ''}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => (isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id))}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isFavorite
                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {isFavorite ? '★ Favorited' : '☆ Favorite'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
