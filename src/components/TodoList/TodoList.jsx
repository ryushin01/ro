import { Wrap } from '@chakra-ui/react';

const TodoList = () => {
  const properties = {
    imageUrl: '',
    imageAlt: '',
    title: 'RO: To Do List',
  };

  const { title } = properties;

  return (
    <Wrap as="section" flex="1" py="4" overflowY="auto">
      <div>111</div>
    </Wrap>
  );
};

export default TodoList;
