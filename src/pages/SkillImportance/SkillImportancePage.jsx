import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PageLayout from "../../components/PageLayout";
import SkillImportanceItem from "./components/SkillImportanceItem";
import mockedSkills from "./mockData";

function SkillImportancePage() {
  const defaultSliderValue = 0;

  const [sliderData, setSliderData] = useState(
    mockedSkills.map((item) => ({
      ...item,
      value: defaultSliderValue,
    }))
  );

  const handleSliderChange = (category, skill, newValue) => {
    const updatedSliders = sliderData.map((slider) =>
      slider.category === category && slider.skill === skill
        ? { ...slider, value: newValue }
        : slider
    );
    setSliderData(updatedSliders);
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
            marginTop: "50px",
          }}
        >
          {sliderData?.map((slider) => (
            <SkillImportanceItem
              category={slider.category}
              skill={slider.skill}
              value={slider.value}
              handleSliderChange={handleSliderChange}
              key={uuidv4()}
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
          sx={{ margin: "10px 20px 20px 0" }}
        >
          Save Changes
        </Button>
      </Box>
    </PageLayout>
  );
}

export default SkillImportancePage;
