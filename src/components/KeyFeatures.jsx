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
    <div className="max-w-[1200px] h-[600px] w-full py-6 px-16 relative group">
      <div className="pb-10">
        <h3 className="text-black font-semibold ">Key Features of GrabWork Mobile App</h3>
      </div>
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].src})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full bg-green-50 p-2 cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full bg-green-50 p-2 cursor-pointer">
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItems, slideIndex) => (
          <div key={slideIndex} onClick={() => moveToNextSlide(slideIndex)} className="text-2xl cursor-pointer">
            <RxDotFilled
              className={
                currentIndex === slideIndex
                  ? "text-[#008000]"
                  : "text-gray-300"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyFeatures;
