import PageLayout from "../../components/PageLayout";
import { Button } from "@mui/material";
import JobProfileItem from "./components/JobProfileItem";


function JobProfilePage(){

    return(
        <PageLayout title="Job Profile">

            <Button 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{
                margin: "115px 0 0px 115px"
            }}
            >
            Add Job
            </Button>

            <JobProfileItem/>
            
        </PageLayout>
    )
}
export default JobProfilePage;