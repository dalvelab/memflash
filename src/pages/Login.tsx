import { chakra, Box, Flex, Heading, Button } from "@chakra-ui/react";

import { Input } from "../shared/components";

export const Login = () => {
  return (
    <chakra.section
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        w="sm"
        p={6}
        bg="black.header"
        flexDir="column"
        borderRadius="lg"
        border="1px solid"
        borderColor="border.default"
      >
        <Heading alignSelf="center" color="white">
          Sign In
        </Heading>
        <Box mt={4} w="full">
          <chakra.label color="white" htmlFor="email">
            Email
          </chakra.label>
          <Input mt={2} placeholder="Email" color="white" name="email" />
        </Box>
        <Box mt={4} w="full">
          <chakra.label color="white" htmlFor="password">
            Password
          </chakra.label>
          <Input mt={2} placeholder="Password" color="white" name="password" />
        </Box>
        <Button colorScheme="green" mt={6}>
          Sign In
        </Button>
      </Flex>
    </chakra.section>
  );
};
