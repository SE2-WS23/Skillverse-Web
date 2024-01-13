import { useTheme } from "@emotion/react";
import { Grid, ListItem, ListItemText } from "@mui/material";
import PropTypes from "prop-types";

function TrainingListItem({ trainingName, trainingCategory }) {
  const theme = useTheme();

  return (
    <Grid item xs={12} lg={6}>
      <ListItem
        sx={{
          height: "100px",
          background: theme.palette.primary.light,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <ListItemText
          sx={{
            textAlign: "left",
            marginBottom: "auto",
            marginTop: "5px",
          }}
        >
          {trainingCategory || ""}
        </ListItemText>
        <ListItemText
          sx={{
            textAlign: "center",
            paddingBottom: "10px",
            width: "100%",
          }}
        >
          {trainingName || ""}
        </ListItemText>
      </ListItem>
    </Grid>
  );
}

TrainingListItem.propTypes = {
  trainingName: PropTypes.string.isRequired,
  trainingCategory: PropTypes.string.isRequired,
};

export default TrainingListItem;
