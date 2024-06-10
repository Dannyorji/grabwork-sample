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
      <div className="flex flex-col justify-center items-center gap-2">
        <label className="text-white text-center text-sm font-semibold pt-12 md:pt-24">
          Subscribe to Our Newsletter
        </label>
        <input
          name="email"
          type="email"
          className="w-full max-w-md md:w-[30%] h-[50px] pl-4 bg-transparent text-white placeholder-white rounded-lg border outline-none border-white mt-2"
          placeholder="Email Address"
        />
        <div className="py-0 md:py-1 w-full flex justify-center">
          <button
            type="submit"
            className="w-auto px-10 py-3 bg-white text-black rounded-md mt-0 md:mt-9 mb-0"
          >
            Subscribe Now
          </button>
        </div>
        <img
          className="w-[15%] md:w-32 mt-2 md:absolute md:left-28 md:mt-0 rounded-xl"
          src={grabLogo}
          alt="Footer Image"
        />
      </div>
      <hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 w-[100%] lg:w-[100%]" />

      <div className="sm:flex sm:items-center sm:justify-between sm:mb-3 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-3 sm:mb-0">
          <span className="text-[13px] text-white sm:text-center dark:text-gray-400 mb-2 md:mb-0 md:mr-4">
            09018390902
          </span>
          <span className="text-[13px] text-white sm:text-center border-t md:border-t-0 md:border-l-2 md:border-l-white md:pl-4 mb-2 md:mb-0 md:mr-4">
            House 9, Road 22, Kado Estate, Abuja
          </span>
          <span className="text-[13px] text-white sm:text-center border-t md:border-t-0 md:border-l-2 md:border-l-white md:pl-4 mb-2 md:mb-0 md:mr-4">
            Email: support@grabwork.net
          </span>
          <div className="flex gap-4 mt-2 md:mt-0">
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
        <div className="flex flex-col sm:flex-row items-center sm:justify-center mt-4 sm:mt-0">
          <span className="text-[13px] text-white sm:text-center dark:text-gray-400 mb-2 sm:mb-0 sm:mr-4">
            Privacy Policy
          </span>
          <span className="text-[13px] text-white sm:text-center">
            <p>&copy; {year}, Reconnaissance Tech.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
