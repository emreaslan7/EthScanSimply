import React from "react";
import {
  Box,
  Container,
  Flex,
} from "@chakra-ui/react";
import SearchSpesificBlock from "../../components/SearchSpesificBlock";
import SearchLatestBlocks from "../../components/SearchLatestBlocks";


function Blockchain() {
  

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
