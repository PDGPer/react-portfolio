import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Error from "./components/Error";
import "./style.css";
import BlogIndex from "./pages/blog/BlogIndex";
import Year0 from "./pages/blog/texts/Year0";

// React boilerplate
const container = document.getElementById("root");
const root = createRoot(container);

// Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/blog",
                element: <BlogIndex />,
            },
            { path: "/blog/year0", element: <Year0 /> },
        ],
    },
]);

root.render(<RouterProvider router={router} />);
