import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to fetch recipes
  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      
      // Filter recipes based on user input
      const filteredRecipes = data.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      );
      
      setRecipes(filteredRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // Automatically fetch recipes when query changes
  useEffect(() => {
    fetchRecipes();
  }, [query]); // Runs whenever `query` updates

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Food Search</h1>
      <SearchBar query={query} setQuery={setQuery} />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onViewRecipe={setSelectedRecipe} />
        ))}
      </div>

      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
};

export default App;
