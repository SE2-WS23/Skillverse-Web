import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PageLayout from "../../components/PageLayout";
import { useTheme } from "@mui/material/styles";

const TrainingListItem = ({ trainingNumber, width, height, backgroundColor }) => (

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

      Training {trainingNumber}

    </Typography>

  </Grid>

);

TrainingListItem.propTypes = {
  trainingNumber: PropTypes.number.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
};

TrainingListItem.defaultProps = {
  width: "100%",
  height: "150px",
  backgroundColor: "#2196F3",
};

/**
 * Renders the CompanyCourseManagement page.
 * @returns {JSX.Element} CompanyCourseManagementPage component
 */
function CompanyCourseManagementPage() {
  const theme = useTheme();

  // Empty onClick function for the button
  const handleAddTrainingClick = () => {
    console.log("Add Training button is clicked");
  };

  return (

    <PageLayout title="Company Course Management">

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

        {/* Button for adding trainings */}

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginTop: "16px", alignSelf: "flex-start" }}
          onClick={handleAddTrainingClick}
        >

          ADD TRAINING

        </Button>

        {/* Container for the Grid of trainings */}

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

          {/* Map through an array of training items to create TrainingListItems */}
          {[1, 2, 3, 4, 5, 6].map((training) => (

            // Use the TrainingListItem component for each training item
            <TrainingListItem
              key={training}
              trainingNumber={training}
              backgroundColor={theme.palette.primary.main}
            />

          ))}

        </Grid>

      </Box>

    </PageLayout>

  );

}

export default CompanyCourseManagementPage;
