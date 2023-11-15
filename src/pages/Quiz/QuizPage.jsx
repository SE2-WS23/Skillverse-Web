import { useState } from "react";
import PageLayout from "../../components/PageLayout";
import Button from "@mui/material/Button";
import LinearProgress from '@mui/material/LinearProgress';
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/system";
import { useTheme } from '@mui/material/styles';

/**
 * Renders the Assessment page.
 * @returns {JSX.Element} QuizPage component
 */

function QuizPage() {

    const theme = useTheme();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [progressValue, setProgressValue] = useState(1);

    const handleAnswerButtonClick = (answer) => {
        if (dummyQuestions[currentQuestion].correct === answer.target.textContent) // checks if the answer is correct
            console.log("Correct");
        else
            console.log("Incorrect");

        if (currentQuestion !== dummyQuestions.length - 1) { 
            setCurrentQuestion(currentQuestion + 1);
            setProgressValue((((currentQuestion +1)/ dummyQuestions.length) * 100));
            return;
        }

        // update the progress bar on the last question
        if (currentQuestion === dummyQuestions.length-1)
            setProgressValue(100); 
    }

    const nextButtonClick = () => {
        return;
    }

    const dummyQuestions = [ // placeholder for the real questions
        {
          question: "Question 1",
          answers: ["Answer 1", "Answer 2", "Answer 3"],
          correct: "Answer 1",
        },
        {
            question: "Question 2",
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correct: "Answer 2",
        },
        {
            question: "Question 3",
            answers: ["Answer 1", "Answer 2", "Answer 3"],
            correct: "Answer 3",
        },
      ];
      

    return (
        <PageLayout title="Quiz" viewportPage>
    
            <Box
                sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100% - 60px)",
                }}
            >
                <LinearProgress 
                    sx={{
                    margin: "4vh 0 3vh 0",
                    height: "1.5%", 
                    width: "90vw"
                    }} 
                    variant="determinate" 
                    value={progressValue} 
                /> 

                <Box
                    sx={{
                    height: "80vh",
                    width: "80vw",
                    backgroundColor: theme.palette.primary.light,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    }}
                >
                    
                    <h1 style={{margin: "0% 0 15vh 0"}}>
                        {dummyQuestions[currentQuestion].question}
                    </h1>

                    {dummyQuestions[currentQuestion].answers?.map((answer) => (
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ width: "70%", margin: "2vh 0"}}
                            key={uuidv4()}
                            onClick={handleAnswerButtonClick}
                        >
                            {answer}
                        </Button>
                    ))}
                </Box>
            </Box>

            <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ position: "absolute", bottom: "10px", right: "10px" }}
                onClick={nextButtonClick}
            >
                Next
            </Button>
        </PageLayout>
    );
}

export default QuizPage;
