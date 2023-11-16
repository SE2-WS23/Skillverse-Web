//imports
import "./style.css"
import { Typography } from "@mui/material";

export default function BioItem({abouttxt}) {
    return (
        <div className="component">
            <h2>About</h2>
            <Typography variant="body1" gutterBottom className="about-text">{abouttxt}</Typography>
        </div>
    );
}