import { Avatar, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function EmployeeCard() {
  const theme = useTheme();
  return (
    <Grid container spacing={2} bgcolor={theme.palette.primary.light}>
      <Grid item>
        <Box>
          <Avatar variant="square" />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <IconButton />
            <IconButton />
          </Box>
        </Box>
      </Grid>
      <Grid item container></Grid>
    </Grid>
  );
}

export default EmployeeCard;
