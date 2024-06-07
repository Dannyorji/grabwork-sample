import grabLogo from "../assets/grabLogo.png";
import lastVector from "../assets/lastVector.svg";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div
      className="pb-2 bg-cover bg-inherit w-full"
      style={{ backgroundImage: `url(${lastVector})` }}
    >
      <div className="flex-col justify-center items-center gap-2 flex relative top-[70px]">
        <img
          className="w-[139px] h-[139px] left-[170px] top-[10px] absolute bg-white p-0 rounded-xl"
          src={grabLogo}
          alt="Footer Image"
        />
        <label className="text-white pr-48 text-sm font-semibold">
          Subscribe to Our Newsletter
        </label>
        <input
          name="email"
          type="email"
          className="w-[30%] h-[50px] pl-4 bg-transparent text-white placeholder-white rounded-lg border outline-none border-white mt-2"
          placeholder="Email Address"
        />
        <div className="justify-center items-center py-6 pr-48 ">
          <a
            href="#"
            className="px-12 py-3 bg-white text-sm rounded-lg justify-center items-center text-green-900 font-normal"
          >
            Subscribe Now
          </a>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto w-[1200px] dark:border-gray-700 lg:mt-36" />

      <div className="sm:flex sm:items-center sm:justify-between sm:mb-3">
        <div className="flex justify-between pl-9 sm:mb-0">
          <span className="pr-2 text-[13px] text-white sm:text-center dark:text-gray-400">
            09018390902
          </span>
          <span className="pl-2 border-l-2 border-l-white text-[13px] text-white sm:text-center">
            House 9, Road 22, Kado Estate, Abuja
          </span>
          <span className="pl-2 border-l-black text-[13px] text-white sm:text-center">
            Email: support@grabwork.net
          </span>
          <div className="flex gap-4 ml-4 items-center">
            <div className="text-white cursor-pointer">
              <a href="https://instagram.com">
                <BsInstagram />
              </a>
            </div>
            <div className="text-white cursor-pointer">
              <a href="https://x.com">
                <BsTwitterX />
              </a>
            </div>
            <div className="text-white cursor-pointer">
              <a href="https://facebook.com">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <div className="flex mt-4 sm:justify-center sm:mt-0 pr-9">
          <span className="pr-2 text-[13px] text-white sm:text-center dark:text-gray-400">
            Privacy Policy
          </span>
          <span className="pl-2 border-l-2 border-l-white text-[13px] text-white sm:text-center">
            <p>&copy; {year}, Reconnaissance Tech.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
