import { PropTypes } from "prop-types";
import "./style.css";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  alpha,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { v4 as uuid } from "uuid";

/**
 *renders overview component of employee profile
 * @returns {JSX.Element} Overview item for employee profile page component
 */

//populate lists with prop array. secondary, primary are (1) skill and level, or (2) certificate and origin
//el means "element" and is what is iterated through
function renderList(list) {
  const theme = useTheme();
  return list.map((el) => {
    return (
      <Box
        key={uuid()}
        sx={{
          padding: "2%",
        }}
      >
        <ListItem
          sx={{
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            borderRadius: "5px",
            padding: "0",
          }}
        >
          <ListItemText
            primary={el.prmry || ""}
            secondary={el.scndry || ""}
            key={uuid()}
            sx={{ textAlign: "center" }}
          />
        </ListItem>
      </Box>
    );
  });
}

export default function OverviewItem(props) {
  const theme = useTheme();

  return (
    <Box
      className="component"
      sx={{
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {props.title || ""}
      </Typography>

      <List sx={{ width: "100%", maxHeight: "80%", overflow: "auto" }}>
        {renderList(props.list) || ""}
      </List>
    </Box>
  );
}

OverviewItem.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};
