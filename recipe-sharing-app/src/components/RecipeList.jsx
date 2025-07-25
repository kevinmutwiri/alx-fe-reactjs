import { Link } from 'react-router-dom'; // Import Link
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet. Add some delicious recipes!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '5px', color: '#007bff' }}>
              {/* Use Link to navigate to recipe details */}
              <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {recipe.title}
              </Link>
            </h3>
            <p style={{ color: '#666', fontSize: '0.9em' }}>{recipe.description.substring(0, 100)}...</p> {/* Show snippet */}
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

