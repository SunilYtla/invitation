// Events.js
import React, { useEffect, useState } from "react";

// Sample event data with image URLs
const events = [
  {
    name: "Sangeet",
    date: "2024-11-10",
    color: "#FFDDC1",
    image: "https://source.unsplash.com/random/800x600/?sangeet",
  },
  {
    name: "Mehandi",
    date: "2024-11-11",
    color: "#FFE4B5",
    image: "https://source.unsplash.com/random/800x600/?mehandi",
  },
  {
    name: "Engagement",
    date: "2024-11-12",
    color: "#D1E8E4",
    image: "https://source.unsplash.com/random/800x600/?engagement",
  },
  {
    name: "Marriage",
    date: "2024-11-13",
    color: "#FFB6C1",
    image: "https://source.unsplash.com/random/800x600/?marriage",
  },
  {
    name: "Reception",
    date: "2024-11-14",
    color: "#FFFACD",
    image: "https://source.unsplash.com/random/800x600/?reception",
  },
];

const calculateTimeLeft = (eventDate) => {
  const now = new Date();
  const eventTime = new Date(eventDate).getTime();
  const timeLeft = eventTime - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

function Events() {
  const [timeLeft, setTimeLeft] = useState(
    events.map((event) => calculateTimeLeft(event.date))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(events.map((event) => calculateTimeLeft(event.date)));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-center text-4xl font-extrabold mb-5 text-white drop-shadow-lg">
        Wedding Events
      </h1>
      <div className="flex-grow overflow-y-auto">
        <div className="w-full flex flex-col space-y-4 p-4">
          {events.map((event, index) => {
            const { days, hours, minutes, seconds } = timeLeft[index];
            return (
              <div
                key={index}
                className="event-card w-full h-64 p-6 mb-0 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${event.image})`,
                  backgroundColor: event.color, // Fallback color
                }}
              >
                <div className="absolute top-4 left-4 bg-white bg-opacity-15 p-4 rounded-lg text-left">
                  <h2 className="text-2xl font-bold">{event.name}</h2>
                  <p className="text-lg text-gray-800">Date: {event.date}</p>
                  <p className="text-lg text-gray-700">
                    Countdown: {days}d {hours}h {minutes}m {seconds}s
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Events;
