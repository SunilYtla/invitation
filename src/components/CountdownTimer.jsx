import React from "react";

const CountdownTimer = ({ timeLeft }) => (
  <div className="flex justify-center space-x-6 mt-6 text-white">
    {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
      <div key={label} className="text-center">
        <p className="text-4xl font-bold">{Object.values(timeLeft)[index]}</p>
        <span className="text-sm uppercase">{label}</span>
      </div>
    ))}
  </div>
);

export default CountdownTimer;
