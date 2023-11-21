import { useTheme } from "@emotion/react";
import {
  ToggleButton,
  Grid,
  ToggleButtonGroup,
  ListItem,
  ListItemText,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function JobDescriptionItem(props) {
  const [selected, setSelected] = React.useState(() => [0]);
  const handleChange = (event, newSelected) => {
    setSelected(newSelected);
  };
  return (
    <Grid item xs={3}>
      <ToggleButtonGroup value={selected} onChange={handleChange}>
        <ToggleButton
          value="true"
          sx={{
            height: "100px",
            width: "200px",
            background: useTheme().palette.primary.light,
          }}
        >
          <ListItem>
            <ListItemText
              primary={props.jobDescription.skills || ""}
            ></ListItemText>
          </ListItem>
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
}

JobDescriptionItem.propTypes = {
  jobDescription: PropTypes.shape({
    skills: PropTypes.string,
  }),
};

export default JobDescriptionItem;
