import { Box, Table,Tbody, Tr, Th, Td, Center, Spinner} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Blockchainquery } from "../../ethers/blockchainquery";

const blockchain = new Blockchainquery();

function BlocksInfo(props) {

  const [block, setBlock] = useState(null);

  useEffect(() => {
    async function fetchBlockchainData() {
      const latestBlockNumber = await blockchain.getBlockNumber();

      const latestBlock = await blockchain.getBlock(
        latestBlockNumber - props.BlockNo
      );
      console.log(latestBlock)
      setBlock(latestBlock);
    }
    if(props.BlockNo !== null){
      fetchBlockchainData();
    }
  }, [props.BlockNo]);

  useEffect(() => {
    async function fetchBlockchainData() {
      let latestBlockNumber = await blockchain.getBlockNumber();
      if(latestBlockNumber < props.QueryBlockNo){
        const queryBlock = await blockchain.getBlock(latestBlockNumber);
        setBlock(queryBlock);
      }else{
        const queryBlock = await blockchain.getBlock(props.QueryBlockNo);
        setBlock(queryBlock);
      }     

    }
    if(props.QueryBlockNo !== null){
      fetchBlockchainData();
    }
  },[props.QueryBlockNo])
  
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
              <Th>Fee Recipient:</Th>
              <Td>{blockchain.formatAddress(block.miner)}</Td>
            </Tr>
            <Tr>
              <Th>Block hash:</Th>
              <Td>{blockchain.formatAddress(block.hash)}</Td>
            </Tr>
            <Tr>
              <Th>Gas limit:</Th>
              <Td>{Number(block.gasLimit)}</Td>
            </Tr>
            <Tr>
              <Th>Gas Used:</Th>
              <Td>{Number(block.gasUsed)}</Td>
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
