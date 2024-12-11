import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoyalDoors from "./RoyalDoors";
import LandingContent from "./LandingContent";
import OpenedContent from "./OpenedContent";

const HeroSection = () => {
  const navigate = useNavigate();
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

  const handleOpen = () => setIsOpen(true);

  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
      <div className="relative w-full h-full max-w-4xl">
        {/* Royal Doors */}
        <RoyalDoors isOpen={isOpen} />

        {/* Conditional Content */}
        {!isOpen ? (
          <LandingContent handleOpen={handleOpen} />
        ) : (
          <OpenedContent timeLeft={timeLeft} navigate={navigate} />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
