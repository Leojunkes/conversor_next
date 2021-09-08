import { Flex, Input, Button, FormLabel } from '@chakra-ui/react';
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
    <Flex>
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
        flexDirection='column'
      >
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
            placeholder="R$"
            w="100px"
            bg="Colors.softblue"
          />
          <Button ml="8" bg="Colors.green" color="white" type="submit">
            aperte
          </Button>
         
        </Flex>
        <FormLabel p='4' m='auto' fontSize="3rem" color="white">
            $ {total.toFixed(2)}
          </FormLabel>
      </Flex>

      <p>Junkes-Conversor</p>
    </Flex>
  );
}
