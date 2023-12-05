import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import PageLayout from '../../components/PageLayout';
import { useTheme } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';
import mockTrainings from './mockTrainings';
import TrainingListItem from './components/TrainingListItem';

/**
 * Renders the Company Course Management Page.
 * @returns {JSX.Element} The company course management page component.
 */
function CompanyCourseManagementPage() {
  const theme = useTheme();

  const handleAddTrainingClick = () => {
    console.log('Add Training button is clicked');
  };

  return (
    <PageLayout title='Company Course Management'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: '20px',
        }}
      >
        <Button
          variant='contained'
          color='primary'
          size='large'
          sx={{
            marginTop: '16px',
            alignSelf: 'flex-start',
            position: 'fixed',
            top: '65px',
            left: '20px',
          }}
          onClick={handleAddTrainingClick}
        >
          ADD TRAINING
        </Button>

        <Grid
          container
          rowSpacing={4}
          columnSpacing={4}
          sx={{
            marginTop: '50px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {mockTrainings.map((training) => (
            <TrainingListItem
              key={uuidv4()}
              trainingName={training.trainingName}
              trainingCategory={training.trainingCategory}
              backgroundColor={theme.palette.primary.main}
            />
          ))}
        </Grid>
      </Box>
    </PageLayout>
  );
}

export default CompanyCourseManagementPage;
