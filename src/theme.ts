import { extendTheme, ThemeConfig } from "@chakra-ui/react";
// Theme,

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;
