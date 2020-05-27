import React from "react";

const Event = ({id, name, description }) => {
  return (
    //This is the information that will be displayed on the card
    <div className="tc bg-white dib br3 pa1 ma2 grow bw2 shadow-5">
      <img alt="event" src={`https://picsum.photos/id/${id}/300/300`} />

      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Event;
