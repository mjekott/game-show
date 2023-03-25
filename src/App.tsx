import { Grid, GridItem, Show } from "@chakra-ui/react";
import { GameGrid } from "./components/GameGrid";
import { NavBar } from "./components/NavBar";
import { Sidebar } from "./components/SideBar";

function App() {
  return (
    <Grid
      w="full"
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
