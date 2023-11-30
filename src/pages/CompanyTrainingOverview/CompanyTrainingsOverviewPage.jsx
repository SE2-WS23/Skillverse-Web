import React from "react";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import PageLayout from "../../components/PageLayout";
import { useTheme } from "@mui/material/styles";
import mockCourses from "./mockCourses";
import CourseListItem from "./components/CourseListItem"; 

function CompanyTrainingsOverviewPage() {
  const theme = useTheme();

  const handleAddCourseClick = () => {
    console.log("Add Course button is clicked");
  };

  return (

    <PageLayout title="Company Trainings Overview">

      <Box

        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: "20px",
        }}

      >

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginTop: "16px", alignSelf: "flex-start" }}
          onClick={handleAddCourseClick}
        >

          ADD COURSE

        </Button>

        <Grid
          container
          rowSpacing={4}
          columnSpacing={4}
          sx={{
            marginTop: "50px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}

        >

          {mockCourses.map((course) => (

            <CourseListItem
              key={course.courseNumber}
              courseNumber={course.courseNumber}
              backgroundColor={theme.palette.primary.main}
            />

          ))}

        </Grid>

      </Box>

    </PageLayout>

  );

}

export default CompanyTrainingsOverviewPage;
