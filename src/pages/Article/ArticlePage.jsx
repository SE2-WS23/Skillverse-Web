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
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          <Typography variant='h4'>{props.title || 'no title'}</Typography>
          <Typography
            sx={{
              p: 3,
              overflow: 'hidden',
              overflowY: 'auto',
            }}
          >
            {props.content || 'article content is displayed here'}
          </Typography>
          <Typography>
            <a
              href={props.link || ''}
              target='_blank'
              rel='noopener noreferrer'
            >
              Visit Website
            </a>
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
