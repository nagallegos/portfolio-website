import { Box } from "@chakra-ui/react";
import SideBarItem from "./SideBarItem";
import { HamburgerIcon, Icon } from "@chakra-ui/icons";

const SideBar = () => {
  return (
    <Box p={2}>
      <SideBarItem>
        <Icon as={HamburgerIcon} fontSize={20} />
      </SideBarItem>
      <SideBarItem compRef="/">Home</SideBarItem>
      <SideBarItem compRef="#about-section">About</SideBarItem>
      <SideBarItem compRef="#skills-section">Skills</SideBarItem>
      <SideBarItem compRef="#contact-section">Contact</SideBarItem>
    </Box>
  );
};

export default SideBar;
