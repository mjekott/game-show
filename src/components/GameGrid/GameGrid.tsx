import { SimpleGrid, Text } from "@chakra-ui/react";
import { FC } from "react";
import useGetGames from "../../services/api/api-hooks/games/useGetGames";
import { Genre } from "../../types/genres";
import { Platform } from "../../types/platform";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCard/GameCardSkeleton";

interface GameGridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid: FC<GameGridProps> = ({ selectedGenre, selectedPlatform }) => {
  const gamesQuery = useGetGames({
    genres: selectedGenre?.id ? String(selectedGenre.id) : "",
    platforms: selectedPlatform?.id ? String(selectedPlatform.id) : "",
  });
  const skeletons = new Array(5).fill(0);

  return (
    <>
      {gamesQuery.error && (
        <Text>{(gamesQuery.failureReason as any).message}</Text>
      )}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={3} px="10">
        {gamesQuery.isLoading &&
          skeletons.map((_, idx) => <GameCardSkeleton key={idx} />)}
        {!!gamesQuery.data?.results.length &&
          gamesQuery.data?.results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        {gamesQuery.data?.results.length === 0 && <Text>Empty</Text>}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
