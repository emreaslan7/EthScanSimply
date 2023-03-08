import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Collapse,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  FormLabel,
  NumberInput
} from "@chakra-ui/react";
import { Blockchainquery } from "../../ethers/blockchainquery";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import SearchSpesificBlock from "../../components/SearchSpesificBlock";
import SearchLatestBlocks from "../../components/SearchLatestBlocks";

const blockchain = new Blockchainquery();

function Blockchain() {
  // const [blockNumber, setBlockNumber] = useState(null);
  // const [block, setBlock] = useState(null);

  const { isOpen, onToggle } = useDisclosure();

  // useEffect(() => {
  //   async function fetchBlockchainData() {
  //     const latestBlockNumber = await blockchain.getBlockNumber();
  //     const latestBlock = await blockchain.getBlock(latestBlockNumber);
  //     setBlockNumber(latestBlockNumber);
  //     setBlock(latestBlock);
  //   }
  //   fetchBlockchainData();
  // }, []);

  const [value, setValue] = useState();
  const [blockvalue, setblockvalue] = useState("");

  const handleButtonClick = () => {
    setblockvalue(value);
  };

  return (
    <Container maxW="container.xl" bg="green.400">
      <Flex direction={{ base: "column", lg: "row" }}>

        <SearchLatestBlocks />
        <Box w={{ base: "100%", lg: "50%" }}>
          <SearchSpesificBlock />


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
