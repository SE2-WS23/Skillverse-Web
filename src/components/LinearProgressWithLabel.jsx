import { Box, LinearProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";

/**
 * A component that displays a linear progress bar with a label.
 * @param {Object} props - The props object of the component.
 * @param {string} props.title - The title to display above the progress bar.
 * @param {number} props.value - The value of the progress bar (between 0 and 100).
 * @returns {JSX.Element} - The LinearProgressWithLabel component.
 */
function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" flexDirection="column" sx={{ width: "100%" }}>
      <Box display="flex" justifyContent="space-between">
        <Typography noWrap marginRight={3}>
          {props.title || ""}
        </Typography>
        <Typography>{props.value || 0}%</Typography>
      </Box>
      <LinearProgress variant="determinate" value={props.value || 0} />
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
};

export default LinearProgressWithLabel;
