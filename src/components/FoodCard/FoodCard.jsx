// import Swal from "sweetalert2";
// import useAuth from "../../Hooks/useAuth";
// import { useNavigate } from "react-router-dom";


// const FoodCard = ({ item }) => {
//   const { image, price, recipe, name } = item;
//   const {user} = useAuth();
//   const navigate = useNavigate();


//   const handleAddToCart = food => {
//     // console.log(food, user.email)
//     if(user &&  user.email){
//       //TODO: send card item to the database
//       Swal.fire({
//         title: "You are not login",
//         text: "Please login to add to the cart?",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, Login!"
//       }).then((result) => {
//         if (result.isConfirmed) {
//           //sent the user to the login page 
//           navigate('/login')
//         }
//       });
//     }
//     else{

//     }
//   }

//   return (
// <div className="max-w-sm mx-auto h-full">
//   <div className="border h-full rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
//     <figure className="relative">
//       <img
//         src={image}
//         alt="Product"
//         className="h-48 w-full object-cover"
//       />
//       <p className="bg-gray-900 text-white text-sm absolute top-2 right-2 px-3 py-1 rounded-md shadow-md">
//         ${price}
//       </p>
//     </figure>
//     <div className="p-4 flex flex-col justify-between flex-grow">
//       <div>
//         <h2 className="text-xl font-semibold text-gray-800 mb-2">
//           {name}
//         </h2>
//         <p className="text-gray-600 text-sm mb-4">
//           {recipe}
//         </p>
//       </div>
//       <div className="mt-auto">
//         <button 
//         onClick={() => handleAddToCart(item)}
//         className="relative h-10 w-full origin-top bg-slate-200 transform rounded-lg border-2 border-sky-500 text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

// export default FoodCard;

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name , _id} = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (food) => {
    if (user && user.email) {

      console.log(user.email, food)
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }

      axios.post('http://localhost:5000/carts', cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please log in to add items to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state: {from: location}});
        }
      });
    }
  };

  return (
    <div className="max-w-sm mx-auto h-full">
      <div className="border h-full rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
        <figure className="relative">
          <img
            src={image}
            alt={name}
            className="h-48 w-full object-cover"
          />
          <p className="bg-gray-900 text-white text-sm absolute top-2 right-2 px-3 py-1 rounded-md shadow-md">
            ${price}
          </p>
        </figure>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
            <p className="text-gray-600 text-sm mb-4">{recipe}</p>
          </div>
          <div className="mt-auto">
          <button 
        onClick={() => handleAddToCart(item)}
        className="relative h-10 w-full origin-top bg-slate-200 transform rounded-lg border-2 border-sky-500 text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">
          Add to Cart
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
