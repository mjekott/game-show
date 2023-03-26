import { SimpleGrid, Text } from "@chakra-ui/react";
import { FC } from "react";
import useGetGames from "../../services/api/api-hooks/games/useGetGames";
import { GamesQuery } from "../../types/games";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCard/GameCardSkeleton";

interface GameGridProps {
  gameQuery: GamesQuery;
}

const GameGrid: FC<GameGridProps> = ({ gameQuery }) => {
  const gamesQuery = useGetGames(gameQuery);

  if (gamesQuery.isError)
    return <Text>{(gamesQuery.failureReason as any).message}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={3} px="10">
      {gamesQuery.isLoading &&
        new Array(5).fill(0).map((_, idx) => <GameCardSkeleton key={idx} />)}
      {!!gamesQuery.data?.results.length &&
        gamesQuery.data?.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      {gamesQuery.data?.results.length === 0 && <Text>Empty</Text>}
    </SimpleGrid>
  );
};

export default GameGrid;
