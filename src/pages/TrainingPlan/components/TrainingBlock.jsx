/**
 * A component that displays a training block with course name, skills, progress, and description.
 * @param {Object} props - The props object.
 * @param {Object} props.training - The training object containing course name, skills, progress, description, and status.
 * @param {string} props.training.courseName - The name of the course.
 * @param {string[]} props.training.skills - The skills covered in the course.
 * @param {string} props.training.description - The description of the course.
 * @param {number} props.training.progress - The progress of the user in the course.
 * @param {number} [props.training.status] - The status of the course.
 * @returns {JSX.Element} - The TrainingBlock component.
 */
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Card,
  CardContent,
  Collapse,
  ListItem,
  Typography,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import CircularProgressWithLabel from "../../../components/CircularProgressWithLabel";
import ExpandMoreButton from "../../../components/ExpandMoreButton";

function TrainingBlock(props) {
  const theme = useTheme();

  const lightBlue = theme.palette.primary.light;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ListItem alignItems="flex-start" disablePadding sx={{ display: "block" }}>
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
            <Typography variant="h6">
              {props.training.courseName || ""}
            </Typography>
            <Typography variant="caption">
              {props.training.skills?.join(", ") || ""}
            </Typography>
            <Collapse sx={{ pt: 2 }} in={expanded} timeout="auto" unmountOnExit>
              <Typography paragraph>
                {props.training.description || ""}
              </Typography>
            </Collapse>
          </Box>
          <Box ml={4} display="flex" flexDirection="column">
            <CircularProgressWithLabel value={props.training.progress || 0} />
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
    </ListItem>
  );
}

export default TrainingBlock;

TrainingBlock.propTypes = {
  training: PropTypes.shape({
    courseName: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    progress: PropTypes.number,
    status: PropTypes.number,
  }),
};
