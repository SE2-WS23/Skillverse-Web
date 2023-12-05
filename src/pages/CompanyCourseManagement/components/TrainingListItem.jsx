import { useTheme } from '@emotion/react';
import { Grid, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

function TrainingListItem({ trainingName, trainingCategory }) {
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
          primary={trainingCategory}
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
          primary={trainingName}
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

TrainingListItem.propTypes = {
  trainingName: PropTypes.string.isRequired,
  trainingCategory: PropTypes.string.isRequired,
};

export default TrainingListItem;
