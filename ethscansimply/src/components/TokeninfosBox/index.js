import React from 'react'
import Link from 'next/link'
import { Box, Text, Tooltip} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

function Tokeninfos() {
  return (
    <Box
    w={{ base: "300px", lg: "300px", xl: "350px"}}
    h={{ base: "300px", lg: "300px", xl: "350px"}}
    boxShadow='xl'>
    <Link href="/tokeninfos" textDecoration="none">
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
        label="adam mısın olm" 
        placement='top-end' 
        openDelay={300} closeDelay={500} 
        bg='#9c8fd8' 
        color='white'
        fontSize={'12px'}
        borderRadius="md">

          <InfoIcon boxSize={5} position="absolute" top="1" right="1" m={1} color="#9c8fd8"/>

      </Tooltip>
        
      
        <Text fontSize={{ base: '28px', xl:'32px'}} letterSpacing="0.3em" ml={3} color="#9c8fd8" fontWeight="extrabold" textDecoration="none" textAlign={"center"}>
          BLOCKCHAIN STUFF
        </Text>

    </Box>
    </Link>
    </Box>
  )
}

export default Tokeninfos;