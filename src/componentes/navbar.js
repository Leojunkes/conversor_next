/* eslint-disable @next/next/no-html-link-for-pages */
import { Tabs, TabList, Tab,Flex, Stack } from '@chakra-ui/react';

export default function NavbarTab() {
  return (
    <Flex height="4rem"bg='Colors.gray'>
      <Tabs mt='2' variant="soft-rounded" colorScheme="none">
          
          <TabList ml='4' >
          <Stack direction='row' spacing='12px'>
          <a href="/"><Tab>Home</Tab></a>
          <a href="/usdbrl"><Tab>Dólar</Tab></a>
          <a href="/euroBrl"><Tab>Euro</Tab></a>
          </Stack>
        </TabList>
          
        
      </Tabs>
    </Flex>
  );
}
