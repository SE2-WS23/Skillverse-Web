import { Box, List, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CustomTabPanel from "../../components/CustomTabPanel";
import PageLayout from "../../components/PageLayout";
import TrainingBlockListItem from "./components/TrainingBlockListItem";

/**
 * Renders the Training Plan page with tabs for Not started, In Progress, and Done.
 * @returns {JSX.Element} The Training Plan page.
 */
function TrainingPlanPage() {
  const mockedTrainings = [
    {
      courseName: "Web Development with React",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      description: "Learn web development using the React framework.",
      progress: 0,
      status: 0,
    },
    {
      courseName: "Python for Data Science",
      skills: ["Python", "Data Analysis", "Machine Learning"],
      description: "Explore Python for data science and machine learning.",
      progress: 75,
      status: 1,
    },
    {
      courseName: "Mobile App Development with Flutter",
      skills: ["Dart", "Flutter", "Mobile App Development"],
      description: "Build cross-platform mobile apps using Flutter and Dart.",
      progress: 100,
      status: 2,
    },
    {
      courseName: "JavaScript Fundamentals",
      skills: ["JavaScript", "Front-End Development"],
      description: "Master the fundamentals of JavaScript programming.",
      progress: 0,
      status: 0,
    },
    {
      courseName: "Data Structures and Algorithms in C++",
      skills: ["C++", "Data Structures", "Algorithms"],
      description: "Learn essential data structures and algorithms using C++.",
      progress: 80,
      status: 1,
    },
    {
      courseName: "Digital Marketing Strategy",
      skills: ["Digital Marketing", "SEO", "Social Media"],
      description:
        "Create effective digital marketing strategies for businesses.",
      progress: 100,
      status: 2,
    },
    {
      courseName: "Game Development with Unity",
      skills: ["Unity", "C#", "Game Development"],
      description: "Develop your own games with Unity and C#.",
      progress: 0,
      status: 0,
    },
    {
      courseName: "Backend Development with Node.js",
      skills: ["Node.js", "Express", "MongoDB"],
      description:
        "Build scalable backend applications using Node.js and Express.",
      progress: 78,
      status: 1,
    },
    {
      courseName: "Artificial Intelligence and Machine Learning",
      skills: ["AI", "Machine Learning", "Deep Learning"],
      description: "Explore the fascinating world of AI and machine learning.",
      progress: 100,
      status: 2,
    },
    {
      courseName: "Graphic Design for Beginners",
      skills: ["Graphic Design", "Adobe Illustrator", "Visual Communication"],
      description:
        "Learn the basics of graphic design and visual communication.",
      progress: 0,
      status: 0,
    },
  ];
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  return (
    <PageLayout title="Training Plan" viewportPage>
      <Box sx={{ width: "100%", typography: "body1", mt: 2 }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab value={0} label="Not started" />
          <Tab value={1} label="In Progress" />
          <Tab value={2} label="Done" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <List>
          {mockedTrainings?.map((training) => {
            if (training.status === 0) {
              return (
                <TrainingBlockListItem training={training} key={uuidv4()} />
              );
            }
            return null;
          })}
        </List>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <List>
          {mockedTrainings?.map((training) => {
            if (training.status === 1) {
              return (
                <TrainingBlockListItem training={training} key={uuidv4()} />
              );
            }
            return null;
          })}{" "}
        </List>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <List>
          {mockedTrainings?.map((training) => {
            if (training.status === 2) {
              return (
                <TrainingBlockListItem training={training} key={uuidv4()} />
              );
            }
            return null;
          })}{" "}
        </List>
      </CustomTabPanel>
    </PageLayout>
  );
}

export default TrainingPlanPage;
