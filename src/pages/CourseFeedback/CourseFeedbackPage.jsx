import React, { useState } from "react";
import { Button, Slider } from "@mui/material";
import PageLayout from "../../components/PageLayout";

function CourseFeedbackPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PageLayout viewportPage title="Course Feedback">
      <Slider
        size="medium"
        color="primary"
        orientation="horizontal"
        value={value}
        onChange={handleChange}
        aria-label="feedback slider"
      />
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
