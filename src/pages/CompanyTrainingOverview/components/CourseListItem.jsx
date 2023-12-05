import { useTheme } from '@emotion/react';
import { Grid, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

function CourseListItem({ courseName, courseCategory, trainingNumber }) {
  const theme = useTheme();

  return (
    <Grid item xs={6}>
      <ListItem
        style={{
          height: '150px',
          background: theme.palette.primary.light,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <ListItemText
          primary={courseCategory}
          primaryTypographyProps={{
            variant: 'body1',
            sx: {
              textAlign: 'left',
              paddingLeft: '10px',
              paddingTop: '5px',
              marginBottom: 'auto',
              marginTop: '5px',
            },
          }}
        />
        <ListItemText
          primary={`Training ${trainingNumber}`}
          style={{
            textAlign: 'right',
            position: 'absolute',
            top: '13px',
            right: '15px',
            paddingRight: '10px',
            paddingTop: '5px',
          }}
        />
        <ListItemText
          primary={courseName}
          style={{
            textAlign: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
            width: '100%',
          }}
        />
      </ListItem>
    </Grid>
  );
}

CourseListItem.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseCategory: PropTypes.string.isRequired,
  trainingNumber: PropTypes.number.isRequired,
};

export default CourseListItem;
