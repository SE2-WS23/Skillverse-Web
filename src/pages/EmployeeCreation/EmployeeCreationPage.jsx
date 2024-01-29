import {
  Avatar,
  Box,
  Button,
  Fab,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material';
import UploadBox from './components/UploadBox';
import PageLayout from '../../components/PageLayout';
import { useState } from 'react';

/**
 * The `EmployeeCreationPage` function is a React component that renders a form for users to create
 * a new employee, including fields for the employee's name, email, phone number, address, and
 * additional information, as well as a button to upload a resume and a button to create the employee.
 * @returns {JSX.Element} The Employee creation page component.
 */
function EmployeeCreationPage() {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeePhoneNumber, setEmployeePhoneNumber] = useState('');
  const [employeeAddress, setEmployeeAddress] = useState('');
  const [employeeExtraInfo, setEmployeeExtraInfo] = useState('');
  const [employeeEmailError, setEmployeeEmailError] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleEmployeeNameChange = (event) => {
    setEmployeeName(event.target.value);
  };

  const handleEmployeeEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmployeeEmail(emailValue);
    setEmployeeEmailError(!validateEmail(emailValue));
  };

  const handleEmployeePhoneNumberChange = (event) => {
    setEmployeePhoneNumber(event.target.value);
  };

  const handleEmployeeAddressChange = (event) => {
    setEmployeeAddress(event.target.value);
  };

  const handleEmployeeExtraInfoChange = (event) => {
    setEmployeeExtraInfo(event.target.value);
  };

  const handleChangeAvatar = (event) => {
    console.log('Avatar has been changed');
  };

  function handleSubmit() {
    console.log('Employee has been created');
    console.log('Name of employee: ' + employeeName);
    console.log('Email of employee: ' + employeeEmail);
    console.log('Phone number of employee: ' + employeePhoneNumber);
    console.log('Address of employee: ' + employeeAddress);
  }

  const validateEmail = (employeeEmail) => {
    // Regular expression for email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(employeeEmail);
  };

  return (
    <PageLayout viewportPage title='Employee Creation'>
      <FormGroup className='employeeCreationForm'>
        <Box
          sx={{
            paddingBottom: '30px',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            minWidth: '100vw',
            flexDirection: 'column',
          }}
        >
          <Box maxWidth='50%'>
            <Box>
              <Avatar
                sx={{ width: '10vw', height: '10vw', variant: 'circular' }}
              />
              <Fab
                position='absolute'
                color='primary'
                aria-label='add'
                size='large'
                variant='circular'
                sx={{
                  width: '4vw',
                  height: '4vw',
                  alignSelf: 'end',
                  marginTop: '-5vw',
                  marginInlineStart: '6vw',
                }}
                onClick={handleChangeAvatar}
              >
                +
              </Fab>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TextField
                label='Name'
                sx={{ minWidth: '20vw', m: 1.5 }}
                value={employeeName}
                onChange={handleEmployeeNameChange}
              />
              <TextField
                label='Email'
                type='email'
                sx={{ minWidth: '20vw', m: 1.5 }}
                value={employeeEmail}
                onChange={handleEmployeeEmailChange}
                error={employeeEmailError}
                helperText={
                  employeeEmailError ? 'Please enter a valid email address' : ''
                }
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TextField
                label='Phone Number'
                type='tel'
                sx={{ minWidth: '20vw', m: 1.5 }}
                value={employeePhoneNumber}
                onChange={handleEmployeePhoneNumberChange}
              />
              <TextField
                label='Address'
                type='address'
                sx={{ minWidth: '20vw', m: 1.5 }}
                value={employeeAddress}
                onChange={handleEmployeeAddressChange}
              />
            </Box>
            <Box sx={{ flexDirection: 'column' }}>
              <TextField
                margin='normal'
                type='submit'
                label='Extra Info'
                minRows={6}
                value={employeeExtraInfo}
                multiline
                onChange={handleEmployeeExtraInfoChange}
                fullWidth
              />
            </Box>
            <Typography variant='h6'>Submit Files </Typography>
            <UploadBox
              title='Resume'
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />
          </Box>
          <Button
            sx={{ marginTop: '2vh' }}
            type='submit'
            variant='contained'
            color='primary'
            size='large'
            onClick={handleSubmit}
          >
            Create Employee
          </Button>
        </Box>
      </FormGroup>
    </PageLayout>
  );
}

export default EmployeeCreationPage;
