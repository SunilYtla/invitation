import React, { useState, useEffect } from "react";

const VisitTracker = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [animatedCount, setAnimatedCount] = useState(0); // New state for animated count

  // This function calls the Rust API
  const recordVisit = async () => {
    try {
      const response = await fetch(`https://api.modern-invites.in/visit/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("response", response);

      if (!response.ok) {
        console.error("Network response was not ok:", response.status);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Fetched data:", data); // Debugging
      setVisitorCount(data); // Update with the correct property from API response
      //   setVisitorCount(1000); // Update with the correct property from API response
    } catch (error) {
      console.error("Error recording visit:", error);
    }
  };

  // Animate count when visitorCount updates
  useEffect(() => {
    let start = 0;
    const end = visitorCount;
    const duration = 3000; // Duration in milliseconds
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Normalize progress to [0, 1]

      // Easing function (easeOut) to slow down as it approaches the end
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic easing

      setAnimatedCount(Math.round(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate); // Continue animation
      }
    };

    requestAnimationFrame(animate); // Start the animation

    return () => {
      setAnimatedCount(0); // Reset animated count on unmount
    };
  }, [visitorCount]);

  // Call recordVisit when component mounts
  useEffect(() => {
    recordVisit();
  }, []);

  return (
    <div className="flex flex-col items-center  text-white font-bold rounded s p-4">
      <div>
        <span className="text-4xl">{animatedCount}</span>
        <span className="text">times</span>
      </div>
      <span className="text-lg">💖 Hearts Touched</span>
    </div>
  );
};

export default VisitTracker;
