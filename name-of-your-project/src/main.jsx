import React from "react";
import ReactDOM from "react-dom/client";
// import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";
import "./index.css";
import { Splash } from "./splash";
import { Visualization } from "./visualization";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/login",
    element: <Visualization />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);