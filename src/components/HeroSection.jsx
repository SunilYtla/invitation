// src/components/HeroSection.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import VisitTracker from "./VisitTracker"; // Import VisitTracker
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const weddingDate = new Date("2024-12-12T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    const timerId = setInterval(updateCountdown, 1000);

    return () => clearInterval(timerId);
  }, [weddingDate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative text-center text-white p-6 md:p-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          You're Invited
        </h1>
        <p className="text-2xl md:text-4xl font-semibold mb-6">
          <span className="block">Riya & Arjun</span>
        </p>
        <p className="text-lg md:text-xl mb-4">
          Join us on <strong>December 12th, 2024</strong> in{" "}
          <strong>Udaipur, India</strong>
        </p>
        {/* Countdown Timer */}
        <div className="flex justify-center space-x-6 mt-4">
          <div className="text-center">
            <p className="text-4xl font-bold">{timeLeft.days}</p>
            <span className="text-sm uppercase">Days</span>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{timeLeft.hours}</p>
            <span className="text-sm uppercase">Hours</span>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{timeLeft.minutes}</p>
            <span className="text-sm uppercase">Minutes</span>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{timeLeft.seconds}</p>
            <span className="text-sm uppercase">Seconds</span>
          </div>
        </div>
        {/* Visitor Tracker */}
        {/* Button to navigate to the new page */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-gray-200 transition duration-300">
            Save the Date
          </button>
          <button
            onClick={() => {
              navigate("/events");
            }}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-gray-200 transition duration-300"
          >
            Events
          </button>
          <button
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-gray-200 transition duration-300 flex items-center justify-center"
            onClick={() =>
              window.open("https://maps.app.goo.gl/ULcUH2bQ7L1gR2GV9", "_blank")
            }
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            KSR CONVENTION
          </button>
          <button
            onClick={() => {
              navigate("/greetings");
            }}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-gray-200 transition duration-300"
          >
            Greetings
          </button>
        </div>
        <VisitTracker /> {/* Use the VisitTracker component here */}
      </div>
    </div>
  );
};

export default HeroSection;
