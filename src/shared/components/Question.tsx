import { useState, useEffect } from "react";
import { Flex, Button, Text, Input } from "@chakra-ui/react";

interface IProps {
  word: string;
  handleAnswer: (input: string) => void;
  steps: number;
}

export const Question: React.FC<IProps> = ({ word, steps, handleAnswer }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    return () => {
      setInput("");
    };
  }, [steps]);

  return (
    <Flex w="520px" flexDirection="column" gap={3}>
      <Text color="white" fontSize="2xl">
        Enter the translation for next word
      </Text>
      <Text color="white" fontSize="3xl">
        {word}
      </Text>
      <Input
        type="text"
        name="answer"
        color="white"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button colorScheme="green" onClick={() => handleAnswer(input)}>
        Submit
      </Button>
    </Flex>
  );
};
