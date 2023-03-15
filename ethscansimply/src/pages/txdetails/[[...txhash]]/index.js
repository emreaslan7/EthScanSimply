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
import SearchSpesificBlock from "../../../components/SearchSpesificBlock";
import MetadataImage from "../../../components/MetadataImage";

function TxHash({ txhash }) {
  const blockchain = new Blockchainquery();

  const txHashmint =
    "0xe847109ab6cbbac8a27990236cb173a35b3f13dedc8b35562531a7dfad10d14e";
  const txHasherc721 =
    "0xd13eace6587f3cf0cbb6ba31a6482396e669e368e5f37f33a8135fc4f63e456c";
  const txHasherc20 =
    "0xe59f83e4ef8e1aea9bb6fec94dff30eb4dc035b2435c56882080310f2372591d";

  const [tx, setTx] = useState(null);

  useEffect(() => {
    async function fetchTxData() {
      const tx = await blockchain.getTransferDetails(txHashmint);
      
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
          <Box w={{ base: "100%", lg: "50%" }}>
            <MetadataImage Metadata={tx.metadata}/>
            Metadata verileri gelecek;
            Skeleton konulacak;
            Sayfalar arasi geçişte bekleme;
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
