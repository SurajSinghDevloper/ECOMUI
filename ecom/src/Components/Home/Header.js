// Navbar.js
import React, { useState } from 'react';
import LoginModal from '../Authentication/Login';

const Navbar = () => {

    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const openLoginModal = () => {
      setLoginModalOpen(true);
    };
  
    const closeLoginModal = () => {
      setLoginModalOpen(false);
    };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold font-custom">My ShoperMart</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-200">Home</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">Products</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">About</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">Contact</a>
            </li>
            <li>
              <a href="#" onClick={openLoginModal} className="text-white hover:text-gray-200">Login</a>
            </li>
          </ul>
          <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
