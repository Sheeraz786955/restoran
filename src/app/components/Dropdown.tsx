"use client" 
import React, { use, useState } from 'react';
import Button from './Button';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-right">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="bg-[#fea116] hover:bg-yellow-300 text-gray-800 font-semibold py-1 px-2 rounded inline-flex items-center"
        >
          <span>Menu</span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#212432] ring-black ring-opacity-5 focus:outline-none overflow-hidden">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 pr-5 text-sm justify-start text-white hover:bg-gray-100"
              role="menuitem"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
              role="menuitem"
            >
             Manu
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm justify-start text-white hover:bg-gray-100"
              role="menuitem"
            >
              Contact
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
              role="menuitem"
            >
             About
            </a>
            <div className="relative group">
        <button className="group-hover:bg-gray-400 text-white px-4 py-2 ">Services</button>
        <ul className="hidden absolute z-10 mt-2 space-y-2 bg-gray-200 text-black p-2 shadow-lg group-hover:block">
        <li><a href="#" className="block px-4 py-2">Booking</a></li>
        <li><a href="#" className="block px-4 py-2">Our Team</a></li>
        <li><a href="#" className="block px-4 py-2">Testimonial</a></li>
        </ul>
       </div>
       <div className='text-white block px-4 py-2 '><Button/></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;