import EventCard from "./EventCard";

const SmallEvents = ({ events, onEventClick }) => {
  return (
    <div className="small-events">
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
