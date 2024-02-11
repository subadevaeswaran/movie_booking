// frontend/src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/home" className="flex items-center">
              <span className="text-white ml-2 font-bold text-lg">Ticket Booking</span>
            </Link>
          </div>

          {/* Login/Register Buttons */}
          <div className="flex">
            <Link to="/login" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">Login</Link>
            <Link to="/register" className="text-white ml-4 px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
