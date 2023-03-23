import { Box, Image, Flex} from '@chakra-ui/react'
import React from 'react'

function ExternalAccount({Address}) {
  return (

        <Box position="relative" maxHeight="100vh">
          {/* account-head.png - Üst kenarın ortasında */}
          <Box position="absolute" top="0" left="50%" transform="translateX(-50%)">
            <Image src="/assets/account-head.png" />
          </Box>
    
          {/* account-left-circle.png - Ekranın sağına bitişik */}
          <Box position="absolute" top="50%" right="0" transform="translateY(0)">
            <Image src="/assets/account-left-circle.png" w="350px" h="auto"/>
          </Box>
    
          {/* account-right-circle.png - Ekranın soluna bitişik */}
          <Box position="absolute" top="50%" left="0" transform="translateY(0%)">
            <Image src="/assets/account-right-circle.png" w="350px" h="auto"/>
          </Box>
        </Box>
  
  )
}

export default ExternalAccount