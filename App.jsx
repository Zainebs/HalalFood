import React from 'react';
import './App.css'; 
import Awning from './components/Awning';
import Events from './components/Events'; 
import EventCard from './components/EventsCard'; 

const App = () => {
  return (
    <div className="app">
      <Awning />
      <h1 className="Food">Halal Food NYC</h1>
      <div className="event-list">
        {Events.map((event, index) => (
          <EventCard
            key={index}
            name={event.name}
            description={event.description}
            location={event.location}
            img={event.img}
            website={event.website}
          />
        ))}
      </div>
      {}
    </div>
  );
};

export default App;

