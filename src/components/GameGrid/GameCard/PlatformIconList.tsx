import { HStack, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { ParentPlatform } from "../../../types/games";

interface PlatformIconListProps {
  platforms: ParentPlatform[];
}

const PlatformIconList: FC<PlatformIconListProps> = ({ platforms }) => {
  const iconMap: { [x: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    max: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack spacing="2" color="gray.500">
      {platforms.map(({ platform }) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
