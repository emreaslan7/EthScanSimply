import { ChakraProvider } from '@chakra-ui/react'
import Layouts from '../components/Layouts';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </ChakraProvider>
  )
}