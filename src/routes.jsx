import AssessmentPage from "./pages/Assessment/AssessmentPage";
import CourseFeedbackPage from "./pages/CourseFeedback/CourseFeedbackPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import EmployeeCreationPage from "./pages/EmployeeCreation/EmployeeCreationPage";
import EmployeeOverviewPage from "./pages/EmployeeOverview/EmployeeOverviewPage";
import HomePage from "./pages/Home/HomePage";
import JobProfilePage from "./pages/JobProfile/JobProfilePage";
import LinkedInLearning from "./pages/LinkedInLearning/LinkedInLearningPage";
import LoginPage from "./pages/Login/LoginPage";
import TrainingPlanPage from "./pages/TrainingPlan/TrainingPlanPage";

const ROUTES = [
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
    path: "course-feedback",
    element: <CourseFeedbackPage />,
  },
  {
    path: "job-profile",
    element: <JobProfilePage />,
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
    path: "employee-creation",
    element: <EmployeeCreationPage />,
  },
  {
    path: "employee-overview",
    element: <EmployeeOverviewPage />,
  },
];

export default ROUTES;
