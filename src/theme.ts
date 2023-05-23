import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3de',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111',
    },
    blue: {
      500: '#1970F1',
    },
    yellow: {
      500: '#E8C127',
    },
    midNightBlue: {
      500: '#181738',
    },
  },
});

export default theme;
