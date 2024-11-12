import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// Sample event data with image URLs
const events = [
  {
    name: "Sangeet",
    date: "2024-11-10",
    color: "#FFDDC1",
    image:
      "https://t4.ftcdn.net/jpg/08/60/88/41/240_F_860884176_5uGTyJRt6u5l8QJfbwSCUYIi4l8NxZ6r.jpg",
  },
  {
    name: "Mehandi",
    date: "2024-11-11",
    color: "#FFE4B5",
    image:
      "https://t4.ftcdn.net/jpg/09/60/30/71/240_F_960307195_XEJaGDfBFNtOwYPi9numrdOzIZNgDhvq.jpg",
  },
  {
    name: "Engagement",
    date: "2024-11-12",
    color: "#D1E8E4",
    image:
      "https://t4.ftcdn.net/jpg/09/58/98/33/240_F_958983329_RmhS3pisBUxejnI5ZlUXmNL56wXAUbwe.jpg",
  },
  {
    name: "Marriage",
    date: "2024-11-13",
    color: "#FFB6C1",
    image:
      "https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?s=612x612&w=0&k=20&c=6L-u9qhFPv9MjDnF4UK4AqjVbDKM4_8Xad72IHhwPZE=",
  },
  {
    name: "Reception",
    date: "2024-11-14",
    color: "#FFFACD",
    image:
      "https://media.istockphoto.com/id/1334591706/photo/indian-traditional-food-in-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=Ur0Fnlsl2Y_k-UKFfwW4pGtr4V_G6YTbQrGrGOrZaM4=",
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
    <div className="absolute inset-0 flex flex-col items-center justify-start bg-black bg-opacity-80 p-10 overflow-auto space-y-12 ">
      <h1 className="text-6xl font-extrabold text-gold mb-10">
        Wedding Events
      </h1>
      <div className="flex flex-col space-y-10 w-full max-w-4xl">
        {events.map((event, index) => {
          const { days, hours, minutes, seconds } = timeLeft[index];
          return (
            <div
              key={index}
              className="relative rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 bg-cover bg-center flex items-center justify-center h-72"
              style={{
                backgroundImage: `url(${event.image})`,
                backgroundColor: event.color,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center space-y-4 p-8 rounded-xl">
                <h2 className="text-4xl font-bold text-white">{event.name}</h2>
                <p className="text-2xl text-gray-300">Date: {event.date}</p>
                <p className="text-lg text-white">
                  Countdown: {days}d {hours}h {minutes}m {seconds}s
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/ULcUH2bQ7L1gR2GV9",
                      "_blank"
                    )
                  }
                  className="mt-4 px-6 py-3 bg-gold text-indigo-900 font-semibold rounded-full hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  View Location
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Events;
