import PageLayout from "../../components/PageLayout";
import { Button, Grid } from "@mui/material";
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
        {mockedJobs?.map((job) => (
          <JobProfileItem key={job.title} job={job} />
        ))}
      </Grid>
    </PageLayout>
  );
}
export default JobProfilePage;
