import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AboutSection = ({ children }: Props) => {
  return (
    <Box
      p={2}
      marginX={10}
      marginBottom={2}
      borderColor="gray.500"
      borderWidth={2}
    >
      <Text fontSize="2xl" marginBottom={3}>
        About
      </Text>
      {children}
    </Box>
  );
};

export default AboutSection;
