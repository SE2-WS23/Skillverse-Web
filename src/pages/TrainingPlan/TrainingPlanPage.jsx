import { Box, List, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CustomTabPanel from "../../components/CustomTabPanel";
import PageLayout from "../../components/PageLayout";
import TrainingBlock from "./components/TrainingBlock";
import mockedTrainings from "./mockData";

/**
 * Renders the Training Plan page with tabs for Not started, In Progress, and Done.
 * @returns {JSX.Element} The Training Plan page.
 */
function TrainingPlanPage() {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  return (
    <PageLayout title="Training Plan" viewportPage>
      <Box sx={{ width: "100%", typography: "body1", mt: 2 }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab value={0} label="Not started" />
          <Tab value={1} label="In Progress" />
          <Tab value={2} label="Done" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <List>
          {mockedTrainings?.map((training) => {
            if (training.status === 0) {
              return <TrainingBlock training={training} key={uuidv4()} />;
            }
            return null;
          })}
        </List>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <List>
          {mockedTrainings?.map((training) => {
            if (training.status === 1) {
              return <TrainingBlock training={training} key={uuidv4()} />;
            }
            return null;
          })}
        </List>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <List>
          {mockedTrainings?.map((training) => {
            if (training.status === 2) {
              return <TrainingBlock training={training} key={uuidv4()} />;
            }
            return null;
          })}
        </List>
      </CustomTabPanel>
    </PageLayout>
  );
}

export default TrainingPlanPage;
