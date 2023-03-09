import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Center, Spinner} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Blockchainquery } from "../../ethers/blockchainquery";

const blockchain = new Blockchainquery();

function BlocksInfo(props) {
  console.log(props);
  const [block, setBlock] = useState(null);

  useEffect(() => {
    async function fetchBlockchainData() {
      const latestBlockNumber = await blockchain.getBlockNumber();
      const latestBlock = await blockchain.getBlock(
        latestBlockNumber - props.BlockNo
      );
      setBlock(latestBlock);
    }
    fetchBlockchainData();
  }, [props.BlockNo]);

  return (
    <Box p="4">
      {block ? (
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Th>Block No:</Th>
              <Td>{block.number}</Td>
            </Tr>
            <Tr>
              <Th>Block miner:</Th>
              <Td>{blockchain.formatAddress(block.miner)}</Td>
            </Tr>
            <Tr>
              <Th>Block hash:</Th>
              <Td>{blockchain.formatAddress(block.hash)}</Td>
            </Tr>
            <Tr>
              <Th>Gas limit:</Th>
              <Td>{block.gasLimit.toString()}</Td>
            </Tr>
            <Tr>
              <Th>Gas Used:</Th>
              <Td>{block.gasUsed.toString()}</Td>
            </Tr>
            <Tr>
              <Th>Date:</Th>
              <Td>{new Date(block.timestamp * 1000).toLocaleString()}</Td>
            </Tr>
            <Tr>
              <Th>Transaction:</Th>
              <Td>{block.transactions.length}</Td>
            </Tr>
          </Tbody>
        </Table>
      ) : (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#9c8fd8"
            size="xl"
          />
        </Center>
      )}
    </Box>
  );
}

export default BlocksInfo;
