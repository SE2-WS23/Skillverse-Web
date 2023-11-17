import { useTheme } from "@emotion/react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PageLayout from "../../components/PageLayout";
import EmployeeCard from "./components/EmployeeCard";
import FilterEmployeeModal from "./components/FilterEmployeeModal";
import employees from "./mockData";

function EmployeeOverviewPage() {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const theme = useTheme();
  return (
    <PageLayout title="Employee Overview">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m={4}
      >
        <Button variant="contained" color="primary" size="large">
          Add Employee
        </Button>
        <Box display="flex" alignItems="center">
          <Typography variant="body2">
            Displaying {filteredEmployees.length} of {employees.length}
          </Typography>
          <IconButton size="small" onClick={handleOpenModal}>
            <FilterAltIcon />
            Filter
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={4} sx={{ p: 4 }}>
        {employees?.map((employee) => (
          <Grid item md={6} lg={4} xl={3} key={uuidv4()}>
            <EmployeeCard employee={employee} />
          </Grid>
        ))}
      </Grid>
      <FilterEmployeeModal open={openModal} handleClose={handleCloseModal} />
    </PageLayout>
  );
}

export default EmployeeOverviewPage;
