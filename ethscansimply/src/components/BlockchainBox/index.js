import React from 'react'
import Link from 'next/link'
import { Box, Text, Tooltip} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';


function Blockchain() {
  return (
    <Box 
    w={{ base:"300px", lg: "300px", xl: "350px"}}
    h={{ base:"300px", lg: "300px", xl: "350px"}}
    justify-self="start" boxShadow='xl'
    >
    <Link href="/blockchain" textDecoration="none">
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%" width="100%"
      borderRadius="xl"
      borderWidth="4px"
      borderColor="#9c8fd8"
      bg="#cec3fa"
      boxShadow="2xl"
      transition="all 0.2s ease-in-out"
      position="relative"
    >

      <Tooltip 
        hasArrow 
        label="Let's look at everything of ethereum blocks" 
        placement='top-end' 
        openDelay={300} closeDelay={400} 
        bg='#9c8fd8' 
        color='white'
        fontSize={'16px'}
        borderRadius="md">

          <InfoIcon boxSize={6} position="absolute" top="1" right="1" m={1} color="#9c8fd8"/>

      </Tooltip>
        
      <Text fontSize={{ base: '28px', xl:'32px'}} letterSpacing="0.3em" ml={3} color="#9c8fd8" fontWeight="extrabold" textDecoration="none" textAlign={"center"}>
          BLOCKCHAIN STUFF
      </Text>


    </Box>
    </Link>
    </Box>
  )
}

export default Blockchain;