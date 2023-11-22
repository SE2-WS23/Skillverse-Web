//imports
import { PropTypes } from "prop-types";
import "./style.css";
import { List, ListItem, ListItemText, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { v4 as uuid } from "uuid";

/**
 *renders overview component of employee profile
 * @returns {JSX.Element} Overview item for employee profile page component
 */

//populate lists with prop array. secondary, primary are (1) skill and level, or (2) certificate and origin
function renderList(list) {
  return list.map((el) => {
    return (
      <ListItem key={uuid()}>
        <ListItemText
          primary={el.prmry}
          secondary={el.scndry}
          key={uuid()}
          className="list-item-text"
        />
      </ListItem>
    );
  });
}

export default function OverviewItem({ title, list }) {
  const theme = useTheme();

  return (
    <Box
      className="component"
      sx={{ backgroundColor: theme.palette.primary.light }}
    >
      <Typography variant="h2">{title}</Typography>

      <List sx={{ width: "100%" }}>{renderList(list)}</List>
    </Box>
  );
}

OverviewItem.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};
