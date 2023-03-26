import { Grid, GridItem, Show } from "@chakra-ui/react";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Grid
      w="full"
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav " "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" pl="10">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
