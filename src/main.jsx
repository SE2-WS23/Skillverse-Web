import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/Error/ErrorPage";
import ROUTES from "./routes";

import HomePage from "./pages/Home/HomePage";
import LinkedInLearning from "./pages/LinkedInLearning/LinkedInLearningPage";
import LoginPage from "./pages/Login/LoginPage";
import TrainingPlanPage from "./pages/TrainingPlan/TrainingPlanPage";
import DescribeTheJobPage from "./pages/JobProfile/DescribeTheJobPage";


const theme = createTheme({
  palette: {
    primary: {
      main: "#1565C0",
      light: "#BBDEFB",
      dark: "#0D46A1",
      contrastText: "#fff",
    },
  },
  spacing: 4,
});

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "linked-in-learning",
        element: <LinkedInLearning />,
      },
      {
        path: "training-plan",
        element: <TrainingPlanPage />,
      },
      {
        path: "assessment",
        element: <AssessmentPage />,
      },
      {
        path: "DescribeTheJob",
        element: <DescribeTheJobPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>
);
