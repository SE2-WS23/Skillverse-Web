import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PageLayout from "../../components/PageLayout";

/**
 * Renders the dashboard page with 3 menu items.
 * @returns {JSX.Element} The dashboard page component.
 */
function DashboardPage() {
  const navigate = useNavigate();

  const STANDARD_DASHBOARD_ITEMS = [
    {
      text: "Company Course Management",
      link: "#",
    },
    {
      text: "Employee Management",
      link: "#",
    },
    {
      text: "Job Profiles",
      link: "#",
    },
  ];

  return (
    <PageLayout title="Dashboard">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          //56px and 64px are the height of the toolbar specified in the
          //theme for different viewports
          height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" },
        }}
      >
        {STANDARD_DASHBOARD_ITEMS?.map((item) => (
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ margin: "15vh 5vw" }}
            onClick={() => navigate(item.link)}
            key={uuidv4()}
          >
            {item.text.toUpperCase()}
          </Button>
        ))}
      </Box>
    </PageLayout>
  );
}

export default DashboardPage;
