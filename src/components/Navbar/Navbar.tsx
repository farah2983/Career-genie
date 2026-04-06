import { useNavigate } from "react-router-dom";
import { NavbarMenu } from "../mockData/data";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="border-b border-white/10 rounded-b-3xl bg-[#11152D]/90 backdrop-blur-md shadow-lg">
        
        <div className="container mx-auto flex items-center justify-between py-1 px-6">
          
          {/* Logo */}
          <div className="flex-1 flex justify-start items-center">
            <img src="/logo.svg" alt="careerGenie logo" className="w-40 sm:w-48 -mt-3" />
          </div>

          {/* Middle */}
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

          {/* Account Button */}
          <div className="flex-1 flex justify-end items-center">
            <button
              type="button"
              className="px-6 py-2 rounded-xl bg-linear-to-r from-[#E240CA] via-[#5975E2] to-[#2EE8F1] hover:brightness-110 active:scale-[0.98] transition-all font-semibold text-white shadow-lg text-sm sm:text-base"
              onClick={() => navigate("/")}
            >
              Get Started
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;