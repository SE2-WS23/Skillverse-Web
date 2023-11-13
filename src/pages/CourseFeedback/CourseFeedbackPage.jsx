import { Button, TextField } from "@mui/material";
import PageLayout from "../../components/PageLayout";
import HorizontalLabeledSlider from "./components/HorizontalLabeledSlider";
import { useState } from "react";
import "./CourseFeedbackPage.css";

function CourseFeedbackPage() {
  const [textInput, setTextInput] = useState("");

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Slider Value:", sliderValue);
    console.log("Text Input:", textInput);
  };
  return (
    <PageLayout viewportPage title="Course Feedback">
      <form className="feedbackForm" onSubmit={handleSubmit}>
        <HorizontalLabeledSlider label="Course Content" max={10} />
        <HorizontalLabeledSlider label="Course Length" max={10} />
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
          sx={{ position: "absolute", bottom: "10px", right: "10px" }}
        >
          Send
        </Button>
      </form>
    </PageLayout>
  );
}

export default CourseFeedbackPage;
