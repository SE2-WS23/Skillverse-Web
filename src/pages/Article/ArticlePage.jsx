import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import article from './mockData';

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
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "inherit",
            alignItems: "inherit",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderStyle: "solid #000000"
          }}
        >
          <Typography  variant='h4'>{props.title || article.title}</Typography>
          <Typography
            sx={{
              p: 3,
              overflow: 'hidden',
              overflowY: 'auto',
              border: `solid ${theme.palette.primary.main} `,
              mx: 10
            }}
          >
            {props.content || article.content}
          </Typography>
          <Typography>
            <a
              href={props.link || article.link}
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
