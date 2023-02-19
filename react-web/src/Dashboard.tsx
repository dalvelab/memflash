import {
  Box,
  Card,
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
    <Box bg="#242424" w="100%" h="100vh" p={12}>
      <Heading color="white">Dashboard</Heading>
      <Grid margin="12px 0 12px 0" gridTemplateColumns="1fr 1fr 1fr">
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
    </Box>
  );
};
