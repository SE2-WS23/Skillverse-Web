import { useTheme } from '@emotion/react';
import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function CourseListItem({
  courseName,
  courseCategory,
  trainingNumber,
  backgroundColor,
}) {
  const theme = useTheme();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{
        width: '100%',
        height: '150px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: '10px',
        padding: '10px',
      }}
    >
      <Typography
        variant='body1'
        sx={{
          color: theme.palette.common.white,
          textAlign: 'left',
          paddingLeft: '10px',
          paddingTop: '5px',
        }}
      >
        {courseCategory}
      </Typography>
      <Typography
        variant='body1'
        sx={{
          color: theme.palette.common.white,
          textAlign: 'right',
          position: 'absolute',
          top: '15px',
          right: '15px',
          paddingRight: '10px',
          paddingTop: '5px',
        }}
      >
        Training {trainingNumber}
      </Typography>
      <Typography
        variant='h5'
        sx={{
          color: theme.palette.common.white,
          textAlign: 'center',
          marginTop: 'auto',
          marginBottom: 'auto',
          width: '100%',
        }}
      >
        {courseName}
      </Typography>
    </Grid>
  );
}

CourseListItem.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseCategory: PropTypes.string.isRequired,
  trainingNumber: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string,
};

export default CourseListItem;
