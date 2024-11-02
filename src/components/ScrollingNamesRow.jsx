import React, { useState, useRef, useEffect } from "react";

const ScrollingNamesRow = ({ names, scrollDirection = "normal" }) => {
  const [selectedName, setSelectedName] = useState(null);
  const cardRef = useRef(null);

  const handleClick = (name, description, image) => {
    if (description) {
      setSelectedName({ name, description, image });
    }
  };

  const handleClose = () => {
    setSelectedName(null);
  };

  // Close the card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (selectedName) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedName]);

  // Determine the animation class based on scroll direction
  const animationClass =
    scrollDirection === "reverse" ? "animate-scroll-reverse" : "animate-scroll";

  return (
    <div className="relative">
      <div className=" whitespace-nowrap">
        <div className={`flex gap-6 md:gap-10 ${animationClass} hover:pause`}>
          {names.map((item, index) => (
            <span
              key={index}
              onClick={() =>
                handleClick(item.name, item.description, item.image)
              }
              className={`cursor-pointer px-8 py-3 text-lg font-bold tracking-wide ${
                item.description
                  ? "bg-gradient-to-br from-white to-yellow-100 text-yellow-800 shadow-royal transform hover:scale-105 transition duration-300 ease-in-out"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              style={{
                fontFamily: "serif",
                borderRadius: "50px", // Symmetrical, pill-like shape
                border: "2px solid #DAA520", // Gold border
                boxShadow:
                  "0 6px 10px rgba(0, 0, 0, 0.3), inset 0 1px 5px rgba(255, 215, 0, 0.3)", // Elegant shadows
                padding: "14px 26px", // Adds more padding for a button-like appearance
                textShadow: "1px 1px 2px rgba(255, 223, 0, 0.5)", // Royal text glow
              }}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
      {/* Display card when a name is selected */}
      {selectedName && (
        <div
          ref={cardRef}
          className="absolute top-0 left-0 right-0 mt-8 mx-auto p-4 w-80 bg-white shadow-lg rounded-lg text-center z-10"
        >
          <h2 className="text-xl font-semibold mb-2">
            Details for {selectedName.name}
          </h2>
          {/* Image Section */}
          {selectedName.image && (
            <img
              src={selectedName.image}
              alt={`${selectedName.name}`}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
          )}
          <p className="text-gray-700">{selectedName.description}</p>
          <button
            onClick={handleClose}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollingNamesRow;
