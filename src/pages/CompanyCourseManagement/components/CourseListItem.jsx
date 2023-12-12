import { useTheme } from '@emotion/react';
import { Grid, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

function CourseListItem({ courseName, courseCategory, trainingNumber }) {
  const theme = useTheme();

  return (
    <Grid item xs={6}>
      <ListItem
        sx={{
          height: '100px',
          background: theme.palette.primary.light,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <ListItemText
          variant='body2'
          sx={{
            textAlign: 'left',
            paddingLeft: '10px',
            paddingTop: '5px',
            marginBottom: 'auto',
            marginTop: '5px',
          }}
        >
          {courseCategory}
        </ListItemText>
        <ListItemText
          variant='body2'
          sx={{
            textAlign: 'right',
            position: 'absolute',
            top: '8px',
            right: '15px',
            paddingRight: '10px',
            paddingTop: '5px',
          }}
        >
          {`Training ${trainingNumber}`}
        </ListItemText>
        <ListItemText
          variant='body2'
          sx={{
            textAlign: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
            width: '100%',
          }}
        >
          {courseName}
        </ListItemText>
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
