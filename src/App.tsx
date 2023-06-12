import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" 
               "main"
               "footer"`,
        lg: `"header header"
             "nav main"
             "nav footer"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "100px 1fr",
      }}
      templateRows={{
        base: "50px 100px 30px", // change the 100px later
        lg: "50px 100px 30px", // change the 100px later
      }}
    >
      <GridItem area="header" bg="green">
        Header
      </GridItem>
      <Show above="lg">
        <GridItem area="nav" bg="red">
          Nav
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
      <GridItem area="footer" bg="yellow">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
