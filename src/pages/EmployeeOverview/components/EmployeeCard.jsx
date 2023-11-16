import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import LinearProgressWithLabel from "../../../components/LinearProgressWithLabel";

function EmployeeCard() {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      bgcolor={theme.palette.primary.light}
      xs={{ p: 2 }}
    >
      <Grid item xs={6}>
        <Box>
          <Avatar variant="square" sx={{ height: 125, width: 125 }} />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <IconButton>
              <InventoryOutlinedIcon />
            </IconButton>
            <IconButton>
              <PendingActionsOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        sx={{ display: "flex", flexDirection: "column" }}
        xs={6}
      >
        <Typography variant="h6">Employee Name</Typography>
        <Typography variant="body2">Job Title</Typography>
        <Typography variant="body2">Email</Typography>
        <Typography variant="body1">Courses</Typography>
        <LinearProgressWithLabel title="Course Name" value={12} />
        <LinearProgressWithLabel title="Course Name" value={12} />
        <Typography variant="a">View All</Typography>
      </Grid>
    </Grid>
  );
}

export default EmployeeCard;
