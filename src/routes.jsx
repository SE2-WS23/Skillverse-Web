import AssessmentPage from "./pages/Assessment/AssessmentPage";
<<<<<<< HEAD
import CodeChallengePage from "./pages/CodeChallenge/CodeChallengePage";
import CompanyCourseManagementPage from "./pages/CompanyCourseManagement/CompanyCourseManagementPage";
import CompanyTrainingsOverviewPage from "./pages/CompanyTrainingOverview/CompanyTrainingsOverviewPage";
=======
import CompanyCourseManagementPage from "./pages/CompanyCourseManagement/CompanyCourseManagementPage";
import CompanyTrainingsOverviewPage from "./pages/CompanyTrainingOverview/CompanyTrainingsOverviewPage";
import CodeChallengePage from "./pages/CodeChallenge/CodeChallengePage";
>>>>>>> f486009a491d78c6eb20466bb937ba2e12ac7569
import CourseFeedbackPage from "./pages/CourseFeedback/CourseFeedbackPage";
import CreateJobProfilePage from "./pages/CreateJobProfile/CreateJobProfilePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
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
    path: "company-course-management",
    element: <CompanyCourseManagementPage />,
  },
  {
    path: "company-trainings-overview",
    element: <CompanyTrainingsOverviewPage />,
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
