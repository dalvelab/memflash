import { Box, chakra, InputProps } from "@chakra-ui/react";
import { Input } from "./Input";

interface InputGroupProps extends Omit<InputProps, "name"> {
  label: string;
  name: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  label,
  name,
  ...props
}) => {
  return (
    <Box>
      <chakra.label color="gray.200" htmlFor={name} fontSize="lg">
        {label}
      </chakra.label>
      <Input mt={2} color="white" name={name} {...props} />
    </Box>
  );
};
