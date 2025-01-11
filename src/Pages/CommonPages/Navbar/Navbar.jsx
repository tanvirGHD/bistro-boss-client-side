import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad"> Order Food </Link>
      </li>
      <li>
        <Link to="secret">Secret</Link>
      </li>
      <li>
        <Link to="/">
          <button className="flex">
            <img className="h-10 w-12" src="https://img.icons8.com/?size=100&id=47291&format=png&color=000000" alt="" />
            <div className="badge badge-secondary">0</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <li>
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="navbar sticky top-0 z-20 bg-opacity-30 bg-black text-white shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold" href="#home">
          Bistro-Boss
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center space-x-4 px-1">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a
          className="btn btn-primary rounded-lg text-white px-6 py-2"
          href="#order"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
