import { ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  heading: string;
}

const Contact = ({ children, heading }: Props) => {
  return (
    <Box p={2} marginX={10} marginBottom={2} fontFamily="mono">
      <Box borderBottomWidth={2} marginBottom={2}>
        <Text fontSize="2xl" marginBottom={3}>
          {heading}
        </Text>
      </Box>
      {children}
    </Box>
  );
};

export default Contact;
