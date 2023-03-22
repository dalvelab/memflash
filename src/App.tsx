import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Router } from "./Router";

const theme = extendTheme({
  colors: {
    black: {
      header: "#161b22",
      default: "#0d1117",
    },
    border: {
      default: "#30363d",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
