import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle isOpen state
  };

  return (
    <div className="">
      <div className="md:flex border-b-4 p-4 w-full top-0 z-50 fixed bg-white">
        <div className="flex items-center justify-between w-full">
          <a href="/">
            <img src="./logo.svg" className="md:fixed" alt="Logo" />
          </a>

          <div className="md:hidden">
            <div className="p-2">
              <button onClick={toggleMenu} className="p-2">
                <img src="bars-solid.svg" alt="Menu" />
              </button>
              <button className="p-2 ml-2">
                <img src="search.svg" alt="Search" />
              </button>
            </div>
          </div>

          <div className={`md:flex ${isOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
            <img
              src="search.svg"
              className="md:hidden mt-12 p-2 bg-red-300"
              alt="Search"
            ></img>
            <ul className="md:flex lg:ml-0 md:ml-[500px]">
              <li className="md:mx-4 mt-2">
                <Link to="/">Multiplatform</Link>
              </li>
              <li className="md:mx-4 mt-2">
                <Link to="/development">Development</Link>
              </li>
              <li className="md:mx-4 mt-2">
                <Link to="/ecosystem">Ecosystem</Link>
              </li>
              <li className="md:mx-4 mt-2">
                <Link to="/showcase">Showcase</Link>
              </li>
              <li className="md:mx-4 mt-2">
                <Link to="/docs">Docs</Link>
              </li>
              <li className="md:mx-4 mt-2">
                <button className="p-2 bg-blue-800 rounded text-white">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
