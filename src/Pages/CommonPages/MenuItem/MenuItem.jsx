const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item;
    return (
        <div className="flex items-center border border-gray-300 rounded-lg p-4 mb-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} src={image} alt={name} className="w-24 h-24 object-cover mr-4" />
            <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 uppercase">{name} ---------</h3>
                <p className="text-gray-600 mb-2">{recipe}</p>
                <p className="text-yellow-500 font-semibold">price: ${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;
