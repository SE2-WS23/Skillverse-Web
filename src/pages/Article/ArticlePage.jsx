import React from 'react';
import PageLayout from '../../components/PageLayout';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

/**
 * Renders the Article page.
 * @returns {JSX.Element} ArticlePage component
 */

function ArticlePage(props) {
  return (
    <PageLayout viewportPage title='Article'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100% - 60px)',
          overflowY: 'auto'
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
            backgroundColor: '#D9D9D9',
            padding: '20px',
          }}
        >
          <div
            style={{
              border: '1px solid black',
              padding: '5px',
              overflow: 'hidden',
              overflowY: 'auto',
            }}
          > Article content here
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>
              <a href={props.link} target='_blank' rel='noopener noreferrer'>
                Visit Website
              </a>
            </p>
          </div>
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
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
};

export default ArticlePage;
