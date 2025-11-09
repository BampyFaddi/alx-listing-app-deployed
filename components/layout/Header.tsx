import React from "react";
import { Search } from "lucide-react";

const Header: React.FC = () => {
  const navLinks = ["Stays", "Flights", "Car Rentals", "Attractions"];

  return (
    <header className="bg-brand-blue text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">ALX Listings</div>

        {/* Nav Links */}
        <nav className="flex space-x-6 mt-2 md:mt-0">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-brand-lightBlue transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1 text-gray-700 shadow-soft">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search destinations"
            className="focus:outline-none bg-transparent text-sm w-40"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
