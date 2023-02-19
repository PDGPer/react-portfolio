import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import "./style.css";

// React boilerplate
const container = document.getElementById("root");
const root = createRoot(container);

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>You're lost, feller.</div>,
  },
]);

root.render(<RouterProvider router={router} />);
