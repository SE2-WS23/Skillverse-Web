//imports
import { PropTypes } from "prop-types";
import "./style.css";
import { List, ListItem, ListItemText, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//populate lists with prop array. secondary, primary are (1) skill and level, or (2) certificate and origin
function renderList(list) {
  return list.map((el) => {
    return (
      <ListItem key={el.uid}>
        <ListItemText
          primary={el.prmry}
          secondary={el.scndry}
          key={el.uid}
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
      <h2>{title}</h2>

      <List sx={{ width: "100%" }}>{renderList(list)}</List>
    </Box>
  );
}

OverviewItem.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};
