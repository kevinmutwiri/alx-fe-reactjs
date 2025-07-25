import React, { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe, onSave, onCancel }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  useEffect(() => {
    setTitle(recipe.title);
    setDescription(recipe.description);
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert('Please enter both a title and a description.');
      return;
    }

    updateRecipe({ ...recipe, title: title.trim(), description: description.trim() });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-inner">
      <h2 className="text-2xl font-bold mb-5 text-gray-800">Edit Recipe</h2>
      <div className="mb-4">
        <label htmlFor="editTitle" className="block text-gray-700 text-sm font-bold mb-2">
          Title:
        </label>
        <input
          id="editTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="editDescription" className="block text-gray-700 text-sm font-bold mb-2">
          Description:
        </label>
        <textarea
          id="editDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          rows="8"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 resize-y"
          required
        />
      </div>
      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
