import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="container mx-auto flex items-center py-4 mt-4 sm:mt-12 px-6">
        <div className="py-1">
          <img src={Logo} alt="Logo" width="180px" />
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-l">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">How it Works?</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <button
            type="button"
            className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase"
          >
            Login
          </button>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
