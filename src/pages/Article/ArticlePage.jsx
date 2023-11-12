import React from 'react'
import PageLayout from '../../components/PageLayout';
import Button from "@mui/material/Button";
import { Box } from '@mui/system';

/**
 * Renders the Article page.
 * @returns {JSX.Element} ArticlePage component
 */
function ArticlePage({article}) {
	
	const articleDemo = {
		title: "What is Coding?",
		content: `Coding is the practice of building websites and apps by writing out instructions in a programming language. 
		It governs how data is collected, how sites appear to the user, and every aspect of how you engage with the web. 
		The background on this page appears the way it does due to lines of code. And when you enter your email address in a pop-up box, code is guiding the way your email is stored and shared
		Computers can perform extremely fast calculations, complete complex mathematical tasks, and store large amounts of data. 
		use binary code to communicate and operate.Computer programming (or simply coding) refers to the task of writing  instructions that, once compiled, computers will understand and follow.  
		It therefore allows us to create a range of different software from operating systems and business packages to mobile apps and video games.  
		It therefore allows us to create a range of different software from operating systems and business packages to mobile apps and video games.Machines use binary code to communicate and operate.  
		Computer programming (or simply coding) refers to the task of writing  instructions that, once compiled, computers will understand and follow.  
		It therefore allows us to create a range of different software from operating systems and business packages to mobile apps and video games.  `,
		link: "https://www.thinkful.com/blog/what-is-coding/"
	};
	
	
	const articleDisplay = article || articleDemo; {/* if no article is passed then the demo article object above is displayed */ }
  
	return (
		<PageLayout viewportPage title='Article'>
			<Box sx={{ 
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "calc(100% - 60px)", 
				overflowY: "auto"
				}}>

				<Box  sx={{height: "80%",width: "40%",display:"flex",justifyContent: "center",alignItems: "center",backgroundColor: "#D9D9D9", padding:"20px", overflowY:"auto" }}>
					<fieldset>
						<legend >{articleDisplay.title} </legend>
						<div style={{ padding: '5px' }}>
							{articleDisplay.content}
							<p><a href={articleDisplay.link} target="_blank" rel="noopener noreferrer">Visit Website</a></p>
						</div>
					</fieldset>
				
				</Box>
			</Box>

			<Button 
				variant="contained"
				color="primary"
				size='large'
				sx={{ position: "absolute", bottom: "10px", right: "10px" }} >
				Next
			</Button>
		
		</PageLayout>
	);
}

export default ArticlePage;