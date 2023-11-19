import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import PageLayout from "../../components/PageLayout";
import { useTheme } from "@mui/material/styles";

const TrainingListItem = ({ trainingNumber, width, height, backgroundColor }) => (

  <ListItem
    sx={{
      width,
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor,
    }}
  >

    <ListItemText
      primary={`Training ${trainingNumber}`}
      sx={{ color: "#fff", textAlign: "center" }}
    />
  </ListItem>

);

TrainingListItem.propTypes = {
  trainingNumber: PropTypes.number.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
};

TrainingListItem.defaultProps = {
  width: "400px",
  height: "100px",
  backgroundColor: "#2196F3", // theme.palette.primary.main doesn't work here
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

    <PageLayout title="CompanyCourseManagement">

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
          sx={{ marginLeft: "16px", marginTop: "16px", alignSelf: "flex-start" }}
          onClick={handleAddTrainingClick}
        >
          ADD TRAINING
        </Button>

        {/* Container for the List of trainings */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexGrow: 1,
            padding: "20px",
          }}
        >

          {/* List component to display trainings */}
          <List
            sx={{
              display: "grid",
              marginTop: "100px",
              gridTemplateColumns: "repeat(2, 400px)",
              gap: "80px",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >

            {/* Map through an array of training items to create ListItems */}
            {[1, 2, 3, 4, 5, 6].map((training) => (
              // Use the TrainingListItem component for each training item
              <TrainingListItem
                key={training}
                trainingNumber={training}
                backgroundColor={theme.palette.primary.main}
              />
              
            ))}

          </List>

        </Box>

      </Box>

    </PageLayout>

  );

}

export default CompanyCourseManagementPage;
