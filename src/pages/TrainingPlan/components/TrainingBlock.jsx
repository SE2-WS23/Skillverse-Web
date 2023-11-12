import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Card, CardContent, Collapse, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import React from "react";
import CircularProgressWithLabel from "../../../components/CircularProgressWithLabel";
import ExpandMoreButton from "../../../components/ExpandMoreButton";

function TrainingBlock(props) {
  const theme = useTheme();

  const lightBlue = theme.palette.primary.light;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        m: 2,
      }}>
      <CardContent
        sx={{
          background: lightBlue,
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "0 !important",
        }}>
        <Box overflow="hidden">
          <Typography>{props.courseName}</Typography>
          <Typography noWrap>{props.skills.join(", ")}</Typography>
        </Box>
        <Box
          ml={4}
          display="flex"
          flexDirection="column">
          <CircularProgressWithLabel value={props.progress} />
          <ExpandMoreButton
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMoreButton>
        </Box>
      </CardContent>
      <Collapse
        sx={{ background: lightBlue }}
        in={expanded}
        timeout="auto"
        unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.description}</Typography>
        </CardContent>
      </Collapse>
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