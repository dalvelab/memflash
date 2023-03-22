import { chakra, Box, Flex, Heading, Button } from "@chakra-ui/react";

import { Input } from "../shared/components";

export const Register = () => {
  return (
    <chakra.section
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        w="sm"
        mt={6}
        p={4}
        bg="black.header"
        flexDir="column"
        borderRadius="lg"
        border="1px solid"
        borderColor="border.default"
      >
        <Heading alignSelf="center" color="white">
          Sign Up
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
        <Box mt={4} w="full">
          <chakra.label color="white" htmlFor="password">
            Repeat password
          </chakra.label>
          <Input mt={2} placeholder="Password" color="white" name="password" />
        </Box>
        <Button colorScheme="green" mt={6}>
          Sign Up
        </Button>
      </Flex>
    </chakra.section>
  );
};
