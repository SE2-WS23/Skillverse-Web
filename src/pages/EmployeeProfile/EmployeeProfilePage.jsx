import PageLayout from "../../components/PageLayout";
import {
  BannerItem,
  BioItem,
  ContactItem,
  FileActionItem,
  OverviewItem,
} from "./components";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import person1 from "./data/mockData";

/**
 *Renders employeeprofile page
 * @returns {JSX.Element} Employee profile page
 */

function EmployeeProfilePage() {
  return (
    <Box>
      <PageLayout title="Employee Profile" viewportPage>
        <Box alignItems="center" justifyContent="center">
          <Grid container spacing={2} rowSpacing={2}>
            <Grid xs={12}>
              <BannerItem />
            </Grid>
            <Grid xs={2.5}>
              <OverviewItem title="Skills" list={person1.skills}></OverviewItem>
            </Grid>
            <Grid xs={2.5}>
              <OverviewItem
                title="Certificates"
                list={person1.certificates}
              ></OverviewItem>
            </Grid>
            <Grid xs={7}>
              <BioItem abouttxt={person1.aboutme}></BioItem>
            </Grid>
            <Grid xs={5}>
              <FileActionItem files={person1.files}></FileActionItem>
            </Grid>
            <Grid xs={7}>
              <ContactItem contact={person1.contacts}></ContactItem>
            </Grid>
          </Grid>
        </Box>
      </PageLayout>
    </Box>
  );
}

export default EmployeeProfilePage;
