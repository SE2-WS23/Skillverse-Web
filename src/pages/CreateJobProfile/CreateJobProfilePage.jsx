import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PageLayout from "../../components/PageLayout";

/**
 * Renders the create job profile page.
 * @returns {JSX.Element} The create job profile page component.
 */
function CreateJobProfilePage() {

    return (
        <PageLayout title="Create Job Profile" viewportPage>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h3">Insert details of the job</Typography>
                <TextField
                    id="jobName"
                    label="Job Name"
                    variant="outlined"
                    size="medium"
                    sx={{ mt: 4, width: "60%" }}  
                />
                <TextField
                    id="jobDescription"
                    label="Job Description"
                    variant="outlined"
                    size="medium"
                    multiline
                    rows={15}
                    sx={{ mt: 4, width: "60%" }} 
                />
            </Box>

            <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                    position: "fixed",
                    bottom: "10px",
                    right: "10px"
                }}
            >
                Next
            </Button>
        </PageLayout>
    );
}

export default CreateJobProfilePage;
