//imports
import PageLayout from "../../components/PageLayout";

import { BannerItem, BioItem, ContactItem, FileActionItem, OverviewItem } from './components'
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from "@mui/material";
import { v4 as uuid } from "uuid";


//mock data
const skills = [{prmry:'Skill1', scndry:'1', uid: uuid()}, {prmry:'Skill2', scndry:'2', uid: uuid()}, {prmry:'Skill3', scndry:'5', uid: uuid()}];
const certificates = [{prmry:'Cert1', scndry:'from school', uid: uuid()}, {prmry:'Cert2', scndry:'from work', uid: uuid()}, {prmry:'Cert3', scndry:'from uni', uid: uuid()}];
const aboutme = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
const files = ['cv.pdf', 'report.pdf']
const contacts = {phone:'+12345678', email:'username@email.com', address:'Street address 1'}

function EmployeeProfilePage(){

    return(

        //return html
        <div>
            <PageLayout title="Employee Profile" viewportPage>

                <Box    alignItems="center"
                        justifyContent="center">

                <Grid   container spacing={2}
                        rowSpacing={2}>
                    <Grid xs={12}>
                        <BannerItem></BannerItem>
                    </Grid>
                    <Grid xs={2.5}>
                        <OverviewItem title="Skills" list={skills}></OverviewItem>
                    </Grid>
                    <Grid xs={2.5}>
                        <OverviewItem title="Certificates" list={certificates}></OverviewItem>
                    </Grid>
                    <Grid xs={7}>
                        <BioItem abouttxt={aboutme}></BioItem>
                    </Grid>
                    <Grid xs={5}>
                        <FileActionItem files={files}></FileActionItem>
                    </Grid>
                    <Grid xs={7}>
                        <ContactItem contact={contacts}></ContactItem>
                    </Grid>
                </Grid>

                </Box>

        </PageLayout>

        </div>
    );
}

export default EmployeeProfilePage