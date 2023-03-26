import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useGetGenres from "../../services/api/api-hooks/games/useGetGenres";
import getCroppedImageUrl from "../../utils/image-url";

const GenreList = () => {
  const genreQuery = useGetGenres();

  if (genreQuery.isError) return null;

  return (
    <Box>
      <Text fontSize="xl" fontWeight="semibold" mb="3">
        Genres
      </Text>
      <List spacing="1">
        {genreQuery.isLoading &&
          new Array(10).fill(0).map((_, idx) => (
            <ListItem key={idx} py="1">
              <HStack spacing="2">
                <Skeleton w="8" h="8" rounded="lg" />
                <Skeleton h="3" w="full" noOfLines={1} />
              </HStack>
            </ListItem>
          ))}
        {genreQuery.data?.data?.results.map((genre) => (
          <ListItem key={genre.id} py="1">
            <HStack spacing="2">
              <Image
                w="8"
                h="8"
                rounded="lg"
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
