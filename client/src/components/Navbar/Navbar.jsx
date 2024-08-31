import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="container flex items-center px-6 py-4 mx-auto mt-4 sm:mt-12">
        <div className="py-1">
          <img src={Logo} alt="Logo" width="180px" />
        </div>
        <ul className="items-center justify-end flex-1 hidden gap-12 uppercase sm:flex text-bookmark-blue text-l">
          <li className="cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
            <Link to="/login">
              <button
                type="button"
                className="py-3 text-white uppercase rounded-md bg-bookmark-red px-7"
              >
                Login
              </button>
            </Link>
          </li> */}
        </ul>
        <div className="flex justify-end flex-1 sm:hidden">
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
