// src/Navbar.jsx

import grabIcon from "../assets/grabIcon.png";
import headphone from "../assets/headphone.png"; // Import the new help icon

const Navbar = () => {
  return (
    <div className="max-w-[1520px] mx-auto w-full px-4 flex justify-between items-center text-black">
      <div>
        <img src={grabIcon} alt="Logo" />
      </div>
      <ul className="lg:flex hidden">
        <a href="#" className="cursor-pointer text-blue-900">
          <li className="px-5  capitalize font-medium text-black">Home</li>
        </a>

        <li className="px-5 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-150">
          <a href="#" className="cursor-pointer">Partner with us</a>
        </li>
        <div className="flex">
          <li className="px-2 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-150">
            Get help
          </li>
          <img src={headphone} alt="headphone" />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
