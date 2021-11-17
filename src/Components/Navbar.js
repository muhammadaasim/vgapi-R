import React from "react";
import {Link} from "react-router-dom";

import laracastslogo from "../assets/laracastslogo.svg"; 
import "../App.css"

export default function Navbar() {
  return (
    <nav className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-6">
        
          <Link to={"/"}>
            <img src={laracastslogo} alt="logo" />
          </Link>
          <ul className="flex ml-0 lg:ml-16 space-x-8 mt-6 lg:mt-0">
            <li>
              <Link to="/singlegame" className="hover:text-gray-400">
                Games
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Coming Soon
              </Link>
            </li>
          </ul>
      </div>
      <div className="flex items-center mt-6 lg:mt-0">
        <div className="relative">
          <input
            type="text"
            className="bg-gray-800 text-sm rounded-full focus:outline-none focus:shadow-outline w-64 px-3 pl-8 py-1"
            placeholder="Search..."
          />
          <div className="absolute top-0 flex items-center h-full ml-2">
            <svg className="fill-current text-gray-400 w-4" viewBox="0 0 24 24">
              <path
                class="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
