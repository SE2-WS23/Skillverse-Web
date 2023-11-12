import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import PageLayout from "../../components/PageLayout";

/**
 * Renders the Assessment page.
 * @returns {JSX.Element} AssessmentPage component
 */
function AssessmentPage() {
  return (
    <PageLayout viewportPage title="Assessment">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100% - 60px)",
        }}
      >
        {/* This code is only a placeholder for the real assessment. */}
        <Box
          sx={{
            height: "90%",
            width: "80%",
            backgroundColor: "#D9D9D9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Assessment
        </Box>
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

export default AssessmentPage;
