import React, { useState } from "react";

const images = [
  "/icons/vision.jpg",
  "/icons/mission.jpg",
  "/icons/heirarchy.jpg",
  "/icons/technology.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mt-[60px] mb-[30px] sm:w-[60%] overflow-hidden ">
      {/* Image Container */}
      <div className="relative flex justify-center items-center transition-transform duration-700 ease-in-out">
        <img
          src={images[currentIndex]}
          className="w-full h-full object-cover shadow-2xl rounded-lg"
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center text-white font-bold justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          ❮
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center text-white font-bold w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          ❯
        </span>
      </button>
    </div>
  );
};

export default Carousel;
