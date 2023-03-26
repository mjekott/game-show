import { useQuery } from "@tanstack/react-query";
import { CanceledError } from "axios";
import { Game, GamesQuery } from "../../../../types/games";
import axiosClient from "../../api-client";

interface GetGamesResponse {
  count: number;
  results: Game[];
}

const useGetGames = (gameQuery: GamesQuery) => {
  return useQuery({
    queryKey: [
      "games",
      gameQuery.genre?.id,
      gameQuery.platform?.id,
      gameQuery.sortOrder,
    ],
    queryFn: async ({ signal }) => {
      try {
        const response = await axiosClient.get<GetGamesResponse>("/games", {
          signal,
          params: {
            ...(gameQuery.genre ? { genres: gameQuery.genre.id } : {}),
            ...(gameQuery.platform
              ? { parent_platforms: gameQuery.platform.id }
              : {}),
            ...(gameQuery.sortOrder ? { ordering: gameQuery.sortOrder } : {}),
          },
        });
        return response.data;
      } catch (error) {
        if (error instanceof CanceledError) return;
      }
    },
  });
};

export default useGetGames;
