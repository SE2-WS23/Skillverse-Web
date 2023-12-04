import { useTheme } from "@emotion/react";
import { Box, Grid, ListItem, ListItemText, Slider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function SkillImportanceItem(props) {
  const theme = useTheme();

  const category = props.category || "";
  const skill = props.skill || "";
  const value = props.value || 0;

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
            primary={category}
            secondary={skill}
            secondaryTypographyProps={{ align: "center" }}
          />
        </ListItem>
      </Grid>

      <Slider
        onChange={(e) =>
          props.handleSliderChange(category, skill, parseInt(e.target.value))
        }
        sx={{ width: 350 }}
        valueLabelDisplay="auto"
        value={value}
        step={1}
        marks
        min={0}
        max={10}
      ></Slider>
    </Box>
  );
}

SkillImportanceItem.propTypes = {
  category: PropTypes.string,
  skill: PropTypes.string,
  value: PropTypes.number,
  handleSliderChange: PropTypes.func,
};

export default SkillImportanceItem;
