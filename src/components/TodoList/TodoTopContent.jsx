import { Box, Stack, Heading, Text } from '@chakra-ui/react';

const TodoTopContent = () => {
  return (
    <Box
      as="section"
      pb="4"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="grayscale.300"
    >
      <Heading as="h2" size="xl" color="grayscale.100">
        2024년 2월 6일
      </Heading>
      <Stack spacing="6">
        <Text as="span" size="md" color="grayscale.200">
          화요일
        </Text>
        <Text as="span" size="md" color="brand.primary">
          할 일 2개 남음
        </Text>
      </Stack>
    </Box>
  );
};

export default TodoTopContent;
