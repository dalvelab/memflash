import { Box, chakra } from "@chakra-ui/react";
import { Input } from "./Input";

interface InputGroupProps {
  label: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({ label, ...props }) => {
  return (
    <Box>
      <chakra.label color="gray.200" htmlFor="description" fontSize="lg">
        {label}
      </chakra.label>
      <Input mt={2} color="white" {...props} />
    </Box>
  );
};
