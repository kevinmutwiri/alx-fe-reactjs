import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => {
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    }));
    get().filterRecipes();
    get().generateRecommendations();
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    }));
    get().filterRecipes();
    get().generateRecommendations();
  },

  deleteRecipe: (recipeId) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
    get().filterRecipes();
    get().generateRecommendations();
  },

  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
    get().generateRecommendations();
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      recipe.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
    set({ filteredRecipes: filtered });
  },

  addFavorite: (recipeId) => {
    set((state) => {
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return state;
    });
    get().generateRecommendations();
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
    get().generateRecommendations();
  },

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const nonFavorites = recipes.filter(recipe => !favorites.includes(recipe.id));
    const shuffledNonFavorites = [...nonFavorites].sort(() => 0.5 - Math.random());
    const recommended = shuffledNonFavorites.slice(0, 3);
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
