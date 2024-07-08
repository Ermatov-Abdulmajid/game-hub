import { HStack, Image, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.svg";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"20px"}>
      <Link
        href="https://github.com/Ermatov-Abdulmajid/ermatov-abdulmajid"
        target="_blank">
        <Image src={logo} alt="logo" width="40px" height="35px" />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
