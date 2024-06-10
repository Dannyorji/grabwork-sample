import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import close icon
import grabIcon from "../assets/grabIcon.png";
import headphone from "../assets/headphone.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  console.log(nav);

  return (
    <div className="px-4 absolute w-full bg-transparent flex justify-between items-center text-black">
      <div className="mt-3">
        <img src={grabIcon} alt="Logo" className="w-20 h-20 object-contain" />
      </div>
      <ul className="md:flex hidden items-center">
        <a href="#" className="cursor-pointer text-blue-900">
          <li className="px-5 capitalize font-medium text-black">Home</li>
        </a>
        <li className="px-5 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-150">
          <a href="#" className="cursor-pointer">
            Partner with us
          </a>
        </li>
        <div className="flex items-center">
          <li className="px-2 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-150">
            Get help
          </li>
          <img
            src={headphone}
            alt="headphone"
            className="w-6 h-6 object-contain ml-2"
          />
        </div>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-black z-20 md:hidden"
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      {nav && (
        <div
          className="fixed inset-0 bg-black/60 z-10"
          onClick={() => setNav(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 w-[75%] h-full bg-white z-20 transform ${
          nav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-start p-4">
          <AiOutlineClose
            size={25}
            onClick={() => setNav(false)}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-start items-center p-4">
          <img src={grabIcon} alt="Logo" className="w-20 h-20 object-contain" />
        </div>
        <ul className="flex flex-col items-start p-4">
          <li className="py-2 px-4 cursor-pointer capitalize font-medium text-md text-black">
            <a href="#" onClick={() => setNav(false)}>
              Home
            </a>
          </li>
          <li className="py-2 px-4 cursor-pointer capitalize font-medium text-md text-black">
            <a href="#" onClick={() => setNav(false)}>
              Partner with us
            </a>
          </li>
          <div className="flex items-center">
            <li className="py-2 px-4 cursor-pointer capitalize font-medium text-md text-black">
              Get help
            </li>
            <img
              src={headphone}
              alt="headphone"
              className="w-6 h-6 object-contain ml-2"
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
