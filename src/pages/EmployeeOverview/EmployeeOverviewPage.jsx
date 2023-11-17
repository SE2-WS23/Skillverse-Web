import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PageLayout from "../../components/PageLayout";
import EmployeeCard from "./components/EmployeeCard";
import FilterEmployeeModal from "./components/FilterEmployeeModal";
import employees from "./mockData";

/**
 * EmployeeOverviewPage component displays a list of employees and allows filtering by job title and course.
 * @returns {JSX.Element} EmployeeOverviewPage component
 */
function EmployeeOverviewPage() {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  /**
   * The function filters employees based on job titles and courses.
   * @returns a boolean value. It will return true if the employee matches the filter parameters, and
   * false otherwise.
   */
  function filterEmployees(filterParams, employee) {
    const jobTitlesMatch =
      filterParams.jobTitles?.length === 0 ||
      filterParams.jobTitles?.includes(employee.jobTitle);

    const coursesMatch =
      filterParams.courses?.length === 0 ||
      employee.courses.some((course) =>
        filterParams.courses?.includes(course.name)
      );
    return jobTitlesMatch && coursesMatch;
  }

  /**
   * The function handleCloseModal updates the filteredEmployees state based on the filterParams and
   * closes the modal.
   */
  function handleCloseModal(filterParams) {
    if (filterParams) {
      setFilteredEmployees(
        employees.filter((employee) => {
          return filterEmployees(filterParams, employee);
        })
      );
    }
    setOpenModal(false);
  }

  function handleAddEmployee() {
    console.log("Add Employee");
  }

  return (
    <PageLayout title="Employee Overview">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m={4}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleAddEmployee}
        >
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
        {filteredEmployees?.length > 0 ? (
          filteredEmployees.map((employee) => (
            <Grid item md={6} lg={4} xl={3} key={uuidv4()}>
              <EmployeeCard employee={employee} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6">
              No employees match the filter criteria.
            </Typography>
          </Grid>
        )}
      </Grid>
      <FilterEmployeeModal
        open={openModal}
        handleClose={handleCloseModal}
        employees={employees}
      />
    </PageLayout>
  );
}

export default EmployeeOverviewPage;
