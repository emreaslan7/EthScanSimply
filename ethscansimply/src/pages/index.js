import Head from 'next/head'
import { Inter } from '@next/font/google'
import {Grid} from '@chakra-ui/react'
import BlockchainBox from '../components/BlockchainBox'
import TxdetailsBox from '../components/TxdetailsBox'
import AccountsBox from '../components/AccountsBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ETHScanSimply</title>
        <meta name="description" content="scan ethereum blockchain easily for new learner and kids" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' href='/ethereum-icon.png' />
      </Head>

      <div style={{ display: "flex", justifyContent: "center", height:"100%", backgroundColor:"#fcfcfc"}}>


      <Grid 
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)",}}
      gap={{ base: 4, sm: 6, lg: 8, xl: 11, "2xl": 20,}}
      justifyContent="center"
      alignItems="center"
      backgroundColor={'#fcfcfc'}>

        <AccountsBox/>

        <BlockchainBox/>
      
        <TxdetailsBox/>
      
        
      
      </Grid>
      </div>






    </>
  )
}
