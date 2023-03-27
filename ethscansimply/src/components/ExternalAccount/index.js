import { Box, Image, Text, Icon} from '@chakra-ui/react'
import { FaEthereum } from 'react-icons/fa';
import React from 'react'

function ExternalAccount({Address}) {
  return (

  <Box position="relative" maxHeight="100vh">
    {/* account-head.png - Üst kenarın ortasında */}
    <Box position="absolute" top="0" left="50%" transform="translateX(-50%)">
      <Image src="/assets/account-head.png" minW={'300px'}/>
      <Box position="absolute" top="35%" left="50%" transform="translate(-50%, -50%)" color={'#9c8fd8'} fontWeight='extrabold' textAlign={'center'}>
        <Text color={'#9c8fd8'} fontSize={{base:'xl',md:'3xl',lg:'4xl'}} fontWeight='extrabold'>{Address.addr}</Text>
        <Text fontSize={{base:'xl',md:'3xl',lg:'4xl'}}  mt={2} >{Address.ensName}</Text>
      </Box>
    </Box>

    <Box position="fixed" bottom="4" left="0" >
      <Image src="/assets/account-right-circle.png" h={{base:'60vh', md:'85vh', lg:'95vh'}} w='auto'/>
      <Box position="fixed" bottom={{base:'28vh', md:'38vh', lg:'43vh'}} left="1" color={'#9c8fd8'} fontWeight='extrabold'>
        <Text fontSize={{base:'xl',md:'6xl',lg:'4xl'}}>Balance</Text>
        <Text fontSize={{base:'lg',md:'4xl',lg:'2xl'}} display='flex' alignItems={'center'}><Icon as={FaEthereum} boxSize={6}/>{Address.balance} ETH</Text>
      </Box>
    </Box>


    <Box position="fixed" top={{base:'32',md:"10"}} right="0" >
      <Image src="/assets/account-left-circle.png"  h={{base:'60vh', md:'85vh', lg:'95vh'}} w='auto'/>
      <Box position="fixed" top={{base:'42vh', md:'40vh', lg:'45vh'}} right="2" color={'#9c8fd8'} fontWeight='extrabold' textAlign={'end'}>
        <Text fontSize={{base:'xl',md:'6xl',lg:'4xl'}}>Tx Counter</Text>
        <Text fontSize={{base:'lg',md:'4xl',lg:'2xl'}}>{Address.nonce}</Text>
      </Box>
    </Box>
  </Box>

  
  )
}

export default ExternalAccount