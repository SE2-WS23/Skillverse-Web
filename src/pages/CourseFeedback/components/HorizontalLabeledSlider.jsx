import { Box, Slider, Typography } from "@mui/material";
import PropTypes from "prop-types";
/**
 * @param {number} props.value - The value of the Slider component.
 * @param {number} props.max - The maximum value of the Slider component.
 * @param {string} props.label - The label for the Slider component.
 * @param {function} props.onChange - The function to call when the Slider component changes.
 * @returns {JSX.Element} - The HorizontalLabeledSlider component.
 */
function HorizontalLabeledSlider(props) {
  return (
    <Box>
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
