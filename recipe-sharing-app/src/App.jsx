import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-inter antialiased text-gray-900">
        <nav className="bg-white shadow-sm py-4 px-6 mb-8">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-extrabold text-blue-600 hover:text-blue-800 transition-colors duration-200">
              RecipeShare
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
            Welcome to the Recipe Sharing App!
          </h1>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddRecipeForm />
                  <hr className="my-10 border-t-2 border-gray-200" />
                  <RecipeList />
                </>
              }
            />
            <Route path="/recipes/:recipeId" element={<RecipeDetails />} />

            <Route
              path="*"
              element={
                <div className="text-center p-10 bg-white rounded-lg shadow-md mt-10">
                  <h2 className="text-3xl font-bold text-red-500 mb-4">404 - Page Not Found</h2>
                  <p className="text-lg text-gray-700 mb-6">Oops! The page you are looking for does not exist.</p>
                  <Link
                    to="/"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
                  >
                    Go to Home
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
