import { Box, Text } from '@chakra-ui/react';

const TodoList = () => {
  const properties = {
    imageUrl: '',
    imageAlt: '',
    title: 'RO: To Do List',
  };

  const { title } = properties;

  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Text fontSize="7xl">{title}</Text>
    </Box>
  );
};

export default TodoList;
