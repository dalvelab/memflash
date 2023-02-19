import { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { Question } from "./Question";

import { IQuiz } from "./Router";

interface IProps {
  quiz: IQuiz[];
}

const defaultResult = {
  correct: 0,
  incorrect: 0,
};

export const Quiz: React.FC<IProps> = ({ quiz }) => {
  const [steps, setSteps] = useState(0);
  const [answers, setAnswers] = useState(defaultResult);

  function handleAnswer(input: string) {
    if (input.toLowerCase() === quiz[steps].answer) {
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
      {steps !== quiz.length ? (
        <Question
          word={quiz[steps].question}
          handleAnswer={handleAnswer}
          steps={steps}
        />
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
