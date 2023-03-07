
import React, { useState, useEffect } from "react";
import { Box, Container, Flex, Image, Collapse, Button} from "@chakra-ui/react";
import { Blockchainquery } from "../../ethers/blockchainquery";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";


const blockchain = new Blockchainquery();



function Blockchain() {
  const [blockNumber, setBlockNumber] = useState(null);
  const [block, setBlock] = useState(null);

  const { isOpen, onToggle } = useDisclosure();

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
    <Container maxW='container.xl' bg='green.400'>
      <Flex direction={{ base: "column", lg: "row" }}>

      
      <Tabs colorScheme="whiteAlpha" align="center" defaultIndex={2} w={{base:'100%', lg:'50%'}}>
        <TabList
          mb="1em"
          style={{ backgroundColor: "transparent", borderBottom: "none" }}
        >
          <Tab
            opacity={0.72}
            transition="all 0.5s ease-in-out"
            _selected={{ transform: "scale(1.4)", opacity: "1" }}
            _focus={{ bg: "transparent", boxShadow: "none" }}
          >
            <Box w={"100px"} h={"100px"}>
              <Image src="/assets/block.png" objectFit="cover" />
            </Box>
          </Tab>
          <Box
            w={"100px"}
            h={"100px"}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Box w={"100px"}>
              <Image src="/assets/chain.png" objectFit="cover" />
            </Box>
          </Box>
          <Tab
            opacity={0.72}
            transition="all 0.5s ease-in-out"
            _selected={{ transform: "scale(1.4)", opacity: "1" }}
            _focus={{ bg: "transparent", boxShadow: "none" }}
          >
            <Box w={"100px"} h={"100px"}>
              <Image src="/assets/block.png" objectFit="cover" />
            </Box>
          </Tab>
          <Box
            w={"100px"}
            h={"100px"}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Box w={"100px"}>
              <Image src="/assets/chain.png" objectFit="cover" />
            </Box>
          </Box>
          <Tab
            opacity={0.72}
            transition="all 0.5s ease-in-out"
            _selected={{ transform: "scale(1.4)", opacity: "1" }}
            _focus={{ bg: "transparent", boxShadow: "none" }}
          >
            <Box w={"100px"} h={"100px"}>
              <Image src="/assets/block.png" objectFit="cover" />
            </Box>
          </Tab>
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

      <Box w={{base:'100%', lg:'50%'}}>
      <Button onClick={onToggle}>Click Me</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
           sEAŞDFLŞASDMFLŞAMFLŞADMALŞMDŞLAMDFLŞAMDF
        </Box>
      </Collapse>
      </Box>

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
      </Flex>
    </Container>
  );
}
export default Blockchain;
