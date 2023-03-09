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

  const { isOpen, onToggle } = useDisclosure();


  const [value, setValue] = useState();
  const [blockvalue, setblockvalue] = useState("");

  const handleButtonClick = () => {
    setblockvalue(value);
  };

  return (
    <Container maxW="container.xl">
      <Flex direction={{ base: "column", lg: "row" }}>

        <SearchLatestBlocks />
        <Box w={{ base: "100%", lg: "50%" }}>
          <SearchSpesificBlock />


        </Box>


      </Flex>
    </Container>
  );
}
export default Blockchain;
