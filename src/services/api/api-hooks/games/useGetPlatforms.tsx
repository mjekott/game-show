import { useQuery } from "@tanstack/react-query";
import { CanceledError } from "axios";
import { GetPlatforms } from "../../../../types/platform";
import axiosClient from "../../api-client";

const useGetPlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: async ({ signal }) => {
      try {
        const response = await axiosClient.get<GetPlatforms>(
          "/platforms/lists/parents",
          {
            signal,
          }
        );
        return response;
      } catch (error) {
        if (error instanceof CanceledError) return;
      }
    },
  });
};

export default useGetPlatforms;
