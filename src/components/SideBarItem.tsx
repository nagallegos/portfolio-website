import { Box, Center, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  compRef?: string;
}

const SideBarItem = ({ children, compRef }: Props) => {
  return (
    <Link href={compRef} textDecoration="none">
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
    </Link>
  );
};

export default SideBarItem;
