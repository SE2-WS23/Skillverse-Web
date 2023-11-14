// Import necessary components from Material-UI library
import Button from "@mui/material/Button";
import { List, ListItem, ListItemText } from "@mui/material";
// Import custom PageLayout component
import PageLayout from "../../components/PageLayout";

// CCMPage component definition
function CCMPage() {
  // Return JSX markup for the CCMPage component
  return (
    // Use the custom PageLayout component with specific title and viewport settings
    <PageLayout title="CCM" viewportPage>

      {/* Container for the page content */}
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: "20px", 
        }}
      >

        {/* Button for adding training */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginLeft: "16px", marginTop: "16px", alignSelf: "flex-start" }} // Align the button to the top-left
        >
          ADD TRAINING
        </Button>

        {/* Container for the List of trainings */}
        <div
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
              gap: "80px", // Adjust as needed
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >

            {/* Map through an array of training items to create ListItems */}
            {[1, 2, 3, 4, 5, 6].map((training) => (
              // Individual ListItem component for each training item
              <ListItem
                key={training}
                sx={{
                  width: "400px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  backgroundColor: "#2196F3",
                }}
              >
                {/* Display the training item text in the ListItem */}
                <ListItemText
                  primary={`Training ${training}`}
                  sx={{ color: "#fff", textAlign: "center" }}
                />
              </ListItem>
            ))}

          </List>

        </div>

      </div>

    </PageLayout>
  );
}

// Export the CCMPage component as the default export
export default CCMPage;
