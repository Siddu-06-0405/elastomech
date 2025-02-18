import { Link, useLocation } from "react-router-dom";
import clientLogo from "../assets/companyimages/logo.webp";
import ModalDesign from "./Modal";
import { useState } from "react";

const NavBar = () => {
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for the hamburger menu
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="menu-area sticky top-0 bg-black shadow z-[999]">
        <div className="container mx-auto flex justify-between items-center py-6 px-4 max-[780px]:px-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="logo-area">
              <img
                className="normal-logo h-[70px]"
                src={clientLogo}
                alt="logo"
              />
            </Link>
          </div>

          {/* Navigation Menu (Desktop) */}
          <nav className="flex-1 hidden md:flex justify-center space-x-6 text-white font-medium">
            <Link
              to="/"
              className={`text-[19px] ${
                isActive("/") ? "text-[#ffda31]" : "hover:text-gray-400"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-[19px] ${
                isActive("/about") ? "text-[#ffda31]" : "hover:text-gray-400"
              }`}
            >
              About
            </Link>
            <Link
              to="/products"
              className={`text-[19px] ${
                isActive("/products") ? "text-[#ffda31]" : "hover:text-gray-400"
              }`}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`text-[19px] ${
                isActive("/contact") ? "text-[#ffda31]" : "hover:text-gray-400"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Section (Desktop) */}
    
          <div className="flex items-center space-x-4">
            {/* Button */}
            <Link to="/custom-product">
            <div
              className="!bg-[#ffda31] text-black !font-[600] cursor-pointer !px-[40px] !py-[15px] h-auto !text-[15px] !shadow-none hover:bg-black !rounded-none hover:text-[#fff] max-[780px]:hidden"
            >
              Custom Products
            </div>
            </Link>
            <div
              onClick={handleOpen}
              className="!bg-[#ffda31] text-black !font-[600] cursor-pointer !px-[40px] !py-[15px] h-auto !text-[15px] !shadow-none hover:bg-black !rounded-none hover:text-[#fff] max-[780px]:hidden"
            >
              Find A Distributor
            </div>

            {/* Hamburger Icon (Mobile) */}
            <button
              id="nav-expander"
              className="md:hidden flex items-center justify-center"
              onClick={toggleMenu} // Open or close the menu on click
            >
              <div className="grid grid-cols-3 gap-[5px] w-5 h-5">
                {[...Array(9)].map((_, index) => (
                  <span
                    key={index}
                    className="w-1.5 h-1.5 bg-white rounded-full"
                  ></span>
                ))}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Modal for Find A Distributor Button */}
      {open && (
        <ModalDesign
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}

      {/* Mobile Menu (Modal or Dropdown for smaller screens) */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center">
          <div className="bg-black p-6 rounded-lg w-11/12">
            <nav className="flex flex-col space-y-4 text-center text-white">
              <Link
                to="/"
                onClick={toggleMenu}
                className={`text-[19px] ${
                  isActive("/") ? "text-[#ffda31]" : "hover:text-gray-400"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className={`text-[19px] ${
                  isActive("/about") ? "text-[#ffda31]" : "hover:text-gray-400"
                }`}
              >
                About
              </Link>
              <Link
                to="/products"
                onClick={toggleMenu}
                className={`text-[19px] ${
                  isActive("/products") ? "text-[#ffda31]" : "hover:text-gray-400"
                }`}
              >
                Products
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`text-[19px] ${
                  isActive("/contact") ? "text-[#ffda31]" : "hover:text-gray-400"
                }`}
              >
                Contact
              </Link>
              {/* Close button */}
              <button
                onClick={toggleMenu}
                className="mt-4 py-2 px-4 bg-[#ffda31] text-[#010d14] font-medium rounded-lg hover:bg-black hover:text-white"
              >
                Close Menu
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
