import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"20px"}>
      <Image src="" alt="logo" sizes="60" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
