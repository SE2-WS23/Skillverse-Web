import {Grid, ListItem, ListItemText, createTheme } from "@mui/material";

function JobProfileItem(){

    const mockedJobs = [
        {
            category: "Web Development", 
            title: "Frontend Developer"
        },
        {
            category: "Web Development", 
            title: "Full Stack Developer"
        },
        {
            category: "Mobile App Development", 
            title: "iOS Developer"
        },
        {
            category: "Mobile App Development", 
            title: "Android Developer"
        },
        {
            category: "Data Science", 
            title: "Data Scientist"
        },
        {
            category: "Machine Learning", 
            title: "Machine Learning Engineer"
        },
        {
            category: "DevOps", 
            title: "DevOps Engineer"
        },
        {
            category: "Cybersecurity", 
            title: "Cybersecurity Analyst"
        },
        {
            category: "Game Development", 
            title: "Game Developer"
        },
        {
            category: "Cloud Computing", 
            title: "Cloud Solutions Architect"
        },
        {
            category: "Database Administration", 
            title: "Database Administrator"
        },
        {
            category: "UI/UX Design", 
            title: "UI/UX Designer"
        },
        {
            category: "Software Testing", 
            title: "Quality Assurance Engineer"
        },
        {
            category: "Blockchain Development", 
            title: "Blockchain Developer"
        },
        {
            category: "Systems Administration", 
            title: "Systems Administrator"
        },
        {
            category: "Artificial Intelligence", 
            title: "AI Research Scientist"
        },
        {
            category: "Augmented Reality", 
            title: "AR Developer"
        },
        {
            category: "Technical Writing", 
            title: "Technical Writer"
        }
    ];

    return (
        <Grid container 
        rowSpacing={6} 
        columnSpacing={10} 
        columns={16}
        sx={{
            display: "flex", 
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "50px"
        }}
        >
            {mockedJobs?.map((job) => (
                <Grid item xs={6} key={job.title}>
                    <ListItem
                    sx={{
                        height: "100px",
                        background: createTheme().palette.primary.light,
                    }}
                    >
                        <ListItemText
                        primary={job.category}
                        secondary={job.title}
                        secondaryTypographyProps={{ align: "center" }}
                        />
                    </ListItem>
                </Grid>
            ))}
                        
        </Grid>
        )
    }
            
export default JobProfileItem;