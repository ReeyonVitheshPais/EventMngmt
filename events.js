import React, { useEffect, useState } from 'react';
import EventList from '../components/events/EventList';
import EventForm from '../components/events/EventForm';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from backend and set to state
  }, []);

  const handleEventSubmit = (newEvent) => {
    // Submit new event to backend and update state
  }

  return (
    <div>
      <h2>Events</h2>
      <EventForm onSubmit={handleEventSubmit} />
      <EventList events={events} />
    </div>
  );
}

export default Events;
