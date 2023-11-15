import { useTheme } from "@emotion/react";
import { Grid, ListItem, ListItemText } from "@mui/material";
import mockedJobs from "../mockData";

function JobProfileItem() {
  return (
    <Grid
      container
      rowSpacing={6}
      columnSpacing={10}
      columns={16}
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      {mockedJobs?.map((job) => (
        <Grid item xs={6} key={job.title}>
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
      ))}
    </Grid>
  );
}

export default JobProfileItem;
