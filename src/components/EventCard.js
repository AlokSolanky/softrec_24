import React, { useState } from "react";
import "./events.css";

const EventCard = ({ event, onEventClick }) => {
  const { id, title, description, imgSrc, circleColor } = event;
  const [disable, setDisabled] = useState(null);

  if (id % 2 == 0) {
    return (
      <div className={`event-card`} id={`${id}`}>
        <div className="card-circle">
          <div
            className="circle"
            style={{ backgroundColor: circleColor }}
          ></div>
        </div>
        <div
          className="connector"
          style={{ backgroundColor: circleColor }}
        ></div>
        <div
          className="card-container"
          onClick={() => {
            setDisabled(event);
            onEventClick(event);
          }}
        >
          <div className="card-left">
            <div className="event-details">
              <h3 className="event-title" style={{ color: circleColor }}>
                {title}
              </h3>
              <p className="event-description">{description}</p>
            </div>
          </div>
          <div className="card-right">
            <img src={imgSrc} alt={title} className="event-image" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="event-card" id={`${id}`}>
        <div
          className="card-container"
          onClick={() => {
            setDisabled(event);
            onEventClick(event);
          }}
        >
          <div className="card-left">
            <div className="event-details">
              <h3 className="event-title" style={{ color: circleColor }}>
                {title}
              </h3>
              <p className="event-description">{description}</p>
            </div>
          </div>
          <div className="card-right">
            <img src={imgSrc} alt={title} className="event-image" />
          </div>
        </div>
        <div
          className="connector"
          style={{ backgroundColor: circleColor }}
        ></div>
        <div className="card-circle">
          <div
            className="circle"
            style={{ backgroundColor: circleColor }}
          ></div>
        </div>
      </div>
    );
  }
};

export default EventCard;
