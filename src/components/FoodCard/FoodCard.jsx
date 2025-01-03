const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-5 rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
      <figure>
        <img src={image} alt="Product" className="h-48 w-full object-cover" />
      </figure>
      <p className="bg-gray-700 text-white absolute right-0 mr-4 mt-4 p-1 rounded-md">${price}</p>
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-semibold text-gray-800">
          {name}
        </h2>
        <p className="text-gray-600 mt-2">{recipe}</p>
        <div className="card-actions mt-4 justify-end">
          <button className="btn btn-primary px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
