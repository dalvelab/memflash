import { chakra } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Navbar } from "./Navbar";
import { Container } from "./Container";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <chakra.main
        mt={16}
        bg="#242424"
        height="auto"
        minH="calc(100vh - 64px)"
        display="flex"
        justifyContent="center"
      >
        <Container>
          <Outlet />
        </Container>
      </chakra.main>
    </>
  );
};
