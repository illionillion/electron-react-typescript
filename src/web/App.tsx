import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const plus = () => {
    setCount((prev) => prev + 1);
  };
  const minus = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <Box
      w="full"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Text>Count:{count}</Text>
      <Flex>
        <Button onClick={plus}>+</Button>
        <Button onClick={minus}>-</Button>
      </Flex>
    </Box>
  );
};
