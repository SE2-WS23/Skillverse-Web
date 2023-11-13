import { Button } from "@mui/material";
import PageLayout from "../../components/PageLayout";
import HorizontalLabeledSlider from "./components/HorizontalLabeledSlider";

function CourseFeedbackPage() {
  return (
    <PageLayout viewportPage title="Course Feedback">
      <HorizontalLabeledSlider label="Course Content" max={10} />
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ position: "absolute", bottom: "10px", right: "10px" }}
      >
        Send
      </Button>
    </PageLayout>
  );
}

export default CourseFeedbackPage;
