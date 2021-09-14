import {Flex} from '@chakra-ui/react'

export default function Footer() {
  const data = new Date().getFullYear();
  return (
    <Flex position='absolute' bottom='0' color='gray.50' h='30px' w='100%' bg='Colors.gray' justifyContent='center' paddingTop='2px'>
      <label style={{fontSize:'18px'}} htmlFor="">©LeoJunkes | {data}</label>
    </Flex>
  );
}
