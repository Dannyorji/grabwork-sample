import heroBackground from '../assets/heroBackground.png';
import GooglePlayLogo from '../assets/GooglePlayLogo.png';
import AppleLogo from '../assets/AppleLogo.png';
import grabIcon from '../assets/grabIcon.png';

const Hero = ({ onGetEarlyAccessClick, onBecomeVendorClick }) => {
  return (
    <div
      className=" h-screen md:h-screen text-center justify-center bg-cover bg-center text-[0.6rem] sm:text-[1rem] -mt-20 pt-15"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="relative w-full lg:flex items-center justify-center">
        <div className="w-full md:pt-40 lg:pt-52 z-10 text-center text-black">
          <h2 className="text-center justify-center text-black text-xl md:text-5xl py-2 font-semibold whitespace-nowrap">
            Get Ready for GrabWork – Your Ultimate On- <br /> Demand Service App!
          </h2>
          <p className="text-sm md:text-lg mb-4">
            Sign up now for early access and exclusive updates
          </p>
          <div className="flex justify-center mx-3">
            <button
              onClick={onGetEarlyAccessClick}
              className="border border-[#008000] bg-[#008000] px-3.5 py-3.5 text-base font-medium text-white inline-flex items-center hover:font-bold hover:bg-[#008000] hover:text-rt-primary hover:border-white focus:ring-4 focus:outline-none rounded-lg text-center mr-10"
            >
              Get Early Access
            </button>
            <button
              onClick={onBecomeVendorClick}
              className="px-3.5 py-3.5 text-base font-medium text-[#008000] border border-[#008000] inline-flex items-center bg-rt-white hover:text-rt-primary hover:font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
            >
              Become a Vendor
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full flex justify-end pr-6 mt-24">
        <div className="flex items-center">
          <a
            href="#"
            className="border border-black bg-black px-3 py-1 text-sm font-sm text-white inline-flex items-center hover:font-semibold hover:bg-black hover:text-rt-primary hover:border-black focus:ring-4 focus:outline-none rounded-full text-center mr-5"
          >
            <img src={GooglePlayLogo} alt="android" />
            Play Store
          </a>
          <a
            href="#"
            className="border border-black bg-black px-2 py-1 text-sm font-sm text-white inline-flex items-center hover:font-semibold hover:bg-black hover:text-rt-primary hover:border-black focus:ring-4 focus:outline-none rounded-full text-center mr-10"
          >
            <img src={AppleLogo} alt="android" />
            Apple Store
          </a>
        </div>
      </div>
      <div className="pl-80 -mt-20 ml-3.5">
        <div className="flex items-center w-12 h-3">
          <img src={grabIcon} alt="grab Logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
