import { useTheme } from "@emotion/react";
import { ToggleButton, Grid, ListItem, ListItemText } from "@mui/material";
import React from "react";
/**
 * A component that displays a training block with course name, skills, progress, and description.
 * @param {Object} props - The props object.
 * @param {Object} props.jobDescription - The training object containing course name, skills, progress, description, and status.
 * @param {string} props.skill - Prints the Skills in the toggles
 * @returns {JSX.Element} the JobDescriptionPage Component.
 */

function JobDescriptionItem(props) {
  const [selected, setSelected] = React.useState(false);
  return (
    <Grid item xs={3}>
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
        sx={{
          height: "50px",
          width: "150px",
          background: useTheme().palette.primary.light,
        }}
      >
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText>{props.mockedSkills}</ListItemText>
        </ListItem>
      </ToggleButton>
    </Grid>
  );
}

export default JobDescriptionItem;
