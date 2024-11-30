import React from "react";

const LandingContent = ({ handleOpen }) => (
  <div
    onClick={handleOpen}
    className="relative z-10 flex flex-col items-center justify-around h-full text-center"
  >
    <div className="bg-rose-950  rounded-xl p-6 border-4 border-rose-950 shadow-lg">
      <h1 className="text-xl font-bold text-gold tracking-widest">
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
          window.open("https://maps.app.goo.gl/13vSFC7iCeyP1x616", "_blank")
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

      {/* <span className="text-white text-sm">Navigate to Function Hall</span> */}
    </div>
  </div>
);

export default LandingContent;
