"use client";

import { useState } from "react";
import Nav_Bar from "./home/Nav_Bar";
import { usePathname } from "next/navigation";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed z-50  w-full ${usePathname() === "/" ? " md:hidden" : ""}`}>
      <div className="absolute w-full top-0 pb-2 left-0 z-20 block bg-mainColor backdrop-brightness-[0.3] bg-opacity-15 backdrop-blur-md">
      <button
        className="mt-4 ml-5 focus:outline-none"
        onClick={toggleMenu}
      >
        <div
          className={`block w-8 h-1 transition-transform duration-300 transform rounded-lg ${
            isOpen ? "rotate-45 translate-y-2 bg-white" : "bg-white"
          }`}
        ></div>
        <div
          className={`block w-8 h-1 my-1 transition-opacity duration-300 rounded-lg ${
            isOpen ? "opacity-0" : "bg-white"
          }`}
        ></div>
        <div
          className={`block w-8 h-1 transition-transform duration-300 transform rounded-lg ${
            isOpen ? "-rotate-45 -translate-y-2 bg-white" : "bg-white"
          }`}
        ></div>
      </button>
      {process.env.NODE_ENV === 'development' ? <p className="text-white absolute rotate-45 top-5 -right-5 text-xs font-bold bg-red-400 px-5">dev mode</p> : ""}
      </div>
      <div
        className={`fixed top-0 left-0 w-full origin-top-left h-screen bg-mainColor backdrop-brightness-[0.3] bg-opacity-15 backdrop-blur-md flex flex-col items-start justify-start transition-all duration-500 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="ml-[26px] mt-[10vh]">
          <Nav_Bar toggleMenu={toggleMenu} />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
