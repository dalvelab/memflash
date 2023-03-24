import { Box, chakra, Grid, Flex, Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import { Input } from "../shared/components";

import { Question } from "../entities/quiz/model";

interface IQuizCardCreate {
  index: number;
  question: Question;
  onInputChange: (
    type: "question" | "answer",
    value: string,
    index: number
  ) => void;
  onCardDelete: (index: number) => void;
}

export const QuizCardCreate: React.FC<IQuizCardCreate> = ({
  question,
  index,
  onInputChange,
  onCardDelete,
}) => {
  return (
    <Box
      mt={5}
      p={4}
      bg="black.header"
      key={index}
      border="1px solid"
      borderColor="border.default"
      borderRadius="md"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="lg" color="gray.400">
          #{index + 1}
        </Text>
        <IconButton
          bg="transparent"
          _hover={{ bg: "black.default" }}
          aria-label="Delete card"
          icon={<DeleteIcon boxSize={5} color="gray.400" />}
          onClick={() => onCardDelete(index)}
        />
      </Flex>
      <Grid mt={3} gridTemplateColumns="1fr 1fr" gap={5}>
        <Box>
          <chakra.label color="gray.200" htmlFor="description" fontSize="lg">
            Question
          </chakra.label>
          <Input
            size="lg"
            mt={2}
            placeholder="Question"
            color="white"
            name="question"
            autoComplete="off"
            value={question.question}
            onChange={(e) => onInputChange("question", e.target.value, index)}
          />
        </Box>
        <Box>
          <chakra.label color="white" htmlFor="answer" fontSize="lg">
            Answer
          </chakra.label>
          <Input
            size="lg"
            mt={2}
            placeholder="Answer"
            color="white"
            name="answer"
            autoComplete="off"
            value={question.answer}
            onChange={(e) => onInputChange("answer", e.target.value, index)}
          />
        </Box>
      </Grid>
    </Box>
  );
};
