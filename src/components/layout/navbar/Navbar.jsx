import { useState } from "react";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#1B0C4D] text-white py-4 w-full">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-[135px]  mx-auto">
        <div className="flex items-center">
          <div className="mr-4">
            <img src={logo} alt="CodeLearn" className="h-8" />
          </div>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-[#EAE34A] text-lg">
            Home
          </a>
          <a href="/course" className="text-white text-lg">
            Course
          </a>
          <a href="/about" className="text-white text-lg">
            About us
          </a>
          <a href="/pricing" className="text-white text-lg">
            Pricing
          </a>
          <a href="/contact" className="text-white text-lg">
            Contact
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="bg-[#EAE34A] text-[#10005A] py-2 px-4 rounded text-xl">
            Login
          </button>
          <button className="bg-[#37266F] text-white py-2 px-4 rounded text-xl">
            Sign up
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-[#1B0C4D] transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
        style={{ width: "300px" }} // Set the width of the drawer
      >
        <div className="flex flex-col items-end p-4">
          <button onClick={toggleMenu} className="text-white text-lg mb-4">
            Close
          </button>
          <nav className="flex flex-col items-center">
            <a href="/" className="text-[#EAE34A] text-lg py-2">
              Home
            </a>
            <a href="/course" className="text-white text-lg py-2">
              Course
            </a>
            <a href="/about" className="text-white text-lg py-2">
              About us
            </a>
            <a href="/pricing" className="text-white text-lg py-2">
              Pricing
            </a>
            <a href="/contact" className="text-white text-lg py-2">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
