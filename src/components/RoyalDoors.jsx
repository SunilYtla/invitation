import React from "react";

const RoyalDoors = ({ isOpen }) => (
  <>
    <div
      className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-b from-indigo-900 to-purple-900 border-r-4 border-rose-950 transition-transform duration-1000 ease-in-out ${
        isOpen ? "-translate-x-full" : ""
      } paisley-bg`}
    />
    <div
      className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-indigo-900 to-purple-900 border-l-4 border-rose-950 transition-transform duration-1000 ease-in-out ${
        isOpen ? "translate-x-full" : ""
      } paisley-bg`}
    />
  </>
);

export default RoyalDoors;
