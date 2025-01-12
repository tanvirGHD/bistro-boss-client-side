import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaHome, FaRegCalendarAlt, FaHistory, FaStar, FaShoppingCart, FaConciergeBell, FaPhoneAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 min-h-full bg-[#D1A054] p-6 h-screen mr-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
          <h2 className="text-xl font-bold">Restaurant</h2>
        </div>
        <ul className="menu gap-5">
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
            <NavLink to="/dashboard/payment-history">
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
              <FaShoppingCart className="inline-block mr-2" />
              My Cart
            </NavLink>
          </li>
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
