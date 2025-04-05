import EventCard from "./EventCard";
import "./events.css";
const SmallEvents = ({ selectedEvent, events, onEventClick }) => {
  if (!selectedEvent) {
    return (
      <div className=" w-[100%] flex flex-wrap items-center flex-col justify-space small-events">
        {events.map((event) => (
          <EventCard
            key={event.title}
            event={event}
            onEventClick={onEventClick}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className=" w-[100%] flex flex-wrap items-center flex-col justify-space small-events">
        {events.map(
          (event) =>
            selectedEvent &&
            selectedEvent.title != event.title && (
              <EventCard
                key={event.title}
                event={event}
                onEventClick={onEventClick}
              />
            )
        )}
      </div>
    );
  }
};

export default SmallEvents;
