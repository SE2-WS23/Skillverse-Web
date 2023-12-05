import BannerItem from "./components/BannerItem";
import BioItem from "./components/BioItem";
import ContactItem from "./components/ContactItem";
import FileActionItem from "./components/FileActionItem";
import OverviewItem from "./components/OverviewItem";
import PageLayout from "../../components/PageLayout";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import { PropTypes } from "prop-types";
import person1 from "./data/mockData";

/**
 *Renders employeeprofile page
 * @returns {JSX.Element} Employee profile page
 */

function EmployeeProfilePage(props) {
  const empployeeProfileObject = props.EmployeeObject || person1;
  return (
    <Box>
      <PageLayout title="Employee Profile" viewportPage>
        <BannerItem userHeader={empployeeProfileObject.userHeader} />
        <Box alignItems="center" justifyContent="center" padding="5%">
          <Grid container spacing={8} rowSpacing={8}>
            <Grid xs={2.5}>
              <OverviewItem
                title="Skills"
                list={empployeeProfileObject.skills}
              ></OverviewItem>
            </Grid>
            <Grid xs={2.5}>
              <OverviewItem
                title="Certificates"
                list={empployeeProfileObject.certificates}
              ></OverviewItem>
            </Grid>
            <Grid xs={7}>
              <BioItem abouttxt={empployeeProfileObject.aboutme}></BioItem>
            </Grid>
            <Grid xs={5}>
              <FileActionItem
                files={empployeeProfileObject.files}
              ></FileActionItem>
            </Grid>
            <Grid xs={7}>
              <ContactItem
                contact={empployeeProfileObject.contacts}
              ></ContactItem>
            </Grid>
          </Grid>
        </Box>
      </PageLayout>
    </Box>
  );
}

EmployeeProfilePage.propTypes = {
  EmployeeObject: PropTypes.shape({
    skills: PropTypes.array,
    certificates: PropTypes.array,
    aboutme: PropTypes.string,
    files: PropTypes.array,
    contacts: PropTypes.array,
    userHeader: PropTypes.array,
  }).isRequired,
};

export default EmployeeProfilePage;
