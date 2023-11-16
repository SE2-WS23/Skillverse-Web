import { Button, Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import PageLayout from "../../components/PageLayout";
import JobProfileItem from "./components/JobProfileItem";
import mockedJobs from "./mockData";

function JobProfilePage() {
  return (
    <PageLayout title="Job Profile">
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          margin: "115px 0 0px 115px",
        }}
      >
        Add Job
      </Button>

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
        {mockedJobs?.map((jobProfile) => (
          <JobProfileItem jobProfile={jobProfile} key={uuidv4()} />
        ))}
      </Grid>
    </PageLayout>
  );
}
export default JobProfilePage;
