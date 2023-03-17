import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Center,
  Spinner,
  Container,
  TableContainer,
} from "@chakra-ui/react";
import { Blockchainquery } from "../../../ethers/blockchainquery";
import MetadataImage from "../../../components/MetadataImage";

function TxHash({ txhash }) {
  const blockchain = new Blockchainquery();

  const txHashmint =
    "0xa688da92b6ede08f5e2a12fd1f42cd850eac3a1a3e8512aeda5d297d44ba35c3";
  const txHasherc721 =
    "0xd3d20790ec50eb9fa7be4ec406a41f2c3b0f1d64b7b110eb9ba5e0af4eb015c5";
  const txHasherc20 =
    "0xe59f83e4ef8e1aea9bb6fec94dff30eb4dc035b2435c56882080310f2372591d";

  const [tx, setTx] = useState(null);

  useEffect(() => {
    async function fetchTxData() {
      const tx = await blockchain.getTransferDetails(txHasherc721);
      
      setTx(tx);
      console.log(tx);
    }
    fetchTxData();
  }, []);
  


  return (
    <Container maxW={"container.xl"}>
      {tx ? (
        <Box>
          <Box display={"flex"} justifyContent="center">
            <Image
              src={`/assets/${tx.img}.png`}
              objectFit="cover"
              w={{ base: "full", md: "500px" }}
            />
          </Box>
          <Flex direction={{ base: "column", lg: "row" }}>

          <Table size={"sm"} variant="simple">
            <Tbody>
              <Tr>
                <Th py={3}>From:</Th>
                <Td>{blockchain.formatAddress(tx.from)}</Td>
              </Tr>
              <Tr>
                <Th py={3}>To:</Th>
                <Td>{blockchain.formatAddress(tx.to)}</Td>
              </Tr>
              {tx.img === "erc20transfer" ? (
                <Tr>
                  <Th py={3}>Amount:</Th>
                  <Td>{tx.amount}</Td>
                </Tr>
              ) : (
                <Tr>
                  <Th py={3}>Token Id:</Th>
                  <Td>{tx.tokenId}</Td>
                </Tr>
              )}
              <Tr>
                <Th py={3}>Fee:</Th>
                <Td>{tx.fee} ETH</Td>
              </Tr>
              <Tr>
                <Th py={3}>Block No:</Th>
                <Td>{tx.receipt.blockNumber}</Td>
              </Tr>
              <Tr>
                <Th py={3}>Block hash:</Th>
                <Td>{blockchain.formatAddress(tx.receipt.blockHash)}</Td>
              </Tr>
              <Tr>
                <Th py={3}>Tx Hash:</Th>
                <Td>{blockchain.formatAddress(tx.receipt.hash)}</Td>
              </Tr>
              <Tr>
                <Th py={3}>Index:</Th>
                <Td>{tx.receipt.index}</Td>
              </Tr>
              <Tr>
                <Th py={3}>Date:</Th>
                <Td>{tx.date}</Td>
              </Tr>
            </Tbody>
          </Table>
          <Box w={{ base: "100%", lg: "90%" }}>
            <MetadataImage Metadata={tx.metadata}/>
          </Box>
          </Flex>

        </Box>
      ) : (
        <Box>sda</Box>
      )}
    </Container>
  );
}

export default TxHash;

export async function getServerSideProps(context) {
  const { txhash } = context.query;

  return {
    props: {
      txhash: txhash || [],
    },
  };
}
