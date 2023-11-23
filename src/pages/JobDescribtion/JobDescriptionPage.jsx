import { Button, Grid, Typography } from "@mui/material/";
import { v4 as uuidv4 } from "uuid";
import PageLayout from "../../components/PageLayout";
import JobDescriptionItem from "./components/JobDescriptionItem";
import mockedDescription from "./mockData";

function JobDescriptionPage() {
  return (
    <PageLayout title="Job Description">
      <Typography
        variant="h2"
        sx={{
          width: "732px",
          height: "59px",
          flexShrink: "0",
          fontSize: "30px",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          marginTop: "100px",
          marginLeft: "auto",
          marginRight: "auto",
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
        {mockedDescription?.map((jobDescription) => (
          <JobDescriptionItem jobDescription={jobDescription} key={uuidv4()} />
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          display: "flex",
          width: "175px",
          height: "43",
          padding: "6px 16px",
          justifyContent: "center",
          alignItems: "center",
          left: "75%",
          marginTop: "20%",
          marginLeft: "60px",
          marginBottom: "50px",
        }}
      >
        Save changes
      </Button>
    </PageLayout>
  );
}
export default JobDescriptionPage;
