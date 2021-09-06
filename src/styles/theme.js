import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    Colors: {
      white: '#ffffff',
      red: '#9B1B30',
      gray: '#495057',
      softblue: '#C3FAE8',
      green: '#0CA678',
      gelo: '#DEE2E6',
      gray900: '#181B23',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'Colors.gelo',
        color: 'Colors.gray900',
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
});
