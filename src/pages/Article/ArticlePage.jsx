import React from 'react'
import PageLayout from '../../components/PageLayout';
import Button from "@mui/material/Button";
import { Box } from '@mui/system';

/**
 * Renders the Article page.
 * @returns {JSX.Element} ArticlePage component
 */
function ArticlePage() {
  return (
	<PageLayout viewportPage title='Article'>
		<Box sx={{ 
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			height: "calc(100% - 60px)"
			}}>


			{/* box where the article is displayed */}

			<Box  sx={{height: "80%",width: "40%",display:"flex",justifyContent: "center",alignItems: "center",backgroundColor: "#D9D9D9", padding:"20px" }}>
				<fieldset>
					<legend >Article </legend>
					<div style={{ padding: '5px' }}>
						Article is display here
						<p><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
					</div>
				</fieldset>
			
			</Box>
		</Box>

		<Button 
			variant="contained"
			color="primary"
			size='large'
			sx={{position: "absolute",bottom: "1rem",right: "2rem"}} >
			Next
		</Button>
	 
	</PageLayout>
  );
}

export default ArticlePage;