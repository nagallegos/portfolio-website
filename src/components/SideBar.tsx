import { Box } from "@chakra-ui/react";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  return (
    <Box p={2} borderRightWidth={2} marginBottom={2} borderColor="gray.500">
      <SideBarItem>Item1</SideBarItem>
      <SideBarItem>Item2</SideBarItem>
      <SideBarItem>Item3</SideBarItem>
      <SideBarItem>Item4</SideBarItem>
      <SideBarItem>Item5</SideBarItem>
    </Box>
  );
};

export default SideBar;
