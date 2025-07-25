import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(recipeId))
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return (
      <div className="p-8 text-center bg-white rounded-lg shadow-md max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Recipe Not Found</h2>
        <p className="text-gray-700 mb-6">The recipe you are looking for does not exist or has been deleted.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      {isEditing ? (
        <EditRecipeForm
          recipe={recipe}
          onSave={() => setIsEditing(false)}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{recipe.title}</h1>
          <p className="text-gray-700 leading-relaxed mb-6">{recipe.description}</p>

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
            >
              Edit Recipe
            </button>
            <DeleteRecipeButton recipeId={recipe.id} onDeleteSuccess={() => navigate('/')} />
            <button
              onClick={() => navigate('/')}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
            >
              Back to List
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
