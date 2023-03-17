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
  Skeleton
} from "@chakra-ui/react";
import { Blockchainquery } from "../../../ethers/blockchainquery";
import MetadataImage from "../../../components/MetadataImage";

function TxHash({ txhash }) {
  const blockchain = new Blockchainquery();

  const txHashmint =
    "0xa688da92b6ede08f5e2a12fd1f42cd850eac3a1a3e8512aeda5d297d44ba35c3";
  const txHasherc721 =
    "0x731269fa23532f3fc1c602f31cd74c1a4b3367a737ebe8e2ca838703f5823898";
  const txHasherc20 =
    "0x9483fb3aa654246be2533afc8e08fd9c8106c8af1e7397445975c1234cc2c308";

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
        <Box>
        <Box display={"flex"} justifyContent="center" mt={2}>
        <Skeleton h="250px" w={"500px"}/>
        </Box>  
        
        <Flex direction={{ base: "column", lg: "row" }}>
          <Table size={"sm"} variant="simple" mt={10}>
            <Tbody>
              <Tr>
                <Th py={3}>
                  <Skeleton height={"20px"} width={"100px"} />
                </Th>
                <Td>
                  <Skeleton height={"20px"} width={"300px"} />
                </Td>
              </Tr>
              <Tr>
                <Th py={3}>
                  <Skeleton height={"20px"} width={"100px"} />
                </Th>
                <Td>
                  <Skeleton height={"20px"} width={"300px"} />
                </Td>
              </Tr>
              <Tr>
                <Th py={3}>
                  <Skeleton height={"20px"} width={"100px"} />
                </Th>
                <Td>
                  <Skeleton height={"20px"} width={"300px"} />
                </Td>
              </Tr>
              <Tr>
                <Th py={3}>
                  <Skeleton height={"20px"} width={"100px"} />
                </Th>
                <Td>
                  <Skeleton height={"20px"} width={"300px"} />
                </Td>
              </Tr>
              <Tr>
                <Th py={3}>
                  <Skeleton height={"20px"} width={"100px"} />
                </Th>
                <Td>
                  <Skeleton height={"20px"} width={"300px"} />
                </Td>
              </Tr>
              <Tr>
                <Th py={3}>
                  <Skeleton height={"20px"} width={"100px"} />
                </Th>
                <Td>
                  <Skeleton height={"20px"} width={"300px"} />
                </Td>
              </Tr>
              <Tr>
                <Th py={3}>
                  <Skeleton height={"20px"} width={"100px"} />
                </Th>
                <Td>
                  <Skeleton height={"20px"} width={"300px"} />
                </Td>
              </Tr>
              <Tr>
                <Th py={3}>
                  <Skeleton height={"20px"} width={"100px"} />
                </Th>
                <Td>
                  <Skeleton height={"20px"} width={"300px"} />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Box>
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
