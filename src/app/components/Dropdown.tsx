"use client" 
import More from './More';
import React, { use, useState } from 'react';
import Button from './Button';
import Link from 'next/link';

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
            <Link
              href="home"
              className="block px-4 py-2 pr-12 text-sm justify-start text-white font-bold hover:text-[#fea116]"
              role="menuitem"
            >
              Home
            </Link>
            <span
              
              className="block px-4 py-2 text-sm text-white font-bold hover:text-[#fea116]"
              role="menuitem"
            >
             <More/>
            </span>
            <Link
              href="service"
              className="block  py-2 text-sm pr-12 justify-start text-white font-bold hover:text-[#fea116]"
              role="menuitem"
            >
              Services
            </Link>
            <Link
              href="manu"
              className="block pr-12 py-2 text-sm justify-start text-white font-bold hover:text-[#fea116]"
              role="menuitem"
            >
              Manu
            </Link>
            <Link
              href="contact"
              className="block pr-12 py-2 text-sm justify-start text-white font-bold hover:text-[#fea116]"
              role="menuitem"
            >
              Contact
            </Link>
            <Link
              href="about"
              className="block pr-12 py-2 text-sm text-white font-bold hover:text-[#fea116]"
              role="menuitem"
            >
             About
            </Link>
            
       <div className='text-white block px-4 py-2 '>  <Link href={'book-table'}><Button/></Link></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;