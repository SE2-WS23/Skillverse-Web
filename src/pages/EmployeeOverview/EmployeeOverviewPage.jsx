import { Grid } from "@mui/material";
import PageLayout from "../../components/PageLayout";
import EmployeeCard from "./components/EmployeeCard";

function EmployeeOverviewPage() {
  return (
    <PageLayout title="Employee Overview">
      <Grid container spacing={12} sx={{ p: 4 }}>
        <Grid item md={6} lg={4} xl={3}>
          <EmployeeCard />
        </Grid>
        <Grid item md={6} lg={4} xl={3}>
          <EmployeeCard />
        </Grid>
        <Grid item md={6} lg={4} xl={3}>
          <EmployeeCard />
        </Grid>
        <Grid item md={6} lg={4} xl={3}>
          <EmployeeCard />
        </Grid>
        <Grid item md={6} lg={4} xl={3}>
          <EmployeeCard />
        </Grid>
        <Grid item md={6} lg={4} xl={3}>
          <EmployeeCard />
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default EmployeeOverviewPage;
