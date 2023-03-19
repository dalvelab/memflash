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
import { useQuery } from "react-query";
import { fetchQuizzes } from "../entities/quiz/api/api";

export const Dashboard = () => {
  const navigate = useNavigate();

  const { isLoading, error, data, isFetching } = useQuery(
    "quizzes",
    fetchQuizzes,
    {
      initialData: {
        quizzes: [],
      },
    }
  );

  return (
    <chakra.section w="full" display="flex" flexDir="column">
      <Flex mt={6} justifyContent="space-between">
        <Heading color="white">Dashboard</Heading>
        <Button onClick={() => navigate("quiz/create")} colorScheme="gray">
          Create new
        </Button>
      </Flex>
      <Grid my={5} gridTemplateColumns="1fr 1fr 1fr" gap={4}>
        {data?.quizzes.map((quiz) => (
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
