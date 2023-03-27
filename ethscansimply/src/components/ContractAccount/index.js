import { Box, Text, Container, Center, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'



function MyTable({TransferLogs}) {
    console.log(TransferLogs);
    const [transferLogs, setTransferLogs] = useState(TransferLogs);

    useEffect(() => {
      async function updateLogs() {
        await new Promise(resolve => setTimeout(resolve, 7000)); // 5 saniye bekleyelim
        setTransferLogs(TransferLogs);
      }
      updateLogs();
    }, [TransferLogs]);
  

    return (
      <Table variant='striped' colorScheme='#9c8fd8'>
        <Thead>
          <Tr>
            <Th w={"33.33%"} textAlign={'center'}>From</Th>
            <Th w={"33.33%"} textAlign={'center'}>Amount</Th>
            <Th w={"33.33%"} textAlign={'center'}>To</Th>
          </Tr>
        </Thead>
        <Tbody>
        {transferLogs.map((log, index) => (
            
          <Tr key={index}>
            <Td>{log.formattedFrom}</Td>
            <Td textAlign={'center'}>{log.amount}</Td>
            <Td textAlign={'end'}>{log.formattedTo}</Td>
          </Tr>
        ))}
        </Tbody>
      </Table>
    );
}

function ContractAccount({Address}) {

  return (
    <Container maxW="container.lg">
      <Center
        fontSize={"5xl"}
        fontWeight="hairline"
        textAlign={"center"}
        lineHeight={"1em"}
        py={6}
        mb={{base:'0', md:'6'}}
      >
        Contract Informations
      </Center>
      <Box
        display={{ base: "block", md: "flex" }}
        justifyContent="space-between"
        w="100%"
        gap={1}
      >
        <Box
          p={3}  
          bg="#9c8fd8"
          border={'1px solid #a5fdf5'}
          borderRadius="lg"
          boxShadow="md"
          transition="transform 0.4s ease-in-out"
          _hover={{ transform: "scale(1.25)" }}
          textAlign='center'
          mb={2}
        >
          <Text>Contract Name:</Text>
          <Text>{Address.name}</Text>
        </Box>
        <Box
          p={3} 
          bg="#9c8fd8"
          border={'1px solid #a5fdf5'}
          borderRadius="lg"
          boxShadow="md"
          transition="transform 0.4s ease-in-out"
          _hover={{ transform: "scale(1.25)" }}
          textAlign='center'
          mb={2}
        >
          <Text>Symbol:</Text>
          <Text>{Address.symbol}</Text>
        </Box>
        <Box
          p={3} 
          bg="#9c8fd8"
          border={'1px solid #a5fdf5'}
          borderRadius="lg"
          boxShadow="md"
          transition="transform 0.4s ease-in-out"
          _hover={{ transform: "scale(1.25)" }}
          textAlign='center'
          mb={2}
        >
          <Text>Max Total Supply:</Text>
          <Text>{Address.totalSupply}</Text>
        </Box>
        <Box
          p={3} 
          bg="#9c8fd8"
          border={'1px solid #a5fdf5'}
          borderRadius="lg"
          boxShadow="md"
          transition="transform 0.4s ease-in-out"
          _hover={{ transform: "scale(1.25)" }}
          textAlign='center'
          mb={2}
        >
          <Text>Decimals:</Text>
          <Text>{Address.decimals}</Text>
        </Box>
        <Box
          p={3} 
          bg="#9c8fd8"
          border={'1px solid #a5fdf5'}
          borderRadius="lg"
          boxShadow="md"
          transition="transform 0.4s ease-in-out"
          _hover={{ transform: "scale(1.25)" }}
          textAlign='center'
          mb={2}
        >
          <Text>Balance:</Text>
          <Text>{Address.balance}</Text>
        </Box>
      </Box>
      <Text mt={9} fontWeight="hairline" fontSize={'3xl'}>Last {Address.symbol} Transfers</Text>
      <MyTable TransferLogs={Address.transferLogs}/>
    </Container>
  );
}

export default ContractAccount

// transferLogs: transferLogs,
// name: contractName,
// symbol: contractSymbol,
// totalSupply: contractTotalSupply,
// owner: contractOwner,
// balance: contractBalance