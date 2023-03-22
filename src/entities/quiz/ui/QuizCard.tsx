import { Flex, Text, Badge, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { Quiz, statusToColor } from "../model";

interface QuizCardProps {
  quiz: Quiz;
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  const navigate = useNavigate();

  return (
    <Flex
      h="52"
      key={quiz.id}
      flexDir="column"
      alignItems="flex-start"
      justifyContent="space-between"
      borderRadius={6}
      bg="black.header"
      border="1px solid"
      borderColor="border.default"
      p={4}
    >
      <Flex w="full" justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" color="white">
          {quiz.title}
        </Text>
        <Badge
          colorScheme={statusToColor[quiz.status]}
          p="4px 8px"
          borderRadius="md"
        >
          <Text textTransform="capitalize" color="black" fontSize="sm">
            {quiz.status}
          </Text>
        </Badge>
      </Flex>
      <Text fontSize="lg" color="white">
        {quiz.description}
      </Text>
      <Button onClick={() => navigate(`/quiz/${quiz.id}`)} colorScheme="gray">
        Start
      </Button>
    </Flex>
  );
};
