import { useState, useEffect } from "react";

// import slider1 from '../../assets/image_222005.jpg';
import slider1 from "../../../assets/v2/image_222005.jpg";
import slider2 from "../../../assets/v2/image_221470.jpg";
import slider3 from "../../../assets/v2/image_222457.jpg";
import slider4 from "../../../assets/v2/image_214956.jpg";
import slider5 from "../../../assets/v2/image_176267.jpg";
import slider6 from "../../../assets/v2/image_158140.jpg";

const ImageSlider = () => {
  const slides = [slider1, slider2, slider3, slider4, slider5, slider6];
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]); // Re-run the effect when currentIndex changes

  return (
    <div className="flex  flex-col justify-center items-center overflow-hidden">
      {/* **Slider Container** */}
      <div className="relative mt-8 w-[80%] md:w-[50%] lg:w-[40%]">
        <div
          className="flex transition-transform duration-500 ease-in-out w-[80%] md:w-[110%] lg:w-[110%] md:h-[250px] lg:h-[300px]"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${
              window.innerWidth >= 768 && window.innerWidth < 1024
                ? "120px"
                : "40px"
            }))`,
          }}
        >
          {slides.map((item, index) => (
            <div key={index} className="flex-none w-full flex justify-center">
              <div
                className={`text-white rounded-lg shadow-lg ${
                  index === currentIndex ? "opacity-100" : "opacity-100"
                } transition-all duration-500 relative`}
                style={{
                  width: index === currentIndex ? "120%" : "80%",
                }}
              >
                <div className="grid grid-cols-1">
                  <img
                    src={item}
                    alt={item.title}
                    className="mx-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* **Navigation Buttons** */}
      <div className="flex justify-between items-center w-full max-w-md my-2">
        <button
          onClick={prevSlide}
          className="text-black opacity-50 rounded-full"
        ></button>
        {/* **Dots Navigation** */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-5 h-1  transition-all duration-300 ${
                currentIndex === index ? "bg-white" : "bg-white opacity-50"
              }`}
            ></button>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="text-black opacity-50 rounded-full"
        ></button>
      </div>
    </div>
  );
};

export default ImageSlider;
