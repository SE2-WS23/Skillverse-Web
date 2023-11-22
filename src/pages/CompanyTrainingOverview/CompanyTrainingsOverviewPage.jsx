import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PageLayout from "../../components/PageLayout";
import { useTheme } from "@mui/material/styles";

const CourseListItem = ({ courseNumber, width, height, backgroundColor }) => (

  <Grid

    item
    xs={12}
    sm={6}
    md={4}
    sx={{
      width,
      height,
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
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
};

CourseListItem.defaultProps = {
  width: "100%",
  height: "150px",
  backgroundColor: "#2196F3",
};

/**
 * Renders the CompanyTrainingsOverview page.
 * @returns {JSX.Element} CompanyTrainingsOverviewPage component
 */
function CompanyTrainingsOverviewPage() {
  const theme = useTheme();

  // Empty onClick function for the button
  const handleAddCourseClick = () => {
    console.log("Add Course button is clicked");
  };

  return (

    <PageLayout title="Company Trainings Overview">

      {/* Container for the page content */}
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

        {/* Button for adding courses */}

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginTop: "16px", alignSelf: "flex-start" }}
          onClick={handleAddCourseClick}
        >

          ADD COURSE

        </Button>

        {/* Container for the Grid of courses */}

        <Grid
          container
          rowSpacing={4}
          columnSpacing={4}
          sx={{
            marginTop: "50px",
            width: "100%",
            display: "flex",
            justifyContent: "center", // Center the Grid horizontally
          }}
        >

          {/* Map through an array of course items to create CourseListItems */}
          {[1, 2, 3, 4, 5, 6].map((course) => (

            // Use the CourseListItem component for each course item
            <CourseListItem
              key={course}
              courseNumber={course}
              backgroundColor={theme.palette.primary.main}
            />

          ))}

        </Grid>

      </Box>

    </PageLayout>

  );
  
}

export default CompanyTrainingsOverviewPage;
