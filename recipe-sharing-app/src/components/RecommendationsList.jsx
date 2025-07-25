import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  useEffect(() => {
    generateRecommendations();
  }, [recipes, favorites, generateRecommendations]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p className="text-gray-600 italic">No recommendations available yet. Add some recipes and favorites!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((recipe) => (
            <div
              key={recipe.id}
              className="border border-gray-200 rounded-lg p-4 bg-blue-50 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  <Link to={`/recipes/${recipe.id}`} className="hover:underline">
                    {recipe.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {recipe.description.substring(0, 100)}{recipe.description.length > 100 ? '...' : ''}
                </p>
              </div>
              <div className="flex justify-end mt-2">
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;
