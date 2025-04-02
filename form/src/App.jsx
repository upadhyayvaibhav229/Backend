import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center ">
      {/* Hamburger Icon */}
      <label className="cursor-pointer z-50 p-2">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
          className="hidden"
        />
        <svg
          viewBox="0 0 32 32"
          className={`w-10 h-10 stroke-white transition-transform duration-500 ${
            isOpen ? "rotate-[-45deg]" : ""
          }`}
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            className={`line line-top-bottom transition-all duration-500 ${
              isOpen ? "stroke-dasharray-[20,300] stroke-dashoffset-[-32.42]" : "stroke-dasharray-[12,63]"
            }`}
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          />
          <path d="M7 16 27 16" className="line" />
        </svg>


      </label>

      {/* Navigation Menu */}
      <nav
        className={` absolute top-16 right-0  bg-gray-800 rounded-lg transition-transform duration-500 p-2 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="text-white text-lg space-y-2">
          <li className="hover:bg-gray-700 rounded p-2"><a href="#">Home</a></li>
          <li className="hover:bg-gray-700 rounded p-2"><a href="#">About</a></li>
          <li className="hover:bg-gray-700 rounded p-2"><a href="#">Services</a></li>
          <li className="hover:bg-gray-700 rounded p-2"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
