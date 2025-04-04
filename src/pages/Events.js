import React, { useRef, useState } from "react";

import BigEvent from "../components/BigEvent";
import SmallEvents from "../components/SmallEvents";

import "../components/events.css";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "SPIELMAC",
      description:
        "SPIELMAC is a sports event organised for Freshers. It is an experience in itself with 10 days straight of sports, games and fun for all 3 years. All possible sports were played by both boys and girls...",
      imgSrc: "/gallery/spiel1.jpg",
      circleColor: "#4db3ff", // Blue
      moreDescription:
        "SPIELMAC is a sports event organised for Freshers. It is an experience in itself with 10 days straight of sports, games and fun for all 3 years. All possible sports were played by both boys and girls. The first years were very enthusiastic throughout the event. So the sports complex was flooded with the future software professionals ready to fight their senior counterparts, at least on the non-technical field. The sporting series encountered hard work and practice. Outdoor games like Volleyball, Football, Cricket, Basketball, and Athletics along with indoor games like Chess, Carrom, Table Tennis, and Badminton were played to their best by all the three years. There was also a plethora of fun games like seven stones and slow cycling race. First years showed their talent in skits and mimes also, which were enjoyed by everyone. The clatter of claps and cheer of classmates boosted the enthusiasm of all the players. All three years, including girls and boys, played to their best. There was immense talent and a tough competition but as they say only the best wins. Presence of esteemed alumni made the event more special. Overall it was a great experience in itself. Moreover it provided a nice environment for the students to interact among themselves on much higher plane than ever before.",
      // gallery: [holi1, holi2, holi3, holi4, holi5, holi6, holi7],
    },
    {
      id: 2,
      title: "AGM",
      description:
        "AGM(Annual General Meeting), it is a two day event organised by SOFTREC, in which our Alumni gather around and interaction between the Alumni and the current batches of MCA take place...",
      imgSrc: "/gallery/agm1.jpg",
      circleColor: "#9e6eff", // Purple
      moreDescription:
        "AGM(Annual General Meeting), it is a two day event organised by SOFTREC, in which our Alumni gather around and interaction between the Alumni and the current batches of MCA take place. Alumni talk are also organized in which alumni share their experience and guide students in their studies and upcoming future. Student from all three batches take part in this and prize winners of SPIELMAC are awarded. Apart from prize distribution, Workshops on recent technologies and industry trends is taken by our alumni to make students aware of the different domains that are available in the industry.",
      // gallery: [fest1, fest2, fest3, fest4, fest5, fest6, fest7, fest8, fest9],
    },
    {
      id: 3,
      title: "SOFTECH",
      description:
        "SOFTECH is a year-long event conducted by SOFTREC. In this event, SOFTREC members and all the senior students of MCA take weekly classes for the first year MCA Students...",
      imgSrc: "/gallery/softech1.jpg",
      circleColor: "#81dd69", // Green
      moreDescription:
        "SOFTECH is a year-long event conducted by SOFTREC. In this event, SOFTREC members and all the senior students of MCA take weekly classes for the first year MCA Students. In the classes, the primary focus is to make the first year students aware of the latest technologies and trends, competitive programming and how to prepare for placements. In SOFTECH, Weekly Coding contests are also organized for the MCA students and top scorers are awarded the prizes in the AGM. Throughout the event, the main focus is to make students aware of the different domains that are available in the current industry and to ignite the curiosity in the students to learn more.",
      // gallery: [dan1, dan2, dan3, dan4, dan5, dan6, dan7, dan8, dan9, dan10],
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const bigEventRef = useRef(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);

    if (bigEventRef.current) {
      bigEventRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // setEvents(events.filter((e) => e.id !== event.id));
  };
  return (
    <div className="events-container" ref={bigEventRef}>
      <div>
        <BigEvent event={selectedEvent} />
      </div>
      <SmallEvents events={events} onEventClick={handleEventClick} />
    </div>
  );
};

export default Events;
