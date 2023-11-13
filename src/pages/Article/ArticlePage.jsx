import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

/**
 * Renders the Article page.
 * @returns {JSX.Element} ArticlePage component
 */

function ArticlePage(props) {
  const theme = useTheme();
  return (
    <PageLayout viewportPage title='Article'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100% - 60px)',
          overflowY: 'auto',
        }}
      >
        <Box
          sx={{
            height: '80%',
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.primary.light ,
            padding: '20px',
            color: theme.palette.primary.contrastText
          }}
        >
          <Typography
            sx={{
              border: '1px solid black',
              padding: '5px',
              overflow: 'hidden',
              overflowY: 'auto',
            }}
          >
            <h2>{props.title || 'no title'}</h2>
            <p>{props.content || 'website content is displayed here'}</p>
            <p>
              <a
                href={props.link || ''}
                target='_blank'
                rel='noopener noreferrer'
              >
                Visit Website
              </a>
            </p>
          </Typography>
        </Box>
      </Box>

      <Button
        variant='contained'
        color='primary'
        size='large'
        sx={{ position: 'absolute', bottom: '10px', right: '10px' }}
      >
        Next
      </Button>
    </PageLayout>
  );
}
ArticlePage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ArticlePage;
