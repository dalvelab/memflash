import { useState, useEffect } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

import { Input } from "./Input";

interface IProps {
  question: string;
  handleAnswer: (input: string) => void;
  steps: number;
}

export const Question: React.FC<IProps> = ({
  question,
  steps,
  handleAnswer,
}) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    return () => {
      setInput("");
    };
  }, [steps]);

  return (
    <Flex w="520px" flexDirection="column" gap={3}>
      <Text color="gray.400" fontSize="lg">
        Enter the translation for next word
      </Text>
      <Text color="#1f6feb" fontWeight={500} fontSize="2xl">
        {question}
      </Text>
      <Input
        size="md"
        type="text"
        name="answer"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button size="md" colorScheme="green" onClick={() => handleAnswer(input)}>
        Submit
      </Button>
    </Flex>
  );
};
