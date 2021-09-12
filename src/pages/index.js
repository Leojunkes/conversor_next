import { Flex, Box, Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex flexDirection='column'>
      <Flex
        borderRadius="8"
        color="Colors.gelo"
        boxShadow="-0.381739px 10.9934px 27px rgba(0, 0, 0, 0.25), -0.277656px 7.99596px 18.1986px rgba(0, 0, 0, 0.202344), -0.193256px 5.5654px 11.7703px rgba(0, 0, 0, 0.16875), -0.126749px 3.65014px 7.30371px rgba(0, 0, 0, 0.144531), -0.0763479px 2.19867px 4.3875px rgba(0, 0, 0, 0.125), -0.0402616px 1.15946px 2.61035px rgba(0, 0, 0, 0.105469), -0.0167011px 0.48096px 1.56094px rgba(0, 0, 0, 0.08125), -0.00387704px 0.111651px 0.82793px rgba(0, 0, 0, 0.0476562);
"
        bg="Colors.red"
        h="6rem"
        w="30rem"
        m="auto"
        mt="14"
      >
        <label style={{ margin: 'auto', fontSize: '30px' }}>
          Junkes Conversor
        </label>
      </Flex>
      <Flex
        borderRadius="8"
        m="40px auto"
        alignContent="center"
        justifyContent="center"
        height="17rem"
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
              backgroundImage="url('/imagens/usaFlag.png')"
            ></Flex>
            <Flex mt="4" fontSize="1.0rem" ml="16" color="white">
              <big>Dólar</big>
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
              backgroundImage="url('/imagens/portFlag.png')"
            >
              
            </Flex>
            <Flex mt="4" fontSize="1.0rem" ml="20" color="white">
              <big>Euro</big>
            </Flex>
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
}
