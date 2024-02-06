import { Box, Flex } from '@chakra-ui/react';
import TodoHeader from './TodoHeader';

const TodoLayout = ({ children }) => {
  return (
    <Box bgColor="grayscale.300">
      <Flex
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        maxW="md"
        h="100vh"
        mx="auto"
        py="12"
      >
        <Flex
          pos="relative"
          flex="1"
          w="100%"
          h="100%"
          px="6"
          py="12"
          bgColor="grayscale.400"
          borderRadius="md"
          boxShadow="md"
        >
          <TodoHeader />
          <Flex as="main" flexDirection="column" flex="1" w="100%">
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TodoLayout;
