import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    const baseClass = "hover:text-blue-800 dark:hover:text-blue-400";
    const activeClass = "text-blue-700 dark:text-blue-500";
    const inactiveClass = "text-gray-900 dark:text-white";
    
    return location.pathname === path
      ? `${baseClass} ${activeClass}`
      : `${baseClass} ${inactiveClass}`;
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <img src={logo} className="h-16 mr-3" alt="CiptaKerja Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cipta Kerja
            </span>
          </div>

          <ul className="hidden md:flex space-x-8 font-medium">
            <li>
              <Link
                to="/"
                className={getLinkClass("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={getLinkClass("/about")}
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="hidden md:inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-2"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};