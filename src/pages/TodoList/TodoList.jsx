import { Box, Text } from '@chakra-ui/react';

const TodoList = () => {
  const property = {
    imageUrl: '',
    imageAlt: '',
    title: 'RO: To Do List',
  };
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Text fontSize="7xl">{property.title}</Text>
    </Box>
  );
};

export default TodoList;
