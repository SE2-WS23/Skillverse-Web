import { Button, TextField } from "@mui/material";
import PageLayout from "../../components/PageLayout";
import HorizontalLabeledSlider from "./components/HorizontalLabeledSlider";
import { useState } from "react";
import "./CourseFeedbackPage.css";

function CourseFeedbackPage() {
  const [courseContentValue, setCourseContentValue] = useState(0);
  const [courseLengthValue, setCourseLengthValue] = useState(0);
  const [textInput, setTextInput] = useState("");

  const handleCourseContentChange = (event, newValue) => {
    setCourseContentValue(newValue);
  };

  const handleCourseLengthChange = (event, newValue) => {
    setCourseLengthValue(newValue);
  };

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Content Value:", courseContentValue);
    console.log("Length Value:", courseLengthValue);
    console.log("Text Input:", textInput);
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
          value={textInput}
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
