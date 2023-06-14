import { Box } from "@chakra-ui/react";
import SideBarItem from "./SideBarItem";
import { HamburgerIcon, Icon } from "@chakra-ui/icons";

const SideBar = () => {
  return (
    <Box p={2}>
      <SideBarItem>
        <Icon as={HamburgerIcon} fontSize={20} />
      </SideBarItem>
      <SideBarItem>Item1</SideBarItem>
      <SideBarItem>Item2</SideBarItem>
      <SideBarItem>Item3</SideBarItem>
      <SideBarItem>Item4</SideBarItem>
      <SideBarItem>Item5</SideBarItem>
    </Box>
  );
};

export default SideBar;
