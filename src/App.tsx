import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { NavBar } from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import { Genre } from "./types/genres";
import { Platform } from "./types/platform";

interface GamesQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GamesQuery>({
    genre: null,
    platform: null,
  });

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
          <GenreList
            onSelectedGenre={(genre) => {
              setGameQuery((prev) => ({ ...prev, genre }));
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex alignItems="center" py="3" px="10">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => {
              setGameQuery((prev) => ({ ...prev, platform }));
            }}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
