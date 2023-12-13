import AssessmentPage from "./pages/Assessment/AssessmentPage";
import CodeChallengePage from "./pages/CodeChallenge/CodeChallengePage";
import CourseFeedbackPage from "./pages/CourseFeedback/CourseFeedbackPage";
import CreateJobProfilePage from "./pages/CreateJobProfile/CreateJobProfilePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import EmployeeOverviewPage from "./pages/EmployeeOverview/EmployeeOverviewPage";
import EmployeeProfilePage from "./pages/EmployeeProfile/EmployeeProfilePage";
import HomePage from "./pages/Home/HomePage";
import JobDescriptionPage from "./pages/JobDescription/JobDescriptionPage";
import JobProfilePage from "./pages/JobProfile/JobProfilePage";
import LinkedInLearning from "./pages/LinkedInLearning/LinkedInLearningPage";
import LoginPage from "./pages/Login/LoginPage";
import QuizPage from "./pages/Quiz/QuizPage";
import SkillImportancePage from "./pages/SkillImportance/SkillImportancePage";
import TrainingPlanPage from "./pages/TrainingPlan/TrainingPlanPage";
import ArticlePage from "./pages/Article/ArticlePage";
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
    path: "article",
    element: <ArticlePage />,
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
    path: "employee-profile",
    element: <EmployeeProfilePage />,
  },
  {
    path: "job-description",
    element: <JobDescriptionPage />,
  },
  {
    path: "code-challenge",
    element: <CodeChallengePage />,
  },
  {
    path: "quiz",
    element: <QuizPage />,
  },
];

export default ROUTES;
