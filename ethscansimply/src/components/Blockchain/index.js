import React from 'react'
import Link from 'next/link'
import { Box, Center, Text, Tooltip} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';


function Blockchain() {
  return (
    <Box>
    <Link href="/home" textDecoration="none">
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="450px" width="450px"
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
        borderRadius="md">

          <InfoIcon position="absolute" top="0" right="0" m={2} color="#9c8fd8"/>

      </Tooltip>
        
      <Text fontSize='3xl' letterSpacing="0.3em" ml={3} color="#9c8fd8" fontWeight="extrabold" textDecoration="none" textAlign={"center"}>
          BLOCKCHAIN STUFF
      </Text>


    </Box>
    </Link>
    </Box>
  )
}

export default Blockchain;