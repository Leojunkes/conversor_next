/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import {
  Tab,
  Stack,
  TabList,
  Tabs,
  Flex,
  Input,
  Button,
  FormLabel,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Conversor() {
  //Função Calcular do Botão
  function convert(e) {
    e.preventDefault();
    const total = moedaValor * dados.USD_BRL;
    console.log(total);
    setTotal(total);
    
  }
  //Chamando a API
  useEffect(() => {
    const USD_BRL =
      'api/v7/convert?q=USD_BRL&compact=ultra&apiKey=0d7d4095696e105c8fc7';
    const url = 'https://free.currconv.com/';

    axios.get(url + USD_BRL).then((res) => {
      setDados(res.data);
    });
  }, []);

  const [moedaValor, setMoedaValor] = useState('');
  const [total, setTotal] = useState(0);
  const [dados, setDados] = useState([]);
  return (
    <>
      <Flex height="4rem" bg="Colors.gray">
        <Tabs mt="2" variant="soft-rounded" colorScheme="none">
          <TabList ml="4">
            <Stack direction="row" spacing="12px">
              <a href="/">
                <Tab>Home</Tab>
              </a>

              <a href="https://junkes-conversor.vercel.app/euroBrl">
                <Tab>Euro</Tab>
              </a>
            </Stack>
          </TabList>
        </Tabs>
      </Flex>
      <Flex
        width="30rem"
        p="8"
        borderRadius={8}
        bg="Colors.red"
        id="insert_form"
        alignContent="center"
        justifyContent="center"
        m="130px auto"
        pl="8px"
        pt="80px"
        flexDirection="column"
        
      >
        <img
          src="/imagens/usaFlag.png"
          alt=""
          style={{ height: '36px', width: '70px', marginTop: '-60px' }}
        />
        <Flex
          as="form"
          onSubmit={convert}
          alignContent="center"
          justifyContent="center"
        >
          <Input
            type="number"
            inputMode="numeric"
            onChange={(e) => setMoedaValor(e.target.value)}
            placeholder="US$"
            w="100px"
            bg="Colors.softblue"
            pattern="[0-9]+([,\.][0-9]+)?"
            min="0"
            step="any"
          />
          <Button
            border="none"
            ml="8"
            bg="Colors.green"
            color="white"
            type="submit"
            _hover="none"
          >
            converter
          </Button>
        </Flex>
        <Flex flexDirection="column">
          <FormLabel p="4" m="auto" fontSize="3rem" color="white">
            R$ {total.toFixed(2)}
          </FormLabel>
          <img
            style={{
              height: '1px',
              width: '200px',
              marginLeft: '116px',
              marginTop: '-25px',
            }}
            src="/imagens/linha.png"
            alt=""
          />
        </Flex>
      </Flex>
    </>
  );
}
