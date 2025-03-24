const RecipeModal = ({ recipe, onClose }) => {
    if (!recipe) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg max-w-lg">
          <h2 className="text-2xl font-bold">{recipe.name}</h2>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-40 object-cover rounded mt-2"
          />
          <p className="mt-2">
            <strong>Ingredients:</strong>
          </p>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
          <p className="mt-2">
            <strong>Instructions:</strong>
          </p>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <button
            onClick={onClose}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default RecipeModal;
  