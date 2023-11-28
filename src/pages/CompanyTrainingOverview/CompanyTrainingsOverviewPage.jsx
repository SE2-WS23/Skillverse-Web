import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PageLayout from "../../components/PageLayout";
import { useTheme } from "@mui/material/styles";
import mockCourses from "./mockCourses"; 

const CourseListItem = ({ courseNumber, backgroundColor }) => (

  <Grid

    item
    xs={12}
    sm={6}
    md={4}
    sx={{
      width: "100%",
      height: "150px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "10px",

    }}

  >

    <Typography variant="h6" sx={{ color: "#fff", textAlign: "center" }}>

      Course {courseNumber}

    </Typography>

  </Grid>

);

CourseListItem.propTypes = {
  courseNumber: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string,
};

CourseListItem.defaultProps = {
  backgroundColor: "#2196F3",
};

function CompanyTrainingsOverviewPage() {
  const theme = useTheme();

  const handleAddCourseClick = () => {
    console.log("Add Course button is clicked");
  };

  return (

    <PageLayout title="Company Course Management">

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
