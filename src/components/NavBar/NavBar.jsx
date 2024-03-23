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

    <nav className="bg-slate-900 text-white p-4 pl-10 pr-12 w-screen">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-xl">Yes we Kanban!</span>
        </Link>

        <div id="navbar-default">
          <ul className="flex gap-10">
            <li className="text-blue-600">
              <Link to="/" aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
