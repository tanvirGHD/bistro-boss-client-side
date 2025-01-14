import React from "react";
import useCart from "../../../Hooks/UseCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();

  // Total price calculation
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="mt-10">
      {/* Total Orders and Price */}
      <div className="flex justify-around mb-6">
        <h2 className="text-3xl font-bold">Total Orders: {cart.length}</h2>
        <h2 className="text-3xl font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
        <Link to='/dashboard/payment'>
        <button disabled={!cart.length} className="text-xl font-bold bg-[#D1A054] p-2 rounded-lg">
          Pay
        </button>
        </Link>
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
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover mx-auto"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${item.price.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    <FaTrashAlt></FaTrashAlt>
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
