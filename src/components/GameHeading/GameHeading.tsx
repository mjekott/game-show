import { Heading } from "@chakra-ui/react";
import { GamesQuery } from "../../types/games";

const GameHeading = (gameQuery: GamesQuery) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading my={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
