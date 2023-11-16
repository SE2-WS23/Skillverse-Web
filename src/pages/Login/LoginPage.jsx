import { useState } from "react";
import { Button, Box, Grid, TextField, Typography } from "@mui/material";

/**
 * Renders a login page with email and password fields and a login button.
 *
 * @returns {JSX.Element} The LoginPage component.
 */
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleLogin = () => {
    console.log("Login clicked");
    console.log("Email: " + email);
    console.log("Password: " + password);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailError(!validateEmail(emailValue));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  /**
   * The function `validateEmail` uses a regular expression to validate if an email address is in the
   * correct format.
   * @returns The function `validateEmail` returns a boolean value indicating whether the provided
   * email is valid or not.
   */
  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#1975D2"
      color="#fff"
      height="100vh"
      width="100vw"
      margin="0">
      <Grid
        item
        xs={5}>
        <Typography
          fontWeight={700}
          variant="h2">
          Welcome to Skillverse!
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}>
        <Box
          py={8}
          px="20%"
          backgroundColor="#fff"
          display="flex"
          flexDirection="column"
          justifyContent="between"
          maxWidth="xl">
          <Typography
            fontWeight={500}
            variant="h4"
            sx={{
              mb: 16,
              color: "black",
              textAlign: "center",
            }}>
            Login into your account
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            xs={{ gap: 10 }}>
            <TextField
              size="medium"
              label="Email"
              variant="standard"
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              helperText={
                emailError ? "Please enter a valid email address" : ""
              }
              sx={{
                mb: 8,
              }}
            />
            <TextField
              size="medium"
              label="Password"
              variant="standard"
              type="password"
              required
              value={password}
              onChange={handlePasswordChange}
              sx={{
                mb: 16,
              }}
            />
          </Box>
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{
              width: "auto",
              flexGrow: 0,
            }}
            onClick={handleLogin}
            disabled={!validateEmail(email)}>
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
