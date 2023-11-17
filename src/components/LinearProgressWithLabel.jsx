import { Box, LinearProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" flexDirection="column">
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

export default LinearProgressWithLabel;

LinearProgressWithLabel.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
};
