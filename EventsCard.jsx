import React from 'react';

const EventsCard = ({ name, description, location, img, website }) => {
  return (
    <div className="event-card-container">
      <div className="event-card-image">
        <img src={img} alt={name} width="200" height="200" /> {/* Resize here */}
      </div>
      <div className="event-card-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Location: {location}</p>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <button className="website-button">Visit Website</button>
        </a>
      </div>
    </div>
  );
};

export default EventsCard;


