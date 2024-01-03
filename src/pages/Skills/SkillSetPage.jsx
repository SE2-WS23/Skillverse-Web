import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Box, Button, Typography, ToggleButton, useTheme } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PropTypes from 'prop-types';
import jobSkills from './mockData';
import { v4 as uuidv4 } from 'uuid';

/**
 * Renders the Skill Set page.
 * @returns {JSX.Element} Skill Set page component
 */
function SkillSetPage(props) {
  const [skillsList, setSkillsList] = useState([]);
  const theme = useTheme();

  const handleSelectedSkill = (event, selectedSkill) => {
    setSkillsList(selectedSkill);
    console.log(selectedSkill);
  };

  const skillSet = Array.from(new Set(props.skills || jobSkills));

  return (
    <PageLayout title='Skill Set'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          overflowY: 'auto',
        }}
      >
        <Typography variant='h4' sx={{ mt: 5, mb: 5, textAlign: 'center' }}>
          Select Relevant Skills for the Job
        </Typography>

        <Box
          sx={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60%',
            height: '60%',
          }}
        >
          <ToggleButtonGroup
            value={skillsList}
            onChange={handleSelectedSkill}
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              textAlign: 'center',
              gap: 2,
              [theme.breakpoints.down('md')]: {
                gridTemplateColumns: 'repeat(3, 1fr)',
              },
              [theme.breakpoints.down('lg')]: {
                gridTemplateColumns:
                  'repeat(2, 1fr)' /* setting break points for different screen size for responsiveness*/,
              },
            }}
          >
            {skillSet?.map((skill) => (
              <ToggleButton

                key={uuidv4()}
                value={skill || ''}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  my: 2,
                  ':hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                {window.scrollTo(0,0)}
                {skill || ''}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </Box>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          width: '100%',
          mt: 'auto',
        }}
      >
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'
          sx={{ margin: '50px 20px 20px 0' }}
        >
          Save Changes
        </Button>
      </Box>
    </PageLayout>
  );
}
SkillSetPage.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
};

export default SkillSetPage;
