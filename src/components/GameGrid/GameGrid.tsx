import { SimpleGrid, Text } from "@chakra-ui/react";
import useGetGames from "../../services/api/api-hooks/games/useGetGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCard/GameCardSkeleton";

const GameGrid = () => {
  const gamesQuery = useGetGames();
  const skeletons = new Array(5).fill(0);

  return (
    <>
      {gamesQuery.error && (
        <Text>{(gamesQuery.failureReason as any).message}</Text>
      )}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={3} px="10">
        {gamesQuery.isLoading &&
          skeletons.map((_, idx) => <GameCardSkeleton key={idx} />)}
        {gamesQuery.data?.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;