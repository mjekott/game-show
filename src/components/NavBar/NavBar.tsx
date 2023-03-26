import { HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import SearchInput from "../SearchInput";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface NavBarProps {
  onSearchText: (value: string) => void;
}

const NavBar: FC<NavBarProps> = ({ onSearchText }) => {
  return (
    <HStack py="4" px="10" spacing="4" justifyContent="space-between">
      <Text fontWeight="bold" fontSize="2xl" letterSpacing="wide">
        GZ
      </Text>
      <SearchInput onSearchText={onSearchText} />
      <ThemeSwitcher />
    </HStack>
  );
};

export default NavBar;
