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

import { Navbar } from "./shared/components";
import { Container } from "./shared/components/Container";

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <chakra.main mt={16} bg="#242424" height="auto" minH="calc(100vh - 64px)">
        <chakra.section display="flex" flexDir="column" alignItems="center">
          <Container flexDir="column" mt={6}>
            <Flex justifyContent="space-between">
              <Heading color="white">Dashboard</Heading>
              <Button
                onClick={() => navigate("/quiz/create")}
                colorScheme="gray"
              >
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
                  <Button onClick={() => navigate("/quiz")} colorScheme="gray">
                    Start
                  </Button>
                </CardFooter>
              </Card>
            </Grid>
          </Container>
        </chakra.section>
      </chakra.main>
    </>
  );
};
