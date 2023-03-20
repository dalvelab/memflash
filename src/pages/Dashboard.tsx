import { chakra, Flex, Grid, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchQuizzes } from "../entities/quiz/api/api";
import { QuizCard } from "../entities/quiz/ui";

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
          <QuizCard quiz={quiz} />
        ))}
      </Grid>
    </chakra.section>
  );
};
