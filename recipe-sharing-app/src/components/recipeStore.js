import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Available Recipes</h2>
      {recipes.length === 0 ? (
        <p className="text-gray-600 italic">No recipes added yet. Be the first to add a delicious recipe!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                <Link to={`/recipes/${recipe.id}`} className="text-blue-700 hover:underline">
                  {recipe.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {recipe.description.substring(0, 120)}{recipe.description.length > 120 ? '...' : ''}
              </p>
              <Link
                to={`/recipes/${recipe.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
