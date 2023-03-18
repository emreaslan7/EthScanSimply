import React from 'react';
import { Box, Skeleton,Flex,Table,Tbody,Tr,Th, Td } from '@chakra-ui/react';

function TxDetailsSkeleton() {
  return (
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
  )
}

export default TxDetailsSkeleton;