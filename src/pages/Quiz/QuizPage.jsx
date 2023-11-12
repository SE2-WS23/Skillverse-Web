import { useState } from "react";
import PageLayout from "../../components/PageLayout";
import Button from "@mui/material/Button";
import LinearProgress from '@mui/material/LinearProgress';
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/system";

/**
 * Renders the Assessment page.
 * @returns {JSX.Element} QuizPage component
 */

function QuizPage() {

    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [progressValue, setprogressValue] = useState(1);

    const handleAnswerButtonClick = (answer) => {
        if (quiztions[currentQuestion].correct === answer.target.textContent) // checks if the answer is correct
            console.log("Correct");
        else
            console.log("Incorrect");

        if (currentQuestion !== quiztions.length - 1) { // updates questions and progress bar
            setcurrentQuestion(currentQuestion + 1);
            setprogressValue((((currentQuestion +1)/ quiztions.length) * 100));
        }

        // update the progress bar on the last question
        if (currentQuestion === quiztions.length-1)
            setprogressValue(100); 
    }

    const quiztions = [ // placeholder for the real questions
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
                    margin: "4% 0 3% 0",
                    height: "1.5%", 
                    width: "90%"
                    }} 
                    variant="determinate" 
                    value={progressValue} 
                /> 

                <Box
                    sx={{
                    height: "80%",
                    width: "80%",
                    backgroundColor: "#D9D9D9",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    }}
                >
                    
                    <h1 style={{margin: "0% 0 15% 0"}}>
                        {quiztions[currentQuestion].question}
                    </h1>

                    {quiztions[currentQuestion].answers?.map((answer) => (
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ width: "70%", margin: "2% 0"}}
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
            >
                Next
            </Button>
        </PageLayout>
    );
}

export default QuizPage;
