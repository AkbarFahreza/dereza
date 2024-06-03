"use client"; // components/HamburgerMenu.js

import { useState } from "react";
import Link from "next/link";
import Nav_Bar from "./home/Nav_Bar";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-50">
      <button
        className="absolute top-5 left-5 z-20 block md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <div
          className={`block w-8 h-1  transition-transform duration-300 transform ${
            isOpen ? "rotate-45 translate-y-2 bg-white" : "bg-white"
          }`}
        ></div>
        <div
          className={`block w-8 h-1  my-1 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "bg-white"
          }`}
        ></div>
        <div
          className={`block w-8 h-1  transition-transform duration-300 transform ${
            isOpen ? "-rotate-45 -translate-y-2 bg-white" : "bg-white"
          }`}
        ></div>
      </button>

      <div
        className={`fixed top-0 left-0 w-full origin-top-left h-screen bg-mainColor backdrop-brightness-[0.3] bg-opacity-15 backdrop-blur-md  flex flex-col items-start justify-start transition-all duration-500 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <nav className=" ml-[26px] mt-[10vh]" onClick={toggleMenu}>
          <Nav_Bar />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
