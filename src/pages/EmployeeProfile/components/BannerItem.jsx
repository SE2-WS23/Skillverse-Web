import { Avatar, Paper, Stack, Box, Typography, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Image from "../media/plant-banner.jpg";

/**
 *renders banner component of employee profile
 * @returns {JSX.Element} banner item for employee profile page component
 */

export default function BannerItem(props) {
  return (
    <Box sx={{ height: "20vh" }} mr={0}>
      <Paper
        sx={{
          backgroundImage: `url(${Image})`,
          borderRadius: 0,
          height: "100%",
        }}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={2}
          sx={{ height: "90%", marginLeft: "1vw" }}
        >
          <Avatar
            alt="Avatar"
            sx={{
              maxWidth: 150,
              maxHeight: 150,
              minWidth: 100,
              minHeight: 100,
            }}
          />
          <Stack
            direction="column"
            sx={{ justifyContent: "center", marginLeft: "1vh" }}
          >
            <Typography variant="h4">{props.userHeader.username}</Typography>
            <Typography variant="h6">{props.userHeader.companyname}</Typography>
          </Stack>
        </Grid>
      </Paper>
    </Box>
  );
}

BannerItem.propTypes = {
  userHeader: PropTypes.shape({
    username: PropTypes.string,
    companyname: PropTypes.string,
  }).isRequired,
};
