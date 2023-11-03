import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/Error/ErrorPage";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
