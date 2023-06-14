import { Box, Center, Image, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box marginBottom={20} marginTop={10}>
      <Center>
        <Text fontSize="4xl" fontFamily="mono">
          Nickolas Gallegos
        </Text>
      </Center>
      <Center>
        <Image
          marginTop={6}
          boxSize="300px"
          objectFit="contain"
          src="./img/grad_photo.jpg"
          alt="Nickolas Gallegos - Graduation Photo"
        />
      </Center>
    </Box>
  );
};

export default Header;
