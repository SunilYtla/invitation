// src/components/HeroSection.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import VisitTracker from "./VisitTracker"; // Import VisitTracker
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const weddingDate = new Date("2024-12-26T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isOpen, setIsOpen] = useState(false);

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

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black overflow-hidden">
      <div className="relative w-full h-full max-w-4xl">
        {/* Royal Doors with Paisley Pattern */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-b from-indigo-900 to-purple-900 border-r-4 border-rose-950 transition-transform duration-1000 ease-in-out ${
            isOpen ? "-translate-x-full" : ""
          } paisley-bg`}
        >
          <div className="flex items-center justify-center h-full">
            <h2 className="text-5xl font-bold text-gold"></h2>
          </div>
        </div>

        <div
          className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-indigo-900 to-purple-900 border-l-4 border-rose-950 transition-transform duration-1000 ease-in-out ${
            isOpen ? "translate-x-full" : ""
          } paisley-bg`}
        >
          <div className="flex items-center justify-center h-full">
            <h2 className="text-5xl font-bold text-gold"></h2>
          </div>
        </div>

        {/* Landing Content */}
        {!isOpen && (
          <div
            onClick={handleClick}
            className="relative z-10 flex flex-col items-center justify-around h-full text-center"
          >
            <div className="bg-rose-950 bg-opacity-90 rounded-s p-6 border-4 border-rose-950 shadow-lg">
              <h1 className="text-5xl font-bold text-gold tracking-widest">
                E-INVITATION
              </h1>
            </div>
            {/* <button
              className="px-10 py-5 bg-gold text-xl font-semibold rounded-full shadow-2xl hover:scale-105 hover:bg-yellow-600 transition duration-300 ease-in-out"
              onClick={handleClick}
            >
              CLICK TO OPEN
            </button> */}
            <div className="flex flex-col items-center space-y-2">
              <a
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/ULcUH2bQ7L1gR2GV9",
                    "_blank"
                  )
                }
                href="#"
                className="text-gold "
              >
                <svg viewBox="0 0 48 48" width="96px" height="96px">
                  <path
                    fill="#48b564"
                    d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"
                  />
                  <path
                    fill="#fcc60e"
                    d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"
                  />
                  <path
                    fill="#2c85eb"
                    d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"
                  />
                  <path
                    fill="#ed5748"
                    d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z"
                  />
                  <path
                    fill="#5695f6"
                    d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"
                  />
                </svg>
              </a>

              <span className="text-gold text-sm">
                Navigate to Function Hall
              </span>
            </div>
          </div>
        )}

        {/* Content Revealed After Doors Open */}
        {isOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-center p-10 space-y-8 animate-fade-in">
            <h1 className="text-6xl font-extrabold text-gold">
              You're Invited
            </h1>
            <p className="text-3xl font-semibold text-white mb-6">
              <span className="block">SHAILU VYTLA & KONDA SUMAN</span>
            </p>
            <p className="text-lg text-white max-w-2xl">
              Join us on <strong>December 26th, 2024</strong> in{" "}
              <strong>Hyderabad, India</strong>
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center space-x-6 mt-6 text-white">
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

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
              <button className="px-8 py-3 bg-gold text-indigo-900 font-semibold rounded-full hover:bg-yellow-600 transition duration-300">
                Save the Date
              </button>
              <button
                onClick={() => navigate("/events")}
                className="px-8 py-3 bg-gold text-indigo-900 font-semibold rounded-full hover:bg-yellow-600 transition duration-300"
              >
                Events
              </button>
              <button
                className="px-8 py-3 bg-gold text-indigo-900 font-semibold rounded-full hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/ULcUH2bQ7L1gR2GV9",
                    "_blank"
                  )
                }
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                KSR Convention
              </button>
              <button
                onClick={() => navigate("/greetings")}
                className="px-8 py-3 bg-gold text-indigo-900 font-semibold rounded-full hover:bg-yellow-600 transition duration-300"
              >
                Greetings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
