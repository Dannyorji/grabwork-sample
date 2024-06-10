import { useState } from "react";
import servicesImg from "../assets/servicesimg.svg";

const Services = ({ onGetEarlyAccessClick, onBecomeVendorClick }) => {
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
    <div className="relative bg-white px-4 md:px-10 pb-12">
      <div className="w-full px-4 md:px-8 text-neutral-800 text-xl font-medium text-center md:text-left">
        GrabWork is here to simplify your life by connecting you with skilled
        professionals for home repairs, food delivery, and transportation – all
        in one app!
      </div>
      <div className="flex justify-center mt-4 md:hidden">
        <img className="max-w-full h-auto" src={servicesImg} alt="Services" />
      </div>
      <div className="py-2.5 px-4 md:px-8 justify-start items-start gap-4 md:gap-8 flex flex-wrap">
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
      <div className="flex flex-col lg:flex-row items-start mt-10">
        <div className="flex-col justify-start gap-2 w-full lg:w-1/2 px-4 md:px-8">
          <h2 className="text-black text-sm font-normal mt-2">
            {services.find((service) => service.name === selectedService)?.text}
          </h2>
          <div className="flex gap-5 mt-6">
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
        <div className="hidden md:flex w-full lg:w-1/2 justify-center mt-10 lg:mt-0">
          <img className="max-w-full h-auto" src={servicesImg} alt="Services" />
        </div>
      </div>
    </div>
  );
};

export default Services;
