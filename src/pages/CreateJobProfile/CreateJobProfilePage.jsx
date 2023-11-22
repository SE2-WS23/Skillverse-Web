import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PageLayout from "../../components/PageLayout";
import { useState } from "react";

/**
 * Renders the create job profile page.
 * @returns {JSX.Element} The create job profile page component.
 */
function CreateJobProfilePage() {

    const [jobName, setJobName] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    const handleJobNameChange = (event) => {
        setJobName(event.target.value);
    }

    const handleJobDescriptionChange = (event) => {
        setJobDescription(event.target.value);
    }

    const handleNext = () => {
        console.log("Next clicked");
        console.log("Job Name: " + jobName);
        console.log("Job Description: " + jobDescription);
    }

    return (
        <PageLayout title="Create Job Profile" viewportPage>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "calc(100% - 60px)",
                }}
            >
                <Typography variant="h3">Insert details of the job</Typography>
                <TextField
                    id="jobName"
                    label="Job Name"
                    variant="outlined"
                    size="medium"
                    sx={{ mt: 4, width: "60%" }}  
                    onChange={handleJobNameChange}
                />
                <TextField
                    id="jobDescription"
                    label="Job Description"
                    variant="outlined"
                    size="medium"
                    multiline
                    rows={15}
                    sx={{ mt: 4, width: "60%" }} 
                    onChange={handleJobDescriptionChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 4, alignSelf: "flex-end", marginRight: "10px" }} // Align the button to the right
                    onClick={handleNext}
                >
                    Next
                </Button>
            </Box>

        </PageLayout>
    );
}

export default CreateJobProfilePage;
