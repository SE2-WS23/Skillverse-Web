import { useState, useMemo } from "react";
import PageLayout from "../../components/PageLayout";
import mockData from "./mockData";
import Button from "@mui/material/Button";
import LinearProgress from '@mui/material/LinearProgress';
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/system";
import { useTheme } from '@mui/material/styles';

/**
 * Renders the Assessment page.
 * @returns {JSX.Element} QuizPage component
 */


function shuffle(array) {
    const crypto = window.crypto || window.msCrypto;
    let cryptoArray = new Uint32Array(1);
    let arrayLength = array.length,
        randomNumber = 0,
        temp;

    while (arrayLength--) {

        randomNumber = Math.floor(crypto.getRandomValues(cryptoArray)/(Math.pow(10,9)));

        temp = array[arrayLength];
        array[arrayLength] = array[randomNumber];
        array[randomNumber] = temp;
    }
    return array;
}

function QuizPage() {

    const theme = useTheme();

    const randomQuestionsSelection = () => {
        let mockDataLength = [];
        let chosenQuestions = [];
        for (let i = 0; i < mockData.length; i++) {
            mockDataLength.push(i);
        }
        let shuffledMockDataLength = shuffle(mockDataLength);
        shuffledMockDataLength = shuffledMockDataLength.slice(0, 3);
        chosenQuestions = shuffledMockDataLength.map((index) => mockData[index]);

        return chosenQuestions;
    }

    const dummyQuestions = useMemo(() => randomQuestionsSelection(), []); 
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

    const handleNextButtonClick = () => {
        return;
    }

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
                    
                    <h1 style={{margin: "0 0 15vh 0"}}> 
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
                onClick={handleNextButtonClick}
            >
                Next
            </Button>
        </PageLayout>
    );
}

export default QuizPage;
