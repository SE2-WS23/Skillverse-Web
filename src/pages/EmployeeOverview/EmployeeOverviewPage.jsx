import { Grid } from "@mui/material";
import PageLayout from "../../components/PageLayout";
import EmployeeCard from "./components/EmployeeCard";

function EmployeeOverviewPage() {
  return (
    <PageLayout title="Employee Overview">
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <EmployeeCard />
        </Grid>
        <Grid item xs={6}>
          <EmployeeCard />
        </Grid>
        <Grid item xs={6}>
          <EmployeeCard />
        </Grid>
        <Grid item xs={6}>
          <EmployeeCard />
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default EmployeeOverviewPage;
