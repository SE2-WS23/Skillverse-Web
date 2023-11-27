import { useTheme } from "@emotion/react";
import {
  Grid,
  ListItem,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function JobDescriptionItem(props) {
  const [selected, setSelected] = React.useState(() => [0]);
  const handleChange = (_, newSelected) => {
    setSelected(newSelected);
  };
  return (
    <Grid item xs={3}>
      <ToggleButtonGroup value={selected} onChange={handleChange}>
        <ToggleButton
          value="true"
          sx={{
            height: "50px",
            width: "150px",
            background: useTheme().palette.primary.light,
          }}
        >
          <ListItem sx={{ textAlign: "center", fontSize: "60px" }}>
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
