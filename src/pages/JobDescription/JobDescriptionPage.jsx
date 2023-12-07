import { Box, Button, Grid, Typography } from "@mui/material/";
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
  const [skills, setSkills] = useState(
    mockedSkills.reduce((obj, item) => {
      obj[item] = false;
      return obj;
    }, {})
  );

  return (
    <PageLayout title="Job Description">
      <Typography variant="h4" marginTop={10} marginLeft={10}>
        Select relevant Skills describing the job
      </Typography>
      <Grid
        container
        rowSpacing={10}
        columnSpacing={10}
        columns={16}
        marginTop={1}
        justifyContent={"center"}
      >
        {Object.keys(skills)?.map((skill) => (
          <JobDescriptionItem
            skillName={skill}
            key={uuidv4()}
            value={skills[skill]}
            onChange={() => {
              setSkills((prevState) => ({
                ...prevState,
                [skill]: !prevState[skill],
              }));
            }}
          />
        ))}
      </Grid>
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
          sx={{ margin: "50px 50px 20px 0" }}
          onClick={() => {
            const selectedSkills = Object.keys(skills).filter(
              (skill) => skills[skill]
            ); // returns an array of selected skills
            console.log(selectedSkills);
          }}
        >
          Save changes
        </Button>
      </Box>
    </PageLayout>
  );
}
export default JobDescriptionPage;
