import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import "./style.css";

// React boilerplate
const container = document.getElementById("root");
const root = createRoot(container);

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
