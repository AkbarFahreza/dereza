"use client";

import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
function Nav_Bar({ toggleMenu }) {
  const pathname = usePathname();
  return (
    <ul>
      <li className="hover:text-mainColor transition-all duration-200">
        <div className="h-5 w-1 border-l-2 border-dotted border-mainColor ml-2 mb-[2px]"></div>
        <div className="flex flex-row gap-2 ">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 9.72794C4.69853 9.46323 8.20588 6.15441 8.86765 0C9.46324 7.34559 12.9044 8.66912 18 9.72794C10.4559 9.99265 9.39706 15.6176 8.80147 19.9191C8.07353 12.1765 3.57353 9.99265 0 9.72794Z"
              fill={pathname === "/" ? "#A35DDE" : "white"}
            />
          </svg>
          <Link
            href="/"
            className={` hover:text-mainColor transition-all duration-200 font-medium ${
              pathname === "/" ? "text-mainColor" : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
        </div>
      </li>
      <li className="">
        <div className="h-5 w-1 border-l-2 border-dotted border-mainColor ml-2 mb-[2px]"></div>
        <div className="flex flex-row gap-2">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 9.72794C4.69853 9.46323 8.20588 6.15441 8.86765 0C9.46324 7.34559 12.9044 8.66912 18 9.72794C10.4559 9.99265 9.39706 15.6176 8.80147 19.9191C8.07353 12.1765 3.57353 9.99265 0 9.72794Z"
              fill={pathname === "/commission-info" ? "#A35DDE" : "white"}
            />
          </svg>
          <Link
            href="/terms-of-services"
            className={` hover:text-mainColor transition-all duration-200 font-medium ${
              pathname === "/terms-of-services"
                ? "text-mainColor"
                : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Commisions
          </Link>
        </div>
        {/* <ul className="ml-6">
          <li className="flex flex-row gap-2 my-2 items-center">
            <svg
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.10662C3.91544 7.88603 6.83824 5.12868 7.38971 0C7.88603 6.12132 10.7537 7.22426 15 8.10662C8.71323 8.32721 7.83088 13.0147 7.33456 16.5993C6.72794 10.1471 2.97794 8.32721 0 8.10662Z"
                fill={pathname === "/price-list" ? "#A35DDE" : "white"}
              />
            </svg>
            <Link
              href="#"
              className={` hover:text-mainColor transition-all duration-200 font-medium ${
                pathname === "/price-list" ? "text-mainColor" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              Price List
            </Link>
          </li>
          <li className="flex flex-row gap-2 my-2 items-center">
            <svg
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.10662C3.91544 7.88603 6.83824 5.12868 7.38971 0C7.88603 6.12132 10.7537 7.22426 15 8.10662C8.71323 8.32721 7.83088 13.0147 7.33456 16.5993C6.72794 10.1471 2.97794 8.32721 0 8.10662Z"
                fill={pathname === "/terms-of-services" ? "#A35DDE" : "white"}
              />
            </svg>

            <Link
              href="/terms-of-services"
              className={` hover:text-mainColor transition-all duration-200 font-medium ${
                pathname === "/terms-of-services"
                  ? "text-mainColor"
                  : "text-white"
              }`}
              onClick={toggleMenu}
            >
              Terms
            </Link>
          </li>
        </ul> */}
      </li>
      <li className="hover:text-mainColor transition-all duration-200 ">
        <div className="h-5 w-1 border-l-2 border-dotted border-mainColor ml-2 mb-[2px]"></div>
        <div className="flex flex-row gap-2">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 9.72794C4.69853 9.46323 8.20588 6.15441 8.86765 0C9.46324 7.34559 12.9044 8.66912 18 9.72794C10.4559 9.99265 9.39706 15.6176 8.80147 19.9191C8.07353 12.1765 3.57353 9.99265 0 9.72794Z"
              fill={pathname === "/portfolio" ? "#A35DDE" : "white"}
            />
          </svg>
          <Link
            href="/portfolio"
            className={` hover:text-mainColor transition-all duration-200 font-medium ${
              pathname === "/portfolio" ? "text-mainColor" : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
        </div>
      </li>
    </ul>
  );
}

export default Nav_Bar;
