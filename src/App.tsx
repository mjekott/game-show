import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { GameGrid } from "./components/GameGrid";
import GameHeading from "./components/GameHeading/GameHeading";
import GenreList from "./components/GenreList/GenreList";
import { NavBar } from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import SortSelector from "./components/SortSelector/SortSelector";
import { GamesQuery } from "./types/games";

function App() {
  const [gameQuery, setGameQuery] = useState<GamesQuery>({
    genre: null,
    platform: null,
    sortOrder: null,
    searchText: "",
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
        <NavBar
          onSearchText={(searchText) => {
            setGameQuery((prev) => ({ ...prev, searchText }));
          }}
        />
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
        <Box px="10">
          <GameHeading {...gameQuery} />
          <Flex alignItems="center" py="3" gap="3">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) => {
                setGameQuery((prev) => ({ ...prev, platform }));
              }}
            />
            <SortSelector
              selectedSort={gameQuery.sortOrder}
              onSelectSort={(sortOrder) => {
                setGameQuery((prev) => ({ ...prev, sortOrder }));
              }}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
