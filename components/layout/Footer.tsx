import React from "react";

const Footer: React.FC = () => {
  const links = ["About", "Contact", "Privacy", "Terms"];

  return (
    <footer className="bg-brand-blue text-white mt-10">
      <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold">© {new Date().getFullYear()} ALX Listings</div>

        <div className="flex space-x-6 mt-3 md:mt-0">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-200 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
