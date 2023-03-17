import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  chakra,
  Flex,
  Heading,
  Box,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";

import { Question } from "../entities/quiz/model/models";

export const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question,
        answer,
      },
    ]);
    setQuestion("");
    setAnswer("");
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
    <chakra.section w="full" display="flex" justifyContent="space-around">
      <Box mt={4}>
        <Heading color="white">Create new Quiz</Heading>
        <Box mt={4}>
          <chakra.label color="white" htmlFor="title">
            Title
          </chakra.label>
          <Input
            mt={2}
            placeholder="Title"
            color="white"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <Box mt={4}>
          <chakra.label color="white" htmlFor="description">
            Description
          </chakra.label>
          <Input
            mt={2}
            placeholder="Description"
            color="white"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <Box mt={4}>
          <Text fontSize="3xl" color="white">
            Questions
          </Text>
          <Box mt={4}>
            <chakra.label color="white" htmlFor="description">
              Question
            </chakra.label>
            <Input
              mt={2}
              placeholder="Question"
              color="white"
              name="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Box>
          <Box mt={4}>
            <chakra.label color="white" htmlFor="answer">
              Answer
            </chakra.label>
            <Input
              mt={2}
              placeholder="Answer"
              color="white"
              name="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </Box>
          <Button mt={4} w="full" onClick={addQuestion}>
            Add question
          </Button>
          <Button mt={4} w="full" colorScheme="green" onClick={createQuiz}>
            Create Quiz
          </Button>
        </Box>
      </Box>
      <Flex mt={4} flexDir="column">
        <Text fontSize="3xl" color="white">
          Questions
        </Text>
        {questions.map((question, index) => (
          <Text mt={2} color="white" key={question.question}>
            {index + 1}. {question.question}: {question.answer}
          </Text>
        ))}
      </Flex>
    </chakra.section>
  );
};
