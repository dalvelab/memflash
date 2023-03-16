import { useEffect, useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

import { Question } from "../shared/components/Question";

import { Quiz as IQuiz } from "../entities/quiz/model/models";

const defaultResult = {
  correct: 0,
  incorrect: 0,
};

export const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [quiz, setQuiz] = useState<IQuiz>();
  const [steps, setSteps] = useState(0);
  const [answers, setAnswers] = useState(defaultResult);

  useEffect(() => {
    fetch(`quiz/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuiz(data.quiz);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleAnswer(input: string) {
    if (input.toLowerCase() === quiz?.questions[steps].answer) {
      setSteps(steps + 1);
      setAnswers({ ...answers, correct: answers.correct + 1 });
      return;
    }

    setSteps(steps + 1);
    setAnswers({ ...answers, incorrect: answers.incorrect + 1 });
  }

  function handleRestart() {
    setSteps(0);
    setAnswers(defaultResult);
  }

  return (
    <Box
      bg="#242424"
      w="full"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {quiz !== undefined && steps !== quiz.questions.length ? (
        <Box>
          <Button mb={4} colorScheme="gray" onClick={() => navigate("/")}>
            Back
          </Button>
          <Question
            word={quiz.questions[steps].question}
            handleAnswer={handleAnswer}
            steps={steps}
          />
        </Box>
      ) : (
        <Flex flexDir="column" gap={3}>
          <Text color="white" fontSize="3xl">
            Finished
          </Text>
          <Text color="white" fontSize="2xl">
            Correct: {answers.correct}, Wrong: {answers.incorrect}
          </Text>
          <Button colorScheme="gray" onClick={handleRestart}>
            Start Again
          </Button>
        </Flex>
      )}
    </Box>
  );
};
