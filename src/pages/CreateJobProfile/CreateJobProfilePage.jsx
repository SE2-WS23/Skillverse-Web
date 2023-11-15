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

    const handelNext = () => {
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
                    hight: "calc(100% - 60px)",
                }}
            >
                <Typography variant="h3">Insert details of the job</Typography>
                <TextField
                    id="jobName"
                    label="Job Name"
                    variant="outlined"
                    size="medium"
                    sx={{ mt: 4, width: "60%" }}  
                    onChange={(event) => {setJobName(event.target.value)}}
                />
                <TextField
                    id="jobDescription"
                    label="Job Description"
                    variant="outlined"
                    size="medium"
                    multiline
                    rows={15}
                    sx={{ mt: 4, width: "60%" }} 
                    onChange={(event) => {setJobDescription(event.target.value)}}
                />
            </Box>

            <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px"
                }}
                onClick={handelNext}
            >
                Next
            </Button>
        </PageLayout>
    );
}

export default CreateJobProfilePage;
