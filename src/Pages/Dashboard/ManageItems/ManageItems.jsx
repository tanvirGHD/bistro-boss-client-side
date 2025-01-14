import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, isPending, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="p-4">
      <div className="text-center md:w-3/12 mx-auto my-10">
        <p className="text-lg text-yellow-400">---Hurry up!---</p>
        <h3 className="text-3xl border-y-2 py-2">MANAGE ALL ITEMS</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200">
          <thead style={{ backgroundColor: "#D1A054" }}>
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-100">
                <td className="p-3 text-center">{index + 1}</td>
                <td className="p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded shadow-md"
                  />
                </td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">${item.price.toFixed(2)}</td>
                <td className="p-3 flex justify-center gap-2">
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                  <button className="btn btn-sm bg-yellow-500 text-white px-4 py-2 rounded shadow-md">
                    Update
                  </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-sm bg-red-500 text-white px-4 py-2 rounded shadow-md"
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

export default ManageItems;
