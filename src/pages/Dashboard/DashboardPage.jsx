import { Box } from "@mui/system";
import PageLayout from "../../components/PageLayout";

function DashboardPage() {
  return (
    <PageLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          //56px and 64px are the height of the toolbar specified in the
          //theme for different viewports
          height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" },
          backgroundColor: "secondary.main",
        }}
      ></Box>
    </PageLayout>
  );
}

export default DashboardPage;
