import { ChakraProvider } from '@chakra-ui/react';
import Router from './Router';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}

export default App;
