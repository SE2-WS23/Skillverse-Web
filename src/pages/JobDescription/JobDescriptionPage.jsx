import { Button, Grid, Typography } from "@mui/material/";
import { v4 as uuidv4 } from "uuid";
import PageLayout from "../../components/PageLayout";
import JobDescriptionItem from "./components/JobDescriptionItem";
import mockedSkills from "./mockData";
import { useTheme } from "@emotion/react";
/**
 * A component which renders the JobDescriptionPage to let the company select the necessary skills for the job
 * @returns {JSX.Element} The JobDescriptionPage component.
 */

function JobDescriptionPage() {
  return (
    <PageLayout title="Job Description">
      <Typography
        variant="h1"
        sx={{
          margin: "100px 100px",
          fontSize: useTheme().typography,
        }}
      >
        Select relevant Skills describing the job
      </Typography>
      <Grid
        container
        rowSpacing={15}
        columnSpacing={10}
        columns={16}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        {mockedSkills?.map((jobDescription) => (
          <JobDescriptionItem mockedSkills={jobDescription} key={uuidv4()} />
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          left: "75%",
          margin: " 80px 60px",
        }}
      >
        Save changes
      </Button>
    </PageLayout>
  );
}
export default JobDescriptionPage;
