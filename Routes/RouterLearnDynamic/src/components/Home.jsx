import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/skeleton.css"; // Import CSS for skeleton animation

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      });
  }, []);


  return (
    <div>
      <h1>Recipes</h1>
      <div className="grid-container">
      
       {  
       
            recipes.map((recipe) => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="recipe-card">
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                <h3>{recipe.name}</h3>
              </Link>
            ))
            
        }

      </div>
    </div>
  );
};

export default Home;
