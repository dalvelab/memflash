import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  chakra,
  Flex,
  Heading,
  Box,
  Grid,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import { Question } from "../entities/quiz/model/models";
import { Input } from "../shared/components";
import { QuizCardCreate } from "../features/create-quiz-card";

export const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  const navigate = useNavigate();

  const addCard = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        answer: "",
      },
    ]);
  };

  const deleteCard = (index: number) => {
    const questionsCopy = [...questions];
    questionsCopy.splice(index, 1);
    setQuestions(questionsCopy);
  };

  const onInputChange = (
    type: "question" | "answer",
    value: string,
    index: number
  ) => {
    const questionsCopy = [...questions];
    questionsCopy.splice(index, 1, {
      question: type === "question" ? value : questions[index].question,
      answer: type === "answer" ? value : questions[index].answer,
    });

    setQuestions(questionsCopy);
  };

  const createQuiz = useCallback(() => {
    fetch("/quiz/create", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        questions,
      }),
    });
    return navigate("/");
  }, [title, description, questions]);

  return (
    <chakra.section w="full" display="flex" flexDir="column">
      <Flex mt={6} justifyContent="space-between">
        <Heading size="lg" fontWeight="medium" color="white">
          Create new quiz
        </Heading>
        <Flex gap={3}>
          <Button colorScheme="gray" onClick={createQuiz}>
            Import
          </Button>
          <Button colorScheme="green" onClick={createQuiz}>
            Create Quiz
          </Button>
        </Flex>
      </Flex>
      <Box
        mt={5}
        border="1px solid"
        borderColor="border.default"
        borderRadius="md"
      >
        <Grid p={4} gridTemplateColumns="1fr 1fr" bg="black.header" gap={5}>
          <Box>
            <chakra.label color="white" htmlFor="title" fontSize="lg">
              Title
            </chakra.label>
            <Input
              size="lg"
              mt={3}
              placeholder="Enter a title for your quiz"
              color="white"
              name="title"
              autoComplete="off"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>
          <Box>
            <chakra.label color="white" htmlFor="description" fontSize="lg">
              Description
            </chakra.label>
            <Input
              size="lg"
              mt={3}
              placeholder="Enter a description for your quiz"
              color="white"
              name="description"
              autoComplete="off"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
          <Box>
            <chakra.label color="white" htmlFor="subject" fontSize="lg">
              Subject (optional)
            </chakra.label>
            <Input
              size="lg"
              mt={3}
              placeholder="Select a subject from dropdown"
              color="white"
              autoComplete="off"
              name="subject"
            />
          </Box>
        </Grid>
      </Box>
      {questions.map((question, index) => (
        <QuizCardCreate
          key={index}
          question={question}
          index={index}
          onInputChange={onInputChange}
          onCardDelete={deleteCard}
        />
      ))}
      <Flex
        p={4}
        mt={5}
        mb={5}
        alignItems="center"
        justifyContent="center"
        bg="black.header"
        cursor="pointer"
        color="blue.default"
        onClick={addCard}
        border="1px solid"
        borderColor="border.default"
        borderRadius="md"
      >
        <Text fontSize="2xl" fontWeight="medium">
          Add card
        </Text>
      </Flex>
    </chakra.section>
  );
};
