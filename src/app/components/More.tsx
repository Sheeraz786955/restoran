"use client" 
import React, { use, useState } from 'react';

const More: React.FC = () => {
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
          className="bg-[#212432] hover:text-[#fea116] text-white font-bold py-1 px-2 rounded inline-flex items-center"
        >
          <span>More</span>
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
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-200 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 pr-5 font-bold text-xl justify-start text-black hover:text-[#fea116]"
              role="menuitem"
            >
              Booking
            </a>
            <a
              href="#"
              className="block px-4 py-2 font-bold text-xl text-black hover:text-[#fea116]"
              role="menuitem"
            >
             Our Team 
            </a>
            <a
              href="#"
              className="block px-4 py-2 font-bold text-xl justify-start text-black hover:text-[#fea116]"
              role="menuitem"
            >
              Testimonial
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default More;