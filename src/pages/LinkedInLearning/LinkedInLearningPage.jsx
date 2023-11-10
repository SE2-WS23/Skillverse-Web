import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import PageLayout from "../../components/PageLayout";

/**
 * Renders the LinkedIn Learning page.
 * @returns {JSX.Element} LinkedIn Learning page component
 */
function LinkedInLearning() {
  return (
    <PageLayout viewportPage title="LinkedIn Learning">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100% - 60px)",
        }}
      >
        <video width="80%" height="90%" controls>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ position: "absolute", bottom: "10px", right: "10px" }}
      >
        Next
      </Button>
    </PageLayout>
  );
}

export default LinkedInLearning;
