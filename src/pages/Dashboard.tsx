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

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <chakra.section w="full" display="flex" flexDir="column">
      <Flex mt={6} justifyContent="space-between">
        <Heading color="white">Dashboard</Heading>
        <Button onClick={() => navigate("quiz/create")} colorScheme="gray">
          Create new
        </Button>
      </Flex>
      <Grid my={5} gridTemplateColumns="1fr 1fr 1fr">
        <Card bg="#1c1c19" borderRadius={6}>
          <CardHeader color="white">Quiz #1</CardHeader>
          <CardBody>
            <Text color="white">Brief description of quiz content</Text>
          </CardBody>
          <CardFooter>
            <Button onClick={() => navigate("quiz")} colorScheme="gray">
              Start
            </Button>
          </CardFooter>
        </Card>
      </Grid>
    </chakra.section>
  );
};
