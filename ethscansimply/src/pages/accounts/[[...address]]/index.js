import { Box } from '@chakra-ui/react';
import React, {useState,useEffect} from 'react'
import ExternalAccount from '../../../components/ExternalAccount';
import { Blockchainquery } from "../../../ethers/blockchainquery";

function Accounts({address}) {
  const blockchain = new Blockchainquery();
  const [add, setAdd] = useState(null);
  
  useEffect(() => {
    
    async function fetchAddressData() {
      const data = blockchain.isContractAcc(address[0]);
      
      if(data === '0x'){
        setAdd(address[0]);
      }else{
        const addressInfo = await blockchain.getAccountDetails(address[0]);
        setAdd(addressInfo);
      }

      
    }
    fetchAddressData();
  }, []);
  {console.log('redas')}
  return (
    
    <Box>
    {add ? (
      <Box>
        <ExternalAccount Address={add}/>
      </Box>
      ) : (
      <Box>
        dasdasdsadfadsffff 
      </Box>)}   
    </Box>
  )
}

export default Accounts;

export async function getServerSideProps(context) {
  const { address } = context.query;

  return {
    props: {
      address: address || "",
    },
  };
}