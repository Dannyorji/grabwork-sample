import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";

function KeyFeatures() {
  const sliders = [
    {
      src: "src/assets/firstframe.svg",
    },
    {
      src: "src/assets/secondframe.svg",
    },
    {
      src: "src/assets/thirdframe.svg",
    },
    {
      src: "src/assets/fourthframe.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1200px] h-[600px] md:h-[500px] sm:h-[400px] w-full py-6 px-4 md:px-16  relative group">
      <div className="pb-10 text-center md:text-left">
        <h3 className="text-black font-semibold text-lg md:text-xl lg:text-2xl">
          Key Features of GrabWork Mobile App
        </h3>
      </div>
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].src})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-1/2 left-2 md:left-5 transform -translate-y-1/2 text-xl rounded-full bg-green-50 p-2 cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-1/2 right-2 md:right-5 transform -translate-y-1/2 text-xl rounded-full bg-green-50 p-2 cursor-pointer">
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className="flex justify-center py-2 space-x-2 md:space-x-4">
        {sliders.map((sliderItems, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => moveToNextSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              className={
                currentIndex === slideIndex ? "text-[#008000]" : "text-gray-300"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyFeatures;
