import { Box } from '@chakra-ui/react';
import React, {useState,useEffect} from 'react'
import ContractAccount from '../../../components/ContractAccount';
import ExternalAccount from '../../../components/ExternalAccount';
import { Blockchainquery } from "../../../ethers/blockchainquery";

function Accounts({address}) {
  const blockchain = new Blockchainquery();
  const [add, setAdd] = useState(null);
  const [data, setData] = useState('0X');
  
  useEffect(() => {
    
    async function fetchAddressData() {
      const data = await blockchain.isContractAcc(address[0]);
      setData(data);
    
      if(data === '0x'){
        console.log('account address',address[0])
        const addressInfo = await blockchain.getAccountDetails(address[0]);
        setAdd(addressInfo);
      }else{
        console.log('contract address',address[0])
        const addressInfo = await blockchain.getContractDetails(address[0]);
        console.log(addressInfo);
        setAdd(addressInfo);
      }

      
    }
    fetchAddressData();
  }, []);
  return (
    
        <Box>

      {add && data === '0x' ? (
        <ExternalAccount Address={add} />
      ) : add && data !== '0x' ? (
        <ContractAccount Address={add} />
      ) : (
        <Box>
          loading...
        </Box>
      )}
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