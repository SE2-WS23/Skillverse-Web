import { useTheme } from "@mui/material/styles";
import { Box, Button, Divider, Stack, Typography, alpha } from "@mui/material";
import { useRouteError, Link } from "react-router-dom";

function renderSuggestions(error_type) {
  switch (error_type) {
    case "Not Found":
      return (
        <Stack align="center" direction="column">
          <Button
            align="center"
            variant="contained"
            component={Link}
            to="/"
            size="large"
            sx={{ fontFamily: "Courier New" }}
          >
            Return to Homepage
          </Button>
          <Typography
            variant="p"
            padding={"1%"}
            fontFamily={"'Courier New', monospace"}
          >
            Or...
          </Typography>
          <Button
            align="center"
            variant="outlined"
            sx={{ fontFamily: "Courier New" }}
          >
            Visit Web course to build your own page!
          </Button>
        </Stack>
      );
    default:
      return (
        <Button align="center" variant="contained" component={Link} to="/">
          Return to Homepage
        </Button>
      );
  }
}
function renderExplain(error_type) {
  switch (error_type) {
    case "Not Found":
      return (
        <Typography variant="p">
          {"The URL " + window.location.href + " could not be found."}
        </Typography>
      );
    default:
      return <Typography variant="0">Unknown error.</Typography>;
  }
}
function ErrorPage() {
  const theme = useTheme();
  const error = useRouteError();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "felx",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        overflow: "scroll",
      }}
    >
      <Typography variant="h1" textAlign="center" fontWeight={"bold"}>
        Error
      </Typography>
      <Stack
        direction="column"
        sx={{
          borderStyle: "none",
          marginLeft: "3%",
          marginRight: "3%",
          padding: "3%",
          bgcolor: alpha(theme.palette.primary.light, 0.5),
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h4"
          fontFamily={"'Courier New', monospace"}
          color={theme.palette.primary.contrastText}
          marginBottom={"10vh"}
        >
          An unexpected error has occurred. See details and possible suggestions
          below.
        </Typography>
        <Divider textAlign="center">
          <Typography fontFamily="Courier New">Details</Typography>
        </Divider>
        <Typography
          variant="p"
          color={theme.palette.primary.contrastText}
          margin={"2vh"}
          align="center"
          fontFamily={"'Courier New', monospace"}
        >
          Type: {error.statusText || error.message || "Error unknown"}
        </Typography>
        <Typography
          variant="p"
          color={theme.palette.primary.contrastText}
          marginBottom={"2vh"}
          align="center"
          fontFamily={"'Courier New', monospace"}
        >
          Explanaition: {renderExplain(error.statusText)}
        </Typography>
        <Divider textAlign="center">
          <Typography fontFamily="Courier New">Suggestions</Typography>
        </Divider>
        <Stack
          alignSelf={"center"}
          marginTop={"2vh"}
          direction="column"
          color={theme.palette.primary.contrastText}
        >
          {renderSuggestions(error.statusText)}
        </Stack>
      </Stack>
    </Box>
  );
}

export default ErrorPage;
