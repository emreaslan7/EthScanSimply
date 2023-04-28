import { Box, Text } from '@chakra-ui/react'
import React from 'react'
// import Ticker from 'react-ticker';

function Header() {
  return (
    <Box p='2' bg={'gray.900'} color={'white'}>
          <Box>
      {/* <Ticker speed={5}>
        {({ index }) => (
          <Text mx={3} noOfLines={1} >
              ETHScanSimply: An easy-to-use interface for exploring Ethereum. Ideal for beginners and kids!
          </Text>
        )}
      </Ticker> */}
    </Box>
    </Box>
  )
}

export default Header