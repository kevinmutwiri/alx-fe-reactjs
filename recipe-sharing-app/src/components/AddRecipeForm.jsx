import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert('Please enter both a title and a description for the recipe.');
      return;
    }

    addRecipe({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Recipe</h2>
      <div className="mb-4">
        <label htmlFor="recipeTitle" className="block text-gray-700 text-sm font-bold mb-2">
          Recipe Title:
        </label>
        <input
          id="recipeTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Spicy Chicken Curry"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="recipeDescription" className="block text-gray-700 text-sm font-bold mb-2">
          Description:
        </label>
        <textarea
          id="recipeDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your delicious recipe here..."
          rows="6"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 resize-y"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
