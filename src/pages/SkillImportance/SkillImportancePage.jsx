import React from "react";
import PageLayout from "../../components/PageLayout";
import { Button, Grid, Box } from "@mui/material";
import mockedSkills from "./mockData";
import { v4 as uuidv4 } from "uuid";
import SkillImportanceItem from "./components/SkillImportanceItem";

function SkillImportancePage() {
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
            {mockedSkills?.map((skillImportance) => (
              <SkillImportanceItem
                skillImportance={skillImportance}
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
