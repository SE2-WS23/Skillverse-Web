import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import mockArticle from './mockData';

/**
 * Renders the Article page.
 * @returns {JSX.Element} ArticlePage component
 */
function ArticlePage(props) {
  const theme = useTheme();

  const articleTitle = props.title || mockArticle.title;
  const articleContent = props.content || mockArticle.content;
  const articleLink = props.link || mockArticle.link;

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
            height: '95%',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "inherit",
            alignItems: "inherit",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderRadius: '6px',
            [theme.breakpoints.down('lg')]:{
              width: "80%"
            }
          }}
        >
          <Typography variant='h5' sx={{p: 1}}>{articleTitle || ""}</Typography>
          <Typography
            sx={{
              p: 5,
              overflow: 'hidden',
              overflowY: 'auto',
              border: 'solid',
              borderWidth: '3px',
              borderRadius: '6px',
              mx: 4

            }}
          >
            {articleContent || ""}
          </Typography>
          <Typography sx={{p:1, "& a":{
            color: theme.palette.primary.contrastText,
            textDecoration: "none",
          },
           }} >
            <a
              href={articleLink || ""}
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
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string
};

export default ArticlePage;
