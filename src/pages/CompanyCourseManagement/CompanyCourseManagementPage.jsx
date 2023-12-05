import { Button, Grid } from '@mui/material';
import PageLayout from '../../components/PageLayout';
import { v4 as uuidv4 } from 'uuid';
import mockTrainings from './mockTrainings';
import TrainingListItem from './components/TrainingListItem';

/**
 * Renders the Company Course Management Page.
 * @returns {JSX.Element} The company course management page component.
 */
function CompanyCourseManagementPage() {
  const handleAddTrainingClick = () => {
    console.log('Add Training button is clicked');
  };

  return (
    <PageLayout title='Company Course Management'>
      <Button
        variant='contained'
        color='primary'
        size='large'
        sx={{
          margin: '116px 0 0px 116px',
        }}
        onClick={handleAddTrainingClick}
      >
        ADD TRAINING
      </Button>

      <Grid
        container
        rowSpacing={6}
        columnSpacing={10}
        columns={16}
        sx={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      >
        {mockTrainings.map((training) => (
          <TrainingListItem
            key={uuidv4()}
            trainingName={training.trainingName}
            trainingCategory={training.trainingCategory}
          />
        ))}
      </Grid>
    </PageLayout>
  );
}

export default CompanyCourseManagementPage;
