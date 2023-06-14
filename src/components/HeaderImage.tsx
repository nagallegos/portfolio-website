import { Center, Image } from "@chakra-ui/react";

interface Props {
  imageSrc: string;
}

const HeaderImage = ({ imageSrc }: Props) => {
  return (
    <Center>
      <Image
        marginTop={6}
        boxSize="300px"
        objectFit="contain"
        src={imageSrc}
        alt="Nickolas Gallegos - Graduation Photo"
      />
    </Center>
  );
};

export default HeaderImage;
