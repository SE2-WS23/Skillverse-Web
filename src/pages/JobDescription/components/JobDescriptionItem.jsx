import { useTheme } from "@emotion/react";
import { Grid, ToggleButton } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
/**
 * A component that displays a training block with course name, skills, progress, and description.
 * @param {Object} props - The props object.
 * @param {Object} props.JobDescription - The training object containing course name, skills, progress, description, and status.
 * @param {string} props.mockedSkills - Prints the Skills in the toggles
 * @returns {JSX.Element} the JobDescriptionPage Component.
 */

function JobDescriptionItem(props) {
  const theme = useTheme();
  return (
    <Grid item xs={3}>
      <ToggleButton
        value={props.skillName}
        sx={{
          height: "50px",
          width: "150px",
          background: theme.palette.primary.light,
        }}
        onChange={props.onChange}
        selected={props.value}
      >
        {props.skillName}
      </ToggleButton>
    </Grid>
  );
}

JobDescriptionItem.propTypes = {
  skillName: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

export default JobDescriptionItem;
