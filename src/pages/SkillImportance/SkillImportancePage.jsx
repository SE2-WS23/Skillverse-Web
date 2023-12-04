import { Box, Button, Grid } from "@mui/material";
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

  return (
    <PageLayout viewportPage title="Skill Importance">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100% - 60px)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            height: "80%",
            overflow: "hidden",
            overflowY: "auto",
          }}
        >
          <Grid
            container
            rowSpacing={6}
            columnSpacing={10}
            columns={16}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "50px",
              marginBottom: "50px",
              marginLeft: "35px",
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
      </Box>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{ position: "absolute", bottom: "10px", right: "10px" }}
      >
        Save Changes
      </Button>
    </PageLayout>
  );
}

export default SkillImportancePage;
