import { Avatar, Box, Button, Fab, TextField, Typography } from "@mui/material";
import UploadBox from "./components/UploadBox";
import PageLayout from "../../components/PageLayout";

/**
 * The `EmployeeCreationPage` function is a React component that renders a form for users to create
 * a new employee, including fields for the employee's name, email, phone number, address, and
 * additional information, as well as a button to upload a resume and a button to create the employee.
 * @returns {JSX.Element} The Employee creation page component.
 */

function EmployeeCreationPage() {

  function EmployeeCreation(event) {
    console.log("Employee has been created");
  }
  function changeAvatar(event) {
    console.log("Avatar has been changed");
  }




  return (
    <PageLayout viewportPage title="Employee Creation">
      <form className="employeeCreationForm">
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100vw",
        flexDirection: "column"
      }}      
        >
          <Box maxWidth="50%">
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
  <Avatar sx={{ width: "10vw", height: "20vh", variant: "circular" }} />
  <Fab
    color="primary"
    aria-label="add"
    size="large"
    variant="circular"
    sx={{
      alignSelf: "end",
      marginRight: "1vw", 
      marginBottom: "1vh", 
    }} onClick={changeAvatar}> +
    </Fab>
  </Box>
      <Box >
      <TextField  
      label="Name"  margin="normal" sx={{ minWidth:"20vw"}}/>
      <TextField  
      label="Email" margin="normal" sx={{ minWidth:"20vw"}}/>
      
      </Box>
      <Box display="flex" flexDirection="row">
      <TextField  label="Phone number" margin="normal" sx={{ minWidth:"20vw"}} />
      <TextField  
      label="Address" margin="normal" sx={{ minWidth:"20vw"}}/>
      </Box>
    <Box display="flex "
    
    flexDirection="column">
      <TextField
        margin="normal"
        type="submit"
        label="Extra info" 
        minRows={6}
        sx={{ minWidth:"40vw"}}
        multiline/>
    </Box>
      <Typography variant="h6">Submit Files </Typography>
      <UploadBox title="Resume" />
        </Box>

        <Button 
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        onClick={EmployeeCreation}>Create Employee
        </Button>
      </Box>
    </form>
    </PageLayout>
  );
}

export default EmployeeCreationPage;

