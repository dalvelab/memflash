import { useEffect, useState } from "react";
import {
  Badge,
  chakra,
  Flex,
  Text,
  Grid,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../entities/quiz/model/models";

export const Dashboard = () => {
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const data = fetch("/quizzes");

    data
      .then((res) => res.json())
      .then((data) => {
        setQuizzes(data.quizzes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <chakra.section w="full" display="flex" flexDir="column">
      <Flex mt={6} justifyContent="space-between">
        <Heading color="white">Dashboard</Heading>
        <Button onClick={() => navigate("quiz/create")} colorScheme="gray">
          Create new
        </Button>
      </Flex>
      <Grid my={5} gridTemplateColumns="1fr 1fr 1fr" gap={4}>
        {quizzes.map((quiz) => (
          <Flex
            h="52"
            key={quiz.id}
            flexDir="column"
            alignItems="flex-start"
            justifyContent="space-between"
            bg="#1c1c19"
            borderRadius={6}
            p={4}
          >
            <Flex w="full" justifyContent="space-between" alignItems="center">
              <Text fontSize="2xl" color="white">
                {quiz.title}
              </Text>
              <Badge colorScheme="purple">New</Badge>
            </Flex>
            <Text fontSize="lg" color="white">
              {quiz.description}
            </Text>
            <Button
              onClick={() => navigate(`/quiz/${quiz.id}`)}
              colorScheme="gray"
            >
              Start
            </Button>
          </Flex>
        ))}
      </Grid>
    </chakra.section>
  );
};
