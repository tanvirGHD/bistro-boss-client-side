import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaHome,
  FaRegCalendarAlt,
  FaHistory,
  FaStar,
  FaShoppingCart,
  FaConciergeBell,
  FaPhoneAlt,
  FaList,
  FaUser,
  FaBook,  
} from "react-icons/fa";
import useCart from "../Hooks/UseCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 min-h-full bg-[#D1A054] p-6 h-screen mr-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
          <h2 className="text-xl font-bold">Restaurant</h2>
        </div>
        <ul className="menu gap-5">
          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/user">
              <FaHome className="inline-block mr-2" />
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
              <FaRegCalendarAlt className="inline-block mr-2" />
              add items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              <FaList className="inline-block mr-2" ></FaList>
              manage items
            </NavLink>
          </li> 
          <li>
            <NavLink to="/dashboard/my-booking">
              <FaBook></FaBook>
              Manage bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
              <FaUser></FaUser>
              All users
            </NavLink>
          </li>
            </>
            :
            <>
            <li>
            <NavLink to="/dashboard/user">
              <FaHome className="inline-block mr-2" />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaRegCalendarAlt className="inline-block mr-2" />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaHistory className="inline-block mr-2" />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-review">
              <FaStar className="inline-block mr-2" />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-booking">
              <FaConciergeBell className="inline-block mr-2" />
              My Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart className="inline-block mr-2 relative" />
              <span className="absolute -top-2 -right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                {cart.length}
              </span>
              My Cart
            </NavLink>
          </li>
            </>
          }
          {/* Common NavLinks */}
          <hr className="my-4" />
          <li>
            <NavLink to="/">
              <FaHome className="inline-block mr-2" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaRegCalendarAlt className="inline-block mr-2" />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <FaShoppingCart className="inline-block mr-2" />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaPhoneAlt className="inline-block mr-2" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
