import { Button, TextField } from "@mui/material";
import PageLayout from "../../components/PageLayout";
import HorizontalLabeledSlider from "./components/HorizontalLabeledSlider";
import { useState } from "react";
import "./CourseFeedbackPage.css";

/**
 * The `CourseFeedbackPage` function is a React component that renders a form for users to provide
 * feedback on a course, including sliders for course content and length, a text field for additional
 * comments, and a submit button.
 * @returns The CourseFeedbackPage component is being returned.
 */
function CourseFeedbackPage() {
  const [courseContentValue, setCourseContentValue] = useState(0);
  const [courseLengthValue, setCourseLengthValue] = useState(0);
  const [additionalFeedback, setAdditionalFeedback] = useState("");

  const handleCourseContentChange = (event) => {
    setCourseContentValue(event.target.value);
  };

  const handleCourseLengthChange = (event) => {
    setCourseLengthValue(event.target.value);
  };

  const handleTextChange = (event) => {
    setAdditionalFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <PageLayout viewportPage title="Course Feedback">
      <form className="feedbackForm" onSubmit={handleSubmit}>
        <HorizontalLabeledSlider
          label="Course Content"
          max={10}
          value={courseContentValue}
          onChange={handleCourseContentChange}
        />
        <HorizontalLabeledSlider
          label="Course Length"
          max={10}
          value={courseLengthValue}
          onChange={handleCourseLengthChange}
        />
        <TextField
          label="Additional Comments"
          variant="standard"
          value={additionalFeedback}
          onChange={handleTextChange}
          multiline
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginLeft: "auto" }}
        >
          Send
        </Button>
      </form>
    </PageLayout>
  );
}

export default CourseFeedbackPage;
