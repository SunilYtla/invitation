import React from "react";
import CountdownTimer from "./CountdownTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const OpenedContent = ({ timeLeft, navigate }) => (
  <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-center p-10 space-y-8 animate-fade-in">
    <h1 className="text-6xl font-extrabold text-gold">You're Invited</h1>
    <p className="text-3xl font-semibold text-white mb-6">
      SHAILU VYTLA & KONDA SUMAN
    </p>
    <CountdownTimer timeLeft={timeLeft} />
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
        onClick={() =>
          window.open("https://maps.app.goo.gl/ULcUH2bQ7L1gR2GV9", "_blank")
        }
        className="px-8 py-3 bg-gold text-indigo-900 font-semibold rounded-full hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
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
);

export default OpenedContent;
