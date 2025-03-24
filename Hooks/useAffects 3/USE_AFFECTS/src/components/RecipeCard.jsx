const RecipeCard = ({ recipe, onViewRecipe }) => {
    return (
      <div className="border p-4 rounded shadow">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-40 object-cover rounded"
        style={{width:'100px'}}/>
        <h2 className="text-xl font-bold mt-2">{recipe.name}</h2>
        <p className="text-gray-600">Price: ${recipe.caloriesPerServing * 0.1}</p>
        <button
          onClick={() => onViewRecipe(recipe)}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          View Recipe
        </button>
      </div>
    );
  };
  
  export default RecipeCard;
  