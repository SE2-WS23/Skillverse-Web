import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Card, CardContent, Collapse, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import CircularProgressWithLabel from "../../../components/CircularProgressWithLabel";
import ExpandMoreButton from "../../../components/ExpandMoreButton";

/**
 * A component that displays a training block with course name, skills, progress, and description.
 *
 * @param {Object} props - The props object.
 * @param {string} props.courseName - The name of the course.
 * @param {string[]} props.skills - An array of skills related to the course.
 * @param {string} props.description - The description of the course.
 * @param {number} props.progress - The progress of the course as a percentage.
 * @returns {JSX.Element} - The TrainingBlock component.
 */

function TrainingBlock(props) {
  const theme = useTheme();

  const lightBlue = theme.palette.primary.light;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        m: 2,
      }}
    >
      <CardContent
        sx={{
          background: lightBlue,
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "0 !important",
        }}
      >
        <Box overflow="hidden">
          <Typography variant="h6">{props.courseName}</Typography>
          <Typography variant="caption">{props.skills.join(", ")}</Typography>
          <Collapse sx={{ pt: 2 }} in={expanded} timeout="auto" unmountOnExit>
            <Typography paragraph>{props.description}</Typography>
          </Collapse>
        </Box>
        <Box ml={4} display="flex" flexDirection="column">
          <CircularProgressWithLabel value={props.progress} />
          <ExpandMoreButton
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMoreButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TrainingBlock;

TrainingBlock.propTypes = {
  courseName: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};