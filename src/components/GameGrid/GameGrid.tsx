import { SimpleGrid, Text } from "@chakra-ui/react";
import useGetGames from "../../services/api/api-hooks/games/useGetGames";
import { GameCard } from "./GameCard";

const GameGrid = () => {
  const gamesQuery = useGetGames();

  return (
    <>
      {gamesQuery.error && (
        <Text>{(gamesQuery.failureReason as any).message}</Text>
      )}
      {!!gamesQuery.data?.results.length && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={3} px="10">
          {gamesQuery.data?.results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
