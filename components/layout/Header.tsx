import React from "react";

const Header: React.FC = () => {
  const navLinks = ["Home", "About", "Properties"];
  const accommodations = ["Rooms", "Mansion", "Countryside", "Villa", "Apartment"];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">ALX Listings</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search properties..."
            className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Sign In / Sign Up */}
        <div className="flex items-center space-x-2">
          <button className="text-gray-700 hover:text-blue-600 font-medium hidden md:block">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex space-x-4 overflow-x-auto">
          {accommodations.map((type) => (
            <span
              key={type}
              className="bg-white border px-3 py-1 rounded-full text-gray-700 hover:bg-blue-50 cursor-pointer whitespace-nowrap"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
