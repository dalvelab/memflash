import { Flex, Link, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Container } from "./Container";

export const Navbar = () => {
  return (
    <Flex
      w="full"
      h={16}
      p={4}
      bgColor="white"
      gap={2}
      justifyContent="center"
      alignItems="center"
      position="fixed"
      left={0}
      top={0}
      zIndex={2}
    >
      <Container alignItems="center" justifyContent="space-between">
        <Link as={ReactRouterLink} to="/">
          <Text fontWeight={600} fontSize="2xl">
            Memflash
          </Text>
        </Link>
        <Flex gap={2}>
          <Link as={ReactRouterLink} to="quiz/create">
            Create Quiz
          </Link>
          <Link as={ReactRouterLink} to="auth/signin">
            Login
          </Link>
          <Link as={ReactRouterLink} to="auth/signup">
            Register
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
};
