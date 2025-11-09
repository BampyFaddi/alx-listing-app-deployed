import React from "react";

const Footer: React.FC = () => {
  const footerLinks = ["About Us", "Contact", "Privacy Policy", "Terms of Service"];

  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold mb-4 md:mb-0">ALX Listings</div>

        {/* Links */}
        <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
          {footerLinks.map((link) => (
            <a
              key={link}
              href={`#${link.replace(/\s+/g, "-").toLowerCase()}`}
              className="hover:text-blue-400"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ALX Listings. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
