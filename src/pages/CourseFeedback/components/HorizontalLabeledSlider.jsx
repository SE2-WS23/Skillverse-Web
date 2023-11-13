import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

function HorizontalLabeledSlider(props) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h6">{props.label}</Typography>
      <Slider
        size="medium"
        color="primary"
        orientation="horizontal"
        value={value}
        valueLabelDisplay="auto"
        marks
        max={props.max}
        onChange={handleChange}
      />
    </Box>
  );
}

HorizontalLabeledSlider.propTypes = {
  label: PropTypes.string.isRequired,
  max: PropTypes.number,
};

export default HorizontalLabeledSlider;
