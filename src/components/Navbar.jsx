import React from "react";
import { Link, NavLink } from "react-router-dom";

import Icon from "../assets/icon-100x100.webp";

function Navbar() {
  const activeLink =
    "lg:p-4 py-3 px-0 block border-b-2 border-transparent border-indigo-400";
  const nonActiveLink =
    "lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400";

  return (
    <>
      <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 shadow-2xl">
        <div className="flex-1 flex justify-between items-center py-2">
          <Link to="/" draggable="false">
            <img
              src={Icon}
              alt="Logo"
              className="h-16 rounded-full hover:shadow-md hover:shadow-blue-800"
              draggable="false"
            />
          </Link>
        </div>
        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current text-gray-900 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : nonActiveLink
                  }
                  to="/dsa"
                >
                  DSA
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : nonActiveLink
                  }
                  to="/aptitude"
                >
                  Aptitude
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : nonActiveLink
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
