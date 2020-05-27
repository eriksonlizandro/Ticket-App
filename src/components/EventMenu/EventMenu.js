import React from "react";
import Event from "../Event/Event";

const EventMenu = ({currentEvents}) => {
  return (
    <div>
      {currentEvents.map((user, i) => {
        return (
          <Event
            key={i}
            id={currentEvents[i].id}
            name={currentEvents[i].name}
            description={currentEvents[i].description}
          />
        );
      })}
    </div>
  );
};

export default EventMenu;
