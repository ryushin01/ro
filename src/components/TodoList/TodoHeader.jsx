import { Box, Heading } from '@chakra-ui/react';

const TodoHeader = () => {
  return (
    <Box as="header" pos="absolute" bottom="6" right="6">
      <Heading as="h1" size="md" color="#000">
        RO: To Do List
      </Heading>
    </Box>
  );
};

export default TodoHeader;
