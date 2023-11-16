//imports
import "./style.css"
import { Typography, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { PropTypes } from "prop-types";

export default function BioItem({abouttxt}) {

    const theme = useTheme()

    return (
        <Box className="component" sx={{backgroundColor: theme.palette.primary.light}}>
            <h2>About</h2>
            <Typography variant="body1" gutterBottom className="about-text">{abouttxt}</Typography>
        </Box>
    );
}

BioItem.propTypes = {
    abouttxt: PropTypes.string
}