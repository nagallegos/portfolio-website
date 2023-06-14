import { Grid, GridItem, Show } from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";
import Sticky from "react-stickynode";

function App() {
  return (
    <Grid
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
        base: "auto 1fr auto", // change the 100px later
        lg: "auto 1fr auto", // change the 100px later
      }}
    >
      <GridItem area="header" bg={"whiteAlpha.50"}>
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="nav"
          //bg={"teal.500"}
          borderRightWidth={1}
          borderColor="blue.200"
        >
          <Sticky>
            <SideBar />
          </Sticky>
        </GridItem>
      </Show>
      <GridItem
        area="main"
        //bg={"blue.500"}
      >
        <AboutSection />
        <SkillsSection />
      </GridItem>
      <GridItem area="footer" bg={"blackAlpha.400"}>
        <ContactSection />
      </GridItem>
    </Grid>
  );
}

export default App;
