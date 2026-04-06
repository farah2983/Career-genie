import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarMenu } from "../mockData/data";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Added Icons

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Main Navbar Container */}
      <div className="relative z-50 border-b border-white/10 rounded-b-3xl bg-[#11152D]/90 backdrop-blur-md shadow-lg">
        <div className="container mx-auto flex items-center justify-between py-1 px-6">
          
          {/* Logo */}
          <div className="flex-1 flex justify-start items-center">
            <img src="/logo.svg" alt="careerGenie logo" className="w-40 sm:w-48 -mt-3" />
          </div>

          {/* Middle - Desktop Links */}
          <div className="hidden lg:flex shrink-0 justify-center">
            <ul className="flex items-center gap-8 text-[18px] text-gray-300">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a 
                      href={item.link} 
                      className={`inline-block hover:text-white transition-colors ${
                        item.title === 'Home' ? 'text-white font-medium' : ''
                      }`}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Account Button & Mobile Menu Toggle */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <button
              type="button"
              className="hidden sm:block px-6 py-2 rounded-xl bg-linear-to-r from-[#E240CA] via-[#5975E2] to-[#2EE8F1] hover:brightness-110 active:scale-[0.98] transition-all font-semibold text-white shadow-lg text-sm sm:text-base"
              onClick={() => navigate("/")}
            >
              Get Started
            </button>

            {/* Mobile Hamburger Icon (Hidden on Large Screens) */}
            <button 
              className="lg:hidden text-white p-2 focus:outline-none" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Sidebar Menu */}
      <div 
        className={`fixed top-0 right-0 h-screen w-64 bg-[#11152D] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-40 pt-24 px-6 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-lg text-gray-300">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <a 
                href={item.link} 
                className={`block hover:text-white transition-colors ${
                  item.title === 'Home' ? 'text-white font-medium' : ''
                }`}
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile-only Get Started Button (shows on extra small screens) */}
        <button
          type="button"
          className="mt-8 sm:hidden px-6 py-3 rounded-xl bg-linear-to-r from-[#E240CA] via-[#5975E2] to-[#2EE8F1] hover:brightness-110 active:scale-[0.98] transition-all font-semibold text-white shadow-lg w-full"
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
        >
          Get Started
        </button>
      </div>

    </nav>
  );
};

export default Navbar;