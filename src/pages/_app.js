import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../componentes/footer';

import '../styles/globals.css';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    
    <ChakraProvider resetCSS={false} theme={theme}>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
    
    
  );
}

export default MyApp;
