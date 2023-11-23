import { useTheme } from "@emotion/react";
import { Grid, ListItem, ListItemText, Box, Slider } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";

function SkillImportanceItem(props) {
  const [slider, setSlider] = useState(0);

  const handleSlide = (event, newNumber) => {
    setSlider(newNumber);
  };

  const theme = useTheme();

  return (
    <Box sx={{ width: 395 }}>
      <Grid item xs={14}>
        <ListItem
          sx={{
            height: "100px",
            background: theme.palette.primary.light,
          }}
        >
          <ListItemText
            primary={props.skillImportance.category || ""}
            secondary={props.skillImportance.skill || ""}
            secondaryTypographyProps={{ align: "center" }}
          />
        </ListItem>
      </Grid>

      <Slider
        onChange={handleSlide}
        sx={{ width: 350 }}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      ></Slider>
    </Box>
  );
}

export default SkillImportanceItem;
SkillImportanceItem.propTypes = {
  skillImportance: PropTypes.shape({
    category: PropTypes.string,
    skill: PropTypes.string,
  }),
};
