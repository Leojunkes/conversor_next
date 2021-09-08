import axios from 'axios';
import { useEffect, useState } from 'react';
import {Input, Flex, Button,FormLabel} from '@chakra-ui/react'

export default function Conversor() {
  //Função Calcular do Botão
  function convert(e) {
    e.preventDefault();
    const total = moedaValor * dados.EUR_BRL;
    console.log(total);
    setTotal(total);
  }
//Chamando a API
  useEffect(() => {
    const EUR_BRL =
      'api/v7/convert?q=EUR_BRL&compact=ultra&apiKey=0d7d4095696e105c8fc7';
    const url = 'https://free.currconv.com/';

    axios.get(url + EUR_BRL).then((res) => {
      setDados(res.data);
      
    });
  }, []);

  const [moedaValor, setMoedaValor] = useState('');
  const [total, setTotal] = useState(0);
  const [dados, setDados] = useState([]);
  return (
    <Flex>
      <Flex
        as="form"
        width="30rem"
        p="8"
        borderRadius={8}
        bg='Colors.red'
        onSubmit={convert}
        id="insert_form"
        alignContent="center"
        justifyContent="center"
        m="130px auto"
        pl='8px'
        pt='80px'
      >
      
        <Input
          type="number"
          inputMode="numeric"
          onChange={(e) => setMoedaValor(e.target.value)}
          placeholder="R$"
          w='100px'
          bg='Colors.softblue'
        />
        <Button ml='8' bg='Colors.green' color='white' type="submit" >
          aperte
        </Button>
        <FormLabel fontSize='3rem' color='white' ml='-165px' mt='14'>$ {total.toFixed(2)}</FormLabel>
      </Flex>
      
      <p>Junkes-Conversor</p>

      
    </Flex>
    // <>
    
    //   <p>Junkes-Conversor</p>
    //   <input
    //     type="number"
    //     inputMode="numeric"
    //     onChange={(e) => setMoedaValor(e.target.value)}
    //     placeholder="R$"
    //   />
    //   <button type="button" onClick={convert}>
    //     aperte
    //   </button>
    //   <label>€ {total.toFixed(2)}</label>
    // </>
  );
}
