import React from "react";
import useCart from "../../../Hooks/UseCart";

const Cart = () => {
  const [cart, setCart] = useCart();

  // Total price calculation
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Delete handler
  const handleDelete = (id) => {
    const remainingItems = cart.filter((item) => item._id !== id);
    setCart(remainingItems);
  };

  return (
    <div className="mt-10">
      {/* Total Orders and Price */}
      <div className="flex justify-around mb-6">
        <h2 className="text-3xl font-bold">Total Orders: {cart.length}</h2>
        <h2 className="text-3xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
        <button className="text-xl font-bold bg-[#D1A054] p-2 rounded-lg">Pay</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-t-lg">
        <table className="table-auto border-collapse border border-gray-300 w-full text-center">
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">ITEM IMAGE</th>
              <th className="border border-gray-300 px-4 py-2">ITEM NAME</th>
              <th className="border border-gray-300 px-4 py-2">PRICE</th>
              <th className="border border-gray-300 px-4 py-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mx-auto" />
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2">${item.price.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
