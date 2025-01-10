const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
<div className="max-w-sm mx-auto h-full">
  <div className="border h-full rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
    <figure className="relative">
      <img
        src={image}
        alt="Product"
        className="h-48 w-full object-cover"
      />
      <p className="bg-gray-900 text-white text-sm absolute top-2 right-2 px-3 py-1 rounded-md shadow-md">
        ${price}
      </p>
    </figure>
    <div className="p-4 flex flex-col justify-between flex-grow">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {name}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          {recipe}
        </p>
      </div>
      <div className="mt-auto">
        <button className="relative h-10 w-full origin-top bg-slate-200 transform rounded-lg border-2 border-sky-500 text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default FoodCard;

