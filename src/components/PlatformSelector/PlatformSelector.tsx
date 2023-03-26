import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import { BsChevronDown } from "react-icons/bs";
import useGetPlatforms from "../../services/api/api-hooks/games/useGetPlatforms";
import { Platform } from "../../types/platform";

interface PlatformSelectorProps {
  onSelectPlatform?: (platform: Platform) => void;
  selectedPlatform?: Platform;
}

const PlatformSelector: FC<PlatformSelectorProps> = ({ selectedPlatform }) => {
  const getPlatformQuery = useGetPlatforms();
  if (getPlatformQuery.isError) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {getPlatformQuery.data?.data.results.map((platform) => (
          <MenuItem key={platform.name}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
