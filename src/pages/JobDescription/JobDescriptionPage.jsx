import { useTheme } from "@emotion/react";
import { Button, Grid, Typography } from "@mui/material/";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PageLayout from "../../components/PageLayout";
import JobDescriptionItem from "./components/JobDescriptionItem";
import mockedSkills from "./mockData";
/**
 * A component which renders the JobDescriptionPage to let the company select the necessary skills for the job
 * @returns {JSX.Element} The JobDescriptionPage component.
 */

function JobDescriptionPage() {
  const theme = useTheme();
  const [skills, setSkills] = useState(
    mockedSkills.reduce((obj, item) => {
      obj[item] = false;
      return obj;
    }, {})
  );

  return (
    <PageLayout title="Job Description">
      <Typography
        variant="h1"
        sx={{
          margin: "100px 100px",
          fontSize: theme.typography,
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
        {Object.keys(skills)?.map((skill) => (
          <JobDescriptionItem
            skillName={skill}
            key={uuidv4()}
            value={skills[skill]}
            onChange={() => {
              console.log(skill, skills[skill]);
              setSkills((prevState) => ({
                ...prevState,
                [skill]: !prevState[skill],
              }));
            }}
          />
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          left: "75%",
          margin: "80px 60px",
        }}
        onClick={() => {
          const selectedSkills = Object.keys(skills).filter(
            (skill) => skills[skill]
          ); // returns an array of selected skills
          console.log(selectedSkills);
        }}
      >
        Save changes
      </Button>
    </PageLayout>
  );
}
export default JobDescriptionPage;
