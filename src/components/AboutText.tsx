import { Text } from "@chakra-ui/react";
import LoremIpsum from "react-lorem-ipsum";

const AboutText = () => {
  return (
    <Text>
      This is the about section where I will talk about myself...
      <LoremIpsum p={3} avgSentencesPerParagraph={3} />
    </Text>
  );
};

export default AboutText;
