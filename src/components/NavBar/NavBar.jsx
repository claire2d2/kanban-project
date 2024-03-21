import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // <nav className="bg-blue-600 text-white font-sans flex flex-col text-center items-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow w-full">
    //   <img src="logo.png" alt="logo" className="h-8 w-auto" />
    //   <a href="#">Home</a>
    //   <a href="#">About</a>
    //   <p>Yes we Kanban!</p>
    // </nav>

    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Yes we Kanban!
          </span>
        </Link>

        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0  md:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
