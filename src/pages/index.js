import { Flex, Box, Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      borderRadius="8"
      m="130px auto"
      alignContent="center"
      justifyContent="center"
      height="15rem"
      width="28rem"
      bg="Colors.red"
    >
      <Flex
        justifyContent="space-around"
        marginTop="50px"
        gridAutoColumns="initial"
      >
        <a href="http://localhost:3000/usdbrl">
        <Flex
          fontSize="1.5rem"
          p="55px"
          textAlign="center"
          color="white"
          bg="#495057"
          h="10rem"
          w="11rem"
          borderRadius="8"
        >
          <p>Dólar</p>
        </Flex>
        </a>
        <a href="http://localhost:3000/euroBrl">
        <Flex
        borderRadius="8"
          color="white"
          textAlign="center"
          bg="#495057"
          ml="4"
          h="10rem"
          w="11rem"
          p="55px"
          fontSize="1.5rem"
        >
          Euro
        </Flex>
        </a>
       
      </Flex>
    </Flex>
  );
}
