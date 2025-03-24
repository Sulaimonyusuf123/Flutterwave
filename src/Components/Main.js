import React, { useState } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid"; // Import icons

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="md:flex items-center justify-between p-4 w-full top-0 z-50 fixed bg-white shadow-md">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="./logo.svg" alt="Logo" className="w-32 md:w-auto" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-lg font-semibold">
            <li><Link to="/">Multiplatform</Link></li>
            <li><Link to="/development">Development</Link></li>
            <li><Link to="/ecosystem">Ecosystem</Link></li>
            <li><Link to="/showcase">Showcase</Link></li>
            <li><Link to="/docs">Docs</Link></li>
            <li>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg">
                Get Started
              </button>
            </li>
          </ul>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? (
                <XMarkIcon className="w-8 h-8 text-gray-800" />
              ) : (
                <Bars3Icon className="w-8 h-8 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Background Overlay (closes menu on click) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu - Sliding Panel */}
      <div
        className={`fixed top-0 right-0 w-64 h-screen bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden shadow-lg`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={toggleMenu} className="p-2">
            <XMarkIcon className="w-8 h-8 text-gray-800" />
          </button>
        </div>

        {/* Navigation Links for Mobile */}
        <ul className="space-y-6 py-6 text-center">
          <li><Link to="/" onClick={toggleMenu}>Multiplatform</Link></li>
          <li><Link to="/development" onClick={toggleMenu}>Development</Link></li>
          <li><Link to="/ecosystem" onClick={toggleMenu}>Ecosystem</Link></li>
          <li><Link to="/showcase" onClick={toggleMenu}>Showcase</Link></li>
          <li><Link to="/docs" onClick={toggleMenu}>Docs</Link></li>
          <li>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
