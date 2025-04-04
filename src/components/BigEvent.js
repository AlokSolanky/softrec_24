import React, { useState, useEffect } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import "./events.css";

const BigEvent = ({ event }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageAvailable, setImageAvailable] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!event) return null;
    if (event && event.gallery) {
      setImageAvailable(true);
      const interval = setInterval(() => {
        triggerImageChange();
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [event]);

  const triggerImageChange = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === event.gallery.length - 1 ? 0 : prevIndex + 1
      );
      setIsFading(false);
    }, 500);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? event.gallery.length - 1 : currentImageIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex(
      currentImageIndex === event.gallery.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div className="big-event">
      <h1 style={{ color: event.circleColor }}>{event.title}</h1>
      <p className="more-description">{event.moreDescription}</p>
      {/* {event.id == 4 ? <HorizontalEventScroll /> : null} */}
      <p className="gallery">Gallery</p>

      <div className="carousel">
        <button className="previous" onClick={handlePrev}>
          {<GrPrevious />}
        </button>
        <img
          src={event.gallery[currentImageIndex]}
          alt={`Event Image ${currentImageIndex}`}
          className={`carousel-image ${isFading ? "fade-out" : "fade-in"}`}
        />
        <button className="next" onClick={handleNext}>
          {<GrNext />}
        </button>
      </div>

      <div className="carousel-indicator">
        {event.gallery.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  );
};

export default BigEvent;
