import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import PageLayout from "../../components/PageLayout";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./mockData";

function EmployeeOverviewPage() {
  return (
    <PageLayout title="Employee Overview">
      <Grid container spacing={12} sx={{ p: 4 }}>
        {employees?.map((employee) => (
          <Grid item md={6} lg={4} xl={3} key={uuidv4()}>
            <EmployeeCard employee={employee} />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
}

export default EmployeeOverviewPage;
