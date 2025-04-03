import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white font-medium min-h-[50px] px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-3">
        <Link to="/" className="text-xl font-bold">
          Logo
        </Link>

        <ul className="hidden md:flex space-x-8">
          {["Home", "Event", "About Us"].map((link) => (
            <li key={link}>
              <NavLink
                to={
                  link === "Home"
                    ? "/"
                    : `/${link.toLowerCase().replace(" ", "-")}`
                }
                className={({ isActive }) =>
                  `text-lg relative pb-1 transition-all duration-300 ${
                    isActive ? "text-blue-400" : "text-white"
                  }`
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">SOFTREC</div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["Home", "Event", "About Us"].map((link) => (
              <li key={link}>
                <NavLink
                  to={
                    link === "Home"
                      ? "/"
                      : `/${link.toLowerCase().replace(" ", "-")}`
                  }
                  className={({ isActive }) =>
                    `text-lg ${isActive ? "text-blue-400" : "text-white"}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
