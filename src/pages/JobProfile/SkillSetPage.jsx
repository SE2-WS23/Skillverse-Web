import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Box, Button, Typography, ToggleButton, useTheme } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PropTypes from 'prop-types';
import jobSkills from './components/mockData2';
import { v4 as uuidv4 } from 'uuid';

/**
 * Renders the Skill Set page.
 * @returns {JSX.Element} Skill Set page component
 */
function SkillSetPage(props) {
  const [skillList, setSkillList] = useState([]);
  const theme = useTheme();

  const handleSelectedSkill = (event, selectedSkill) => {
    setSkillList(selectedSkill);
  };

  const SkillSet = props.Skills || jobSkills; // giving  a default fallback value incase the prop is not provided.

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
          Select Relevant Skills For the Job
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
            value={skillList}
            onChange={handleSelectedSkill}
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
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
            {SkillSet?.map((skill) => (
              <ToggleButton
                key={uuidv4()}
                value={`${skill || ''} `}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  my: 2,
                  ':hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                {skill || ''}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </Box>
      <Button
        variant='contained'
        color='primary'
        size='large'
        sx={{ position: 'fixed', bottom: '10px', right: '10px' }}
      >
        Save changes
      </Button>
    </PageLayout>
  );
}
SkillSetPage.propTypes = {
  Skills: PropTypes.arrayOf(PropTypes.string),
};

export default SkillSetPage;
