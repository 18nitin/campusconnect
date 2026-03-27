import { useEffect, useState } from 'react';
import api from '../services/api'; // Import the api utility

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // This calls your Node.js Backend: GET http://localhost:5000/api/events
        const { data } = await api.get('/events'); 
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div className="pt-24 text-center">Loading Campus Data...</div>;

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upcoming Campus Events</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event._id} className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h3 className="text-xl font-bold text-campus-primary">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                <p>📍 {event.location}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No events found. Be the first to add one!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;