import { Grid, GridItem, Show } from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

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
        base: "50px 1fr 1fr", // change the 100px later
        lg: "50px 1fr 1fr", // change the 100px later
      }}
    >
      <GridItem area="header">
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem area="nav">
          <SideBar />
        </GridItem>
      </Show>
      <GridItem area="main">
        <AboutSection />
      </GridItem>
      <GridItem area="footer">
        <ContactSection />
      </GridItem>
    </Grid>
  );
}

export default App;
