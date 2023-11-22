import "./style.css";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PropTypes } from "prop-types";

/**
 *renders Bio component of employee profile
 * @returns {JSX.Element} Biography item for employee profile page component
 */

export default function BioItem({ abouttxt }) {
  const theme = useTheme();

  return (
    <Box
      className="component"
      sx={{ backgroundColor: theme.palette.primary.light }}
    >
      <Typography variant="h2">About</Typography>
      <Typography variant="body1" gutterBottom className="about-text">
        {abouttxt}
      </Typography>
    </Box>
  );
}

BioItem.propTypes = {
  abouttxt: PropTypes.string,
};
