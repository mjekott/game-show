import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { FC } from "react";
import { Game } from "../../../types/games";
import getCroppedImageUrl from "../../../utils/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}

export const GameCard: FC<GameCardProps> = ({ game }) => {
  const { background_image, name, parent_platforms, metacritic } = game;
  return (
    <Card borderRadius="lg" overflow="hidden">
      <Image
        height="250px"
        src={getCroppedImageUrl(background_image)}
        objectFit="cover"
        alt={name}
      />
      <CardBody>
        <Heading fontSize="xl">{name}</Heading>

        <HStack justifyContent="space-between" mt="4">
          <PlatformIconList platforms={parent_platforms} />
          <CriticScore value={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
