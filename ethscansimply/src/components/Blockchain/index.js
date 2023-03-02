import React from 'react'
import Link from 'next/link'
import { Box, Text, Tooltip} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';


function Blockchain() {
  return (
    <Box 
    w={{ base:"300px", lg: "300px", xl: "400px", "2xl": "450px"}}
    h={{ base:"300px", lg: "300px", xl: "400px", "2xl": "450px" }}
    justify-self="start">
    <Link href="/home" textDecoration="none">
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%" width="100%"
      borderRadius="xl"
      borderWidth="4px"
      borderColor="#9c8fd8"
      bg="#cec3fa"
      boxShadow="xl"
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
        fontSize={'22px'}
        borderRadius="md">

          <InfoIcon boxSize={6} position="absolute" top="1" right="1" m={2} color="#9c8fd8"/>

      </Tooltip>
        
      <Text fontSize={{ base: '28px', xl:'36px', '2xl':'40px'}} letterSpacing="0.3em" ml={3} color="#9c8fd8" fontWeight="extrabold" textDecoration="none" textAlign={"center"}>
          BLOCKCHAIN STUFF
      </Text>


    </Box>
    </Link>
    </Box>
  )
}

export default Blockchain;