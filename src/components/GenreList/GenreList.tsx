import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import useGetGenres from "../../services/api/api-hooks/games/useGetGenres";
import { Genre } from "../../types/genres";
import getCroppedImageUrl from "../../utils/image-url";

interface GenreListProps {
  onSelectedGenre?: (genre: Genre) => void;
}

const GenreList: FC<GenreListProps> = ({ onSelectedGenre }) => {
  const genreQuery = useGetGenres();

  if (genreQuery.isError) return null;

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
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
                <Button
                  variant="link"
                  onClick={() => onSelectedGenre && onSelectedGenre(genre)}
                >
                  <Text> {genre.name}</Text>
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Box>
    </ErrorBoundary>
  );
};

export default GenreList;
