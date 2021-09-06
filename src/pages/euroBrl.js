import axios from 'axios';
import { useEffect, useState } from 'react';

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
    <>
      <p>Junkes-Conversor</p>
      <input
        type="number"
        inputMode="numeric"
        onChange={(e) => setMoedaValor(e.target.value)}
        placeholder="R$"
      />
      <button type="button" onClick={convert}>
        aperte
      </button>
      <label>total é {total.toFixed(2)}</label>
    </>
  );
}
