import { Button, Grid } from "@mui/material/";
import { v4 as uuidv4 } from "uuid";
import PageLayout from "../../components/PageLayout";
import JobDescriptionItem from "./components/JobDescribtionItem";
import mockedDescription from "./mockData";

function JobDescriptionPage() {
  return (
    <PageLayout title="Job Description">
      <h2>Select relevant Skills for the job</h2>

      <Grid
        container
        rowSpacing={6}
        columnSpacing={10}
        columns={16}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        {mockedDescription?.map((jobDescription) => (
          <JobDescriptionItem jobDescription={jobDescription} key={uuidv4()} />
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ position: "absolute", right: "10px" }}
      >
        Save changes
      </Button>
    </PageLayout>
  );
}
export default JobDescriptionPage;
