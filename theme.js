import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#0fbcf9',
      secondary: '#00d8d6',
    },
    grayscale: {
      100: '#000',
      200: '#777',
      300: '#dfdfdf',
      400: '#fff',
    },
  },
});

export default theme;
