import AssessmentPage from "./pages/Assessment/AssessmentPage";
import CourseFeedbackPage from "./pages/CourseFeedback/CourseFeedbackPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import HomePage from "./pages/Home/HomePage";
import JobProfilePage from "./pages/JobProfile/JobProfilePage";
import LinkedInLearning from "./pages/LinkedInLearning/LinkedInLearningPage";
import LoginPage from "./pages/Login/LoginPage";
import SkillImportancePage from "./pages/SkillImportance/SkillImportancePage";
import TrainingPlanPage from "./pages/TrainingPlan/TrainingPlanPage";
import CreateJobProfilePage from "./pages/CreateJobProfile/CreateJobProfilePage";
import EmployeeOverviewPage from "./pages/EmployeeOverview/EmployeeOverviewPage";
import CodeChallengePage from "./pages/CodeChallenge/CodeChallengePage";

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
    path: "skill-importance",
    element: <SkillImportancePage />,
  },
  {
    path: "create-job-profile",
    element: <CreateJobProfilePage />,
  },
  {
    path: "employee-overview",
    element: <EmployeeOverviewPage />,
  },
  {
    path: "code-challenge",
    element: <CodeChallengePage />,
  },
];

export default ROUTES;
