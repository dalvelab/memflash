import { useEffect, useState } from "react";
import {
  chakra,
  Card,
  Flex,
  CardHeader,
  CardBody,
  Text,
  Grid,
  Heading,
  CardFooter,
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
      <Grid my={5} gridTemplateColumns="1fr 1fr 1fr">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} bg="#1c1c19" borderRadius={6}>
            <CardHeader color="white">{quiz.title}</CardHeader>
            <CardBody>
              <Text color="white">{quiz.description}</Text>
            </CardBody>
            <CardFooter>
              <Button onClick={() => navigate("quiz")} colorScheme="gray">
                Start
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </chakra.section>
  );
};
