import { Avatar, Paper, Stack, Box } from "@mui/material";
import "./style.css";
import Image from "../media/plant-banner.jpg";

/**
 *renders banner component of employee profile
 * @returns {JSX.Element} banner item for employee profile page component
 */

export default function BannerItem() {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
      borderRadius: 0,
    },
  };

  return (
    <Box className="banner">
      <Paper style={styles.paperContainer} className="banner-paper">
        <Stack direction="row">
          <Avatar
            alt="Avatar"
            sx={{
              width: 100,
              height: 100,
              marginLeft: "5%",
              marginTop: "0.5%",
            }}
          />
        </Stack>
      </Paper>
    </Box>
  );
}
