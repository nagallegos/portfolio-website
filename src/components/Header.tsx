import { Box, Center, Text } from "@chakra-ui/react";
import HeaderImage from "./HeaderImage";

const Header = () => {
  return (
    <Box marginBottom={20} marginTop={10}>
      <Center>
        <Text fontSize="4xl" fontFamily="mono">
          Nickolas Gallegos
        </Text>
      </Center>
      <HeaderImage imageSrc="./img/grad_photo.jpg" />
    </Box>
  );
};

export default Header;
