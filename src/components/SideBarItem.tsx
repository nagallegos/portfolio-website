import { Box, Center } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SideBarItem = ({ children }: Props) => {
  return (
    <Center marginX={1}>
      <Box
        w="100%"
        p={1}
        borderRadius="md"
        cursor="pointer"
        _hover={{
          bg: "gray.200",
          color: "black",
        }}
      >
        {children}
      </Box>
    </Center>
  );
};

export default SideBarItem;
