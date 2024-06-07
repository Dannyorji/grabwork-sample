import { useState } from "react";
// import grabIcon from "../assets/grabIcon.png";
import servicesImg from "../assets/servicesimg.svg";

const Services = ({onGetEarlyAccessClick, onBecomeVendorClick}) => {
  const [selectedService, setSelectedService] = useState("Artisan Services");

  const services = [
    {
      name: "Artisan Services",
      text: "Connect with master craftsmen and skilled professionals poised to transform your home with precision and expertise. From intricate woodworking to intricate electrical work, our platform is your gateway to a network of artisans adept at a diverse range of tasks and repairs. Whether your project demands the finesse of woodworking, the precision of electrical installations, the artistry of painting, or the craftsmanship of carpentry, GrabWork’s Artisan Services streamlines the process of finding and booking reliable artisans. Each artisan undergoes rigorous vetting to ensure proficiency, reliability, and a commitment to excellence. With us, home improvement is made effortless. Our platform offers flexible scheduling to accommodate your busy lifestyle, and transparent pricing ensures you know exactly what to expect. Trust us to handle your artisanal needs efficiently, affordably, and with a dedication to exceeding your expectations.",
    },
    {
      name: "Marketplace",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius turpis sit amet nibh tempus, id placerat mauris tristique.",
    },
    {
      name: "Food Delivery",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id suscipit est, ut congue neque.",
    },
    {
      name: "Ride E-hailing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dui ut ligula fermentum lobortis.",
    },
  ];

  return (
    <div className="w-[200%] relative bg-white px-10 pb-12">
      <div className="w-[60%] px-8 text-neutral-800 text-xl whitespace-nowrap font-medium">
        GrabWork is here to simplify your life by connecting you with skilled
        professionals for <br /> home repairs, food delivery, and transportation
        – all in one app!
      </div>
      <div className="py-2.5 px-8 absolute justify-start items-start gap-[40px] inline-flex">
        {services.map((service) => (
          <div
            key={service.name}
            className={`py-2.5 justify-center items-center gap-2.5 flex cursor-pointer ${
              selectedService === service.name
                ? "text-green-800 font-semibold underline"
                : "text-neutral-800"
            }`}
            onClick={() => setSelectedService(service.name)}
          >
            <div
              className={`text-base ${
                selectedService === service.name ? "text-black" : ""
              }`}
            >
              {service.name}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-20">
        <div className="flex-col justify-start gap-[60px] inline-flex w-[40%]">
          <h2 className="w-[500px] px-8 text-black text-sm font-normal">
            {services.find((service) => service.name === selectedService)?.text}
          </h2>
          <div className="justify-start items-start gap-5 inline-flex px-8">
            <a
              onClick={onGetEarlyAccessClick}
              
              className="px-3 py-3 bg-[#008000] rounded-lg justify-center items-center gap-2.5 flex text-white text-sm cursor-pointer font-normal"
            >
              Get Early Access
            </a>
            <a
              onClick={onBecomeVendorClick}
    
              className="px-3 py-3 rounded-lg border border-[#008000] justify-center items-center gap-2.5 flex text-[#008000] text-sm cursor-pointer font-normal"
            >
              Become a Vendor
            </a>
          </div>
        </div>
        <div className="w-[100%]">
          <img className="ml-16 pl-10" src={servicesImg} alt="" />
          {/* <div className="w-[20.29px] h-[20.29px] flex ml-20 space-x-3 gap-40 rotate-[11.77deg] absolute top-44">
            <img className="ml-24 top-3" src={grabIcon} alt="grablogo" />
          </div>
          <div className="w-[20.29px] h-[20.29px] flex ml-72 rotate-[11deg] absolute top-[220px]">
            <img className="" src={grabIcon} alt="grablogo" />
          </div>
          <div className="w-[20.29px] h-[20.29px] absolute right-2 top-[296px] rotate-[20deg] mr-[67px]">
            <img className="" src={grabIcon} alt="grablogo" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
