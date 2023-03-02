import { ReactNode } from "react";

import { chakra, StyleProps } from "@chakra-ui/react";

interface ContainerProps extends StyleProps {
  type?: "flex" | "grid";
  children: ReactNode[] | ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  type = "flex",
  children,
  ...props
}) => {
  const containerBase = {
    display: type === "flex" ? "flex" : "grid",
    width: "container.xl",
  };

  return (
    <chakra.div __css={{ ...containerBase }} {...props}>
      {children}
    </chakra.div>
  );
};
