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
  Container,
} from "@chakra-ui/react";
import { Blockchainquery } from "../../../ethers/blockchainquery";
import MetadataImage from "../../../components/MetadataImage";
import TxDetailsSkeleton from "../../../components/TxDetailsSkeleton";

function TxHash({ txhash }) {
  const blockchain = new Blockchainquery();
  const [tx, setTx] = useState(null);

  useEffect(() => {
    async function fetchTxData() {
      const tx = await blockchain.getTransferDetails(txhash[0]);
      setTx(tx);
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
            {tx.metadata ? (
              <Box w={{ base: "100%", lg: "90%" }}>
                <MetadataImage Metadata={tx.metadata} />
              </Box>
            ) : (
              <Box></Box>
            )}
          </Flex>
        </Box>
      ) : (
        <TxDetailsSkeleton />
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
