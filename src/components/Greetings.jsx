import React from "react";
import ScrollingNamesRow from "./ScrollingNamesRow";

import parent from "../assets/images/parent.jpg";
import bobImage from "../assets/images/parent.jpg";
import charlieImage from "../assets/images/parent.jpg";
import davidImage from "../assets/images/parent.jpg";
import eveImage from "../assets/images/parent.jpg";
import faytheImage from "../assets/images/parent.jpg";
import graceImage from "../assets/images/parent.jpg";

const names = [
  { name: "Alice", description: "Loves nature and hiking.", image: parent },
  { name: "Bob", description: "", image: bobImage }, // No description
  {
    name: "Charlie",
    description: "Avid reader and writer.",
    image: charlieImage,
  },
  { name: "David", description: "Enjoys cooking.", image: davidImage },
  { name: "Eve", description: "", image: eveImage }, // No description
  { name: "Faythe", description: "Tech enthusiast.", image: faytheImage },
  { name: "Grace", description: "Passionate about art.", image: graceImage },
];

const Greetings = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-yellow-300 via-purple-500 to-indigo-600 flex flex-col items-center text-center">
      <div className="py-8 w-full border-b-8 border-yellow-500">
        <h1
          style={{
            fontFamily: "serif",
            borderRadius: "50px", // Symmetrical, pill-like shape
            textShadow: "1px 1px 2px rgba(255, 223, 0, 0.5)", // Royal text glow
          }}
          className="text-4xl md:text-5xl font-bold text-yellow-900 tracking-wide"
        >
          Wedding Blessings
        </h1>
      </div>
      {/* Set a fixed height and allow scrolling */}
      <div className="space-y-10 w-full px-8 overflow-y-auto overflow-x-hidden">
        {Array(15) // Example: You have 15 items
          .fill()
          .map((_, index) => (
            <div key={index} className="p-4">
              <ScrollingNamesRow
                names={names}
                scrollDirection={index % 2 === 0 ? "reverse" : "normal"}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Greetings;
