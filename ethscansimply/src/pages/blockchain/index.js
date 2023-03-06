import React, { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { Blockchainquery } from "../../ethers/blockchainquery";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'



const blockchain = new Blockchainquery();

function Blockchain() {
  const [blockNumber, setBlockNumber] = useState(null);
  const [block, setBlock] = useState(null);

  useEffect(() => {
    async function fetchBlockchainData() {
      const latestBlockNumber = await blockchain.getBlockNumber();
      const latestBlock = await blockchain.getBlock(latestBlockNumber);
      setBlockNumber(latestBlockNumber);
      setBlock(latestBlock);

    }
    fetchBlockchainData();
  }, []);

  return (
    <div>
      <Box display={'flex'} alignItems='center' justifyContent={'center'}>
      <Box w={'100px'} h={'100px'}>
        <Image src='/assets/block.png' objectFit='cover'/>
      </Box>
      <Box w={'100px'} h={'100px'} display='flex' alignItems='center' justifyContent={'center'}>
        <Image src='/assets/chain.png' objectFit='cover'/>
      </Box>
      </Box>

      <Tabs colorScheme='teal' align='left'>
      <TabList mb='1em'>
      <Tab><Box w={'100px'} h={'100px'}>
        <Image src='/assets/block.png' objectFit='cover'/>
      </Box></Tab>
      <Box w={'100px'} h={'100px'} display='flex' alignItems='center' justifyContent={'center'}>
        <Image src='/assets/chain.png' objectFit='cover'/>
      </Box>
      <Tab>      <Box w={'100px'} h={'100px'}>
        <Image src='/assets/block.png' objectFit='cover'/>
      </Box></Tab>
      <Box w={'100px'} h={'100px'} display='flex' alignItems='center' justifyContent={'center'}>
        <Image src='/assets/chain.png' objectFit='cover'/>
      </Box>
      <Tab>      <Box w={'100px'} h={'100px'}>
        <Image src='/assets/block.png' objectFit='cover'/>
      </Box></Tab>
      </TabList>
      <TabPanels>
      <TabPanel>
      <p>Block 1</p>
      </TabPanel>
      <TabPanel>
      <p>Block2</p>
      </TabPanel>
      <TabPanel>
      <p>Block3</p>
      </TabPanel>
      </TabPanels>
      </Tabs>

      
      {/* <h1>Son blok numarası: {blockNumber}</h1>
      {block && (
        <div>
          <h2>Blok bilgileri</h2>
          <ul>
            <li>Blok numarası: {block.number}</li>
            <li>Blok hash'i: {block.hash}</li>
            <li>Gas limiti: {block.gasLimit.toString()}</li>
            <li>Gas kullanımı: {block.gasUsed.toString()}</li>
            <li>Blok oluşum tarihi: {new Date(block.timestamp * 1000).toLocaleString()}</li>
          </ul>
        </div>
      )} */}
    </div>
  )
}
export default Blockchain;