import { useEffect, useState } from "react";
import banner from "../../assets/images/banner.png";
import { TbMenu2 } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import Menu from "./Menu";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scroll is more than 50px, add background
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`w-full px-3 fixed top-0 z-50 transition-colors shadow-md duration-300 ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl h-14 flex justify-between items-center lg:h-16">
          <div
            className={`text-2xl font-bold uppercase ${
              isScrolled ? "text-cyan-600" : "text-cyan-500"
            }`}
          >
            Pixels <span className="text-orange-500">Job</span>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            >
              <span className="sr-only">Open main menu</span>
              <TbMenu2 size={20} />
            </button>
          </div>

          <div className="hidden lg:flex gap-6 items-center text-white">
            <div className="">
              <Menu />
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="flex w-28 justify-center gap-2 border border-gray-500 rounded-lg font-bold hover:bg-white hover:text-cyan-500 text-white uppercase items-center focus:outline-none py-2 transition delay-100 duration-300 ease-in-out cursor-pointer"
              >
                <FaUser size={14} /> Sign Up
              </button>
              <button
                type="button"
                className="flex w-28 justify-center gap-2 rounded-lg font-bold bg-orange-700 hover:bg-red-500 text-white uppercase items-center focus:outline-none py-2 transition delay-100 duration-300 ease-in-out cursor-pointer"
              >
                <LuLogIn size={14} /> Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full">
        <img src={banner} alt="" />
      </div>
    </header>
  );
};

export default Navbar;
