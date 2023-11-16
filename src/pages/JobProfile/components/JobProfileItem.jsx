import { useTheme } from "@emotion/react";
import { Grid, ListItem, ListItemText } from "@mui/material";

function JobProfileItem({ job }) {
  return (
    <Grid item xs={6}>
      <ListItem
        sx={{
          height: "100px",
          background: useTheme().palette.primary.light,
        }}
      >
        <ListItemText
          primary={job.category}
          secondary={job.title}
          secondaryTypographyProps={{ align: "center" }}
        />
      </ListItem>
    </Grid>
  );
}

export default JobProfileItem;
