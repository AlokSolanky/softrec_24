import EventCard from "./EventCard";
import "./events.css";
const SmallEvents = ({ events, onEventClick }) => {
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
};

export default SmallEvents;
