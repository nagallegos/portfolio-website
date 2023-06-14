import { Box, Flex, Grid, GridItem, Show, Spacer } from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <Grid
      p={1}
      templateAreas={{
        base: `"header" 
               "main"
               "footer"`,
        lg: `"nav header"
             "nav main"
             "nav footer"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "150px 1fr",
      }}
      templateRows={{
        base: "auto 1fr 1fr", // change the 100px later
        lg: "auto 1fr 1fr", // change the 100px later
      }}
    >
      <GridItem
        area="header"
        //bg={"green.500"}
      >
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="nav"
          //bg={"teal.500"}
          borderRightWidth={1}
          borderColor="blue.200"
        >
          <SideBar />
        </GridItem>
      </Show>
      <GridItem
        area="main"
        //bg={"blue.500"}
      >
        <AboutSection />
      </GridItem>
      <GridItem
        area="footer"
        //bg={"purple.500"}
      >
        <ContactSection />
      </GridItem>
    </Grid>
  );
}

export default App;
