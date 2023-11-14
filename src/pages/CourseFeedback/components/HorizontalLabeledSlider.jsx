import { Box, Slider, Typography } from "@mui/material";
import PropTypes from "prop-types";

function HorizontalLabeledSlider(props) {
  return (
    <Box sx={{ padding: "10px" }}>
      <Typography variant="h6">{props.label}</Typography>
      <Slider
        size="medium"
        color="primary"
        orientation="horizontal"
        value={props.value || 0}
        valueLabelDisplay="auto"
        marks
        max={props.max || 10}
        onChange={props.onChange}
      />
    </Box>
  );
}

HorizontalLabeledSlider.propTypes = {
  label: PropTypes.string.isRequired,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default HorizontalLabeledSlider;
