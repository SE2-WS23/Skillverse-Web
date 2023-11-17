import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import {
  Avatar,
  Card,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
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
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(2),
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box>
            <Avatar
              variant="square"
              sx={{ width: "100%", height: "auto", maxWidth: "125px" }}
              src={props.employee.profileImageUrl}
            />
            <Box
              sx={{
                display: "flex",
              }}
            >
              <IconButton>
                <InventoryOutlinedIcon />
                <Typography variant="body2">
                  {props.employee.finishedCourses || 0}
                </Typography>
              </IconButton>
              <IconButton>
                <PendingActionsOutlinedIcon />
                <Typography variant="body2">
                  {props.employee.ongoingCourses || 0}
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <List disablePadding>
            <ListItem disablePadding alignItems="flex-start">
              <Typography variant="h6" noWrap>
                {props.employee.name || "No Name"}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography variant="body2" noWrap>
                {props.employee.jobTitle || "No Job Title"}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography variant="body2" noWrap>
                {props.employee.email || "No Email"}
              </Typography>
            </ListItem>
            {props.employee?.courses?.[0] || props.employee?.courses?.name ? (
              <ListItem disablePadding>
                <Typography variant="body1" marginTop={2}>
                  Courses
                </Typography>
              </ListItem>
            ) : (
              <Typography variant="body1" marginTop={2}>
                No Courses Assigned
              </Typography>
            )}
            {!Array.isArray(props.employee?.courses) &&
            props.employee?.courses?.name &&
            props.employee?.courses?.progress ? (
              <ListItem disablePadding>
                <LinearProgressWithLabel
                  title={props.employee.courses.name}
                  value={props.employee.courses.progress}
                />
              </ListItem>
            ) : null}
            {Array.isArray(props.employee?.courses) &&
            props.employee.courses[0] ? (
              <ListItem disablePadding>
                <LinearProgressWithLabel
                  title={props.employee.courses[0].name}
                  value={props.employee.courses[0].progress}
                />
              </ListItem>
            ) : null}
            {Array.isArray(props.employee?.courses) &&
            props.employee?.courses?.[1] ? (
              <ListItem disablePadding>
                <LinearProgressWithLabel
                  title={props.employee.courses[1].name}
                  value={props.employee.courses[1].progress}
                />
              </ListItem>
            ) : null}
            <ListItem disablePadding sx={{ justifyContent: "end" }}>
              <Link marginTop={2} href={props.employee.profileUrl}>
                View All
              </Link>
            </ListItem>
          </List>
        </Grid>
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
