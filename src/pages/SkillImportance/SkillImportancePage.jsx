import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import SkillImportanceItem from "./components/SkillImportanceItem";
import mockedSkills from "./mockData";

/* 
The `SkillImportancePage` function is a React component that renders a page for users to rate the
importance of different skills. 
@returns {JSX.Element} - The SkillImportancePage component.
*/
function SkillImportancePage() {
  const defaultSliderValue = 0;

  const [sliderData, setSliderData] = useState(
    mockedSkills.map((item) => ({
      ...item,
      value: defaultSliderValue,
    }))
  );

  const handleSliderChange = (category, skill, newValue) => {
    setSliderData((currentData) =>
      currentData.map((slider) =>
        slider.category === category && slider.skill === skill
          ? { ...slider, value: newValue }
          : slider
      )
    );
  };

  const handleSubmit = () => {
    console.log(sliderData);
  };

  return (
    <PageLayout
      title="Skill Importance"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Box
        sx={{
          justifyContent: "center",
          width: "80%",
          minWidth: "900px",
          margin: "auto",
          flexGrow: 1,
        }}
      >
        <Grid
          container
          rowSpacing={6}
          columns={12}
          sx={{
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          {sliderData?.map((slider) => (
            <SkillImportanceItem
              category={slider.category}
              skill={slider.skill}
              value={slider.value}
              handleSliderChange={handleSliderChange}
              key={`${slider.category}-${slider.skill}`}
            />
          ))}
        </Grid>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "100%",
          mt: "auto",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          sx={{ margin: "50px 20px 20px 0" }}
        >
          Save Changes
        </Button>
      </Box>
    </PageLayout>
  );
}

export default SkillImportancePage;
