import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDog,
  faBone,
  faCog,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import SocialIcon from "./SocialIcon";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="flex items-center h-20 px-6 justify-between shadow-sm bg-white relative z-50">
      <a className="flex-1 no-underline block h-8">OA</a>
      <div className="flex-none hidden md:flex md:justify-center md:h-full">
        <Link href="/">
          <a className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400">
            Home
          </a>
        </Link>
        <Link href="about">
          <a className="block h-full flex items-center mx-4 px-2 border-b-2 border-black transition-colors duration-300 ease-in-out hover:text-blue-400">
            About
          </a>
        </Link>
        <Link href="/projects">
          <a className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400">
            Projects
          </a>
        </Link>
      </div>
      <div className="flex-1 items-center justify-end hidden md:flex">
        <a className=" block h-full flex items-center   mx-5 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400">
          <SocialIcon />
        </a>
      </div>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-black text-3xl cursor-pointer md:hidden"
      />
      {mobileOpen && (
        <div className="bg-white absolute top-full left-0 flex flex-col w-full py-8 shadow-sm lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            <a
              href="#"
              className="no-underline px-2 my-2 font-medium hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#"
              className="no-underline px-2 py-1 my-2 font-medium border-b-2 border-black hover:text-blue-400"
            >
              About
            </a>
            <a
              href="#"
              className="no-underline px-2 my-2 font-medium hover:text-blue-400"
            >
              Projects
            </a>
            <h1>hhh</h1>
            <SocialIcon />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
