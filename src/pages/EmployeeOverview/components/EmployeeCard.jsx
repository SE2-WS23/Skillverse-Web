import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import {
  Avatar,
  Card,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import LinearProgressWithLabel from "../../../components/LinearProgressWithLabel";

function EmployeeCard(props) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(4),
      }}
    >
      <Grid item xs={5}>
        <Box>
          <Avatar
            variant="square"
            sx={{ height: 125, width: 125 }}
            src={props.employee.profileImageUrl}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton>
              <InventoryOutlinedIcon />
              <Typography variant="body2">
                {props.employee.finishedCourses}
              </Typography>
            </IconButton>
            <IconButton>
              <PendingActionsOutlinedIcon />
              <Typography variant="body2">
                {props.employee.ongoingCourses}
              </Typography>
            </IconButton>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        sx={{ display: "flex", flexDirection: "column" }}
        xs={5}
      >
        <Typography variant="h6" noWrap>
          {props.employee.name}
        </Typography>
        <Typography variant="body2" noWrap>
          {props.employee.jobTitle}
        </Typography>
        <Typography variant="body2" noWrap>
          {props.employee.email}
        </Typography>
        <Typography variant="body1" marginTop={2}>
          Courses
        </Typography>
        <LinearProgressWithLabel
          title={props.employee.courses[0].name}
          value={props.employee.courses[0].progress}
        />
        <LinearProgressWithLabel
          title={props.employee.courses[1].name}
          value={props.employee.courses[1].progress}
        />
        <Link textAlign="end" marginTop={2} href={props.employee.profileUrl}>
          View All
        </Link>
      </Grid>
    </Card>
  );
}

export default EmployeeCard;

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string,
    jobTitle: PropTypes.string,
    email: PropTypes.string,
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        progress: PropTypes.number,
      })
    ),
    profileUrl: PropTypes.string,
    profileImageUrl: PropTypes.string,
    finishedCourses: PropTypes.number,
    ongoingCourses: PropTypes.number,
  }),
};
