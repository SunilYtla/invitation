import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Events from "./components/Events";
import HeroSection from "./components/HeroSection";
import Greetings from "./components/Greetings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const router = createBrowserRouter([
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/",
    element: <HeroSection />,
  },
  {
    path: "/greetings",
    element: <Greetings />,
  },
]);

function App() {
  return (
    <>
      {/* Main Router */}
      <RouterProvider router={router} />

      {/* Floating Instagram Icon and Signature */}
      <div className="fixed  bottom-0 right-0 flex items-center space-x-2  text-rose-950 px-0 py-1 rounded-full z-50">
        {/* Instagram Icon with Link */}
        <a
          href="https://www.instagram.com/sunil_vytla/profilecard/?igsh=bnFvbnJicjV4Y2l0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition duration-300"
        >
          <span className="ml-2 text-xs"></span>
          <FontAwesomeIcon size="3x" icon={faInstagram} />
        </a>
        {/* Signature */}
        <span className="ml-2 text-xs"></span>
      </div>
    </>
  );
}

export default App;
