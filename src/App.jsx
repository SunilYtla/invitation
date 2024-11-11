import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Events from "./components/Events";
import HeroSection from "./components/HeroSection";
import Greetings from "./components/Greetings";

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
  return <RouterProvider router={router} />;
}

export default App;
