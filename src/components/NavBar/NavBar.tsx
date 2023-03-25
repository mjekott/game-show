import { HStack, Text } from "@chakra-ui/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
const NavBar = () => {
  return (
    <HStack py="4" px="10" justifyContent="space-between">
      <Text fontWeight="bold" fontSize="2xl" letterSpacing="wide">
        GZ
      </Text>
      <ThemeSwitcher />
    </HStack>
  );
};

export default NavBar;
