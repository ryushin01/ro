import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import TodoLayout from '@components/TodoList/TodoLayout';
import TodoTopContent from '@components/TodoList/TodoTopContent';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TodoLayout>
        <TodoTopContent />
        <TodoList />
      </TodoLayout>
    </ChakraProvider>
  );
}

export default App;
