import { Box, Image, Text} from '@chakra-ui/react'
import React from 'react'

function ExternalAccount({Address}) {
  return (

  <Box position="relative" maxHeight="100vh">
    {/* account-head.png - Üst kenarın ortasında */}
    <Box position="absolute" top="0" left="50%" transform="translateX(-50%)">
      <Image src="/assets/account-head.png" minW={'300px'}/>
      <Box position="absolute" top="25%" left="50%" transform="translate(-50%, -50%)">
        <Text color={'black'}>{Address.addr}</Text>
      </Box>
    </Box>

    {/* account-right-circle.png - Ekranın soluna bitişik */}
    <Box position="fixed" bottom="4" left="0" >
      <Image src="/assets/account-right-circle.png" h={{base:'60vh', md:'85vh', lg:'95vh'}} w='auto'/>
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Text color={'black'}>{Address.balance}</Text>
      </Box>
    </Box>

    {/* account-left-circle.png - Ekranın sağına bitişik */}
    <Box position="fixed" top={{base:'32',md:"10"}} right="0" >
      <Image src="/assets/account-left-circle.png"  h={{base:'60vh', md:'85vh', lg:'95vh'}} w='auto'/>
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Text color={'black'}>{Address.nonce}</Text>
      </Box>
    </Box>
  </Box>

  
  )
}

export default ExternalAccount