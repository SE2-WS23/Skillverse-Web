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
  return (
    <Grid item xs={3} justifyContent={"center"}>
      <ToggleButton
        fullWidth
        value={props.skillName || "Skill Name"}
        color="primary"
        sx={{
          textTransform: "none",
        }}
        onChange={props.onChange || (() => {})()}
        selected={props.value || false}
      >
        {props.skillName || "Skill Name"}
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
