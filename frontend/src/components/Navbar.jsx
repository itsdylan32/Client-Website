import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-800 text-white py-4 px-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
      </div>
        

        

      {/* Conditionally Rendered Dropdown (only appears when toggled) */}
      {isOpen && (
        <div className="animate-slideDown px-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium py-4">
            <li>
              <a
                onClick={closeMenu}
                href="#hero"
                className="hover:text-gray-400 block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={closeMenu}
                href="#about"
                className="hover:text-gray-400 block"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={closeMenu}
                href="#contact"
                className="hover:text-gray-400 block"
              >
                Contact
              </a>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
