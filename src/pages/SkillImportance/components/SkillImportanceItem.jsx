import { useTheme } from "@emotion/react";
import { Box, Grid, Slider } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";

/* 
The `SkillImportanceItem` function is a React component that renders a grid item containing a box
and a slider. 
@param {Object} props - The props object.
*/
function SkillImportanceItem(props) {
  const theme = useTheme();

  const category = props.category || "";
  const skill = props.skill || "";
  const value = props.value || 0;

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box
        sx={{
          margin: "0 20px",
          padding: "20px",
          background: theme.palette.primary.light,
        }}
      >
        <Typography variant="h6">{category}</Typography>
        <Typography variant="body1">{skill}</Typography>
      </Box>
      <Slider
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value)) {
            props.handleSliderChange(category, skill, value);
          }
        }}
        sx={{ margin: "0 50px", width: "calc(100% - 100px)" }}
        valueLabelDisplay="auto"
        value={value}
        step={1}
        marks
        min={0}
        max={10}
      ></Slider>
    </Grid>
  );
}

SkillImportanceItem.propTypes = {
  category: PropTypes.string,
  skill: PropTypes.string,
  value: PropTypes.number,
  handleSliderChange: PropTypes.func,
};

export default SkillImportanceItem;
