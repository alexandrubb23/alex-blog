import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  initialColorMode: 'light',
};

const theme = extendTheme({
  config,
  components: {
    Button: {
      variants: {
        blue: {
          _hover: {
            bg: 'blue.500'
          },
          borderRadius: 'full',
          color: 'white'
        },
        'nav-bar': (props: StyleFunctionProps) => ({
          _hover: {
            bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.100'
          },
          borderRadius: '5px',
          p: '10px',
          minWidth: '2rem',
          height: '2rem'
        })
      }  
    }
  },
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
