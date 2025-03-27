import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/RecipeDetail.module.css";
import "../css/skeleton.css"; // Import skeleton CSS

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipe details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <div className="skeleton-text"></div>
      </div>
    );
  }

  return (
    <div className={styles.Page}>
      <div>
        <img src={recipe.image} alt={recipe.name} style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }} />
      </div>

      <div className={styles.DetailFood}>
        <h1>{recipe.name}</h1>
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Calories per serving:</strong> {recipe.caloriesPerServing}</p>
        <p><strong>Rating:</strong> {recipe.rating} ⭐ ({recipe.reviewCount} reviews)</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
