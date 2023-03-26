import { useQuery } from "@tanstack/react-query";
import { CanceledError } from "axios";
import { GetGenresResponse } from "../../../../types/genres";
import axiosClient from "../../api-client";

const useGetGenres = () => {
  return useQuery(["genres"], async ({ signal }) => {
    try {
      const response = await axiosClient.get<GetGenresResponse>("/genres", {
        signal,
      });
      return response;
    } catch (error) {
      if (error instanceof CanceledError) return;
    }
  });
};

export default useGetGenres;
