import { useQuery } from "@tanstack/react-query";
import { CanceledError } from "axios";
import { Game } from "../../../../types/games";
import axiosClient from "../../api-client";

interface GetGamesResponse {
  count: number;
  results: Game[];
}

const useGetGames = ({
  genres = "",
  platforms = "",
}: {
  genres?: string;
  platforms?: string;
}) => {
  return useQuery({
    queryKey: ["games", genres, platforms],
    queryFn: async ({ signal }) => {
      try {
        const response = await axiosClient.get<GetGamesResponse>("/games", {
          signal,
          params: {
            ...(genres ? { genres } : {}),
            ...(platforms ? { parent_platforms: platforms } : {}),
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
