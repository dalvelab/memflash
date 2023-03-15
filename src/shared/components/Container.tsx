import { ReactNode } from "react";

import { chakra, StyleProps } from "@chakra-ui/react";

interface ContainerProps extends StyleProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  const containerBase = {
    display: "flex",
    width: "container.xl",
  };

  return (
    <chakra.div __css={{ ...containerBase }} {...props}>
      {children}
    </chakra.div>
  );
};
