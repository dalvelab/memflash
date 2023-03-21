import { chakra, Box, Flex, Input, Heading, Button } from "@chakra-ui/react";

export const Register = () => {
  return (
    <chakra.section
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex w="sm" mt={6} p={4} bg="#1c1c19" flexDir="column">
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
          Create account
        </Button>
      </Flex>
    </chakra.section>
  );
};
