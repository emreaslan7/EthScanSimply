import React, { useEffect } from 'react'
import { Blockchainquery } from '../../../ethers/blockchainquery';

function TxHash({ txhash }) {
  const bq = new Blockchainquery();
  const txHash = '0x2346878731ba7aa0882367d5434c7fef53a9e0a63209dde9d8416f2ca81ca8c3'; // işlem kimliği burada yer alacak
  useEffect(() => {
    async function fetchTxData(){
      const tx = await bq.getTransaction(txHash);
      console.log(tx);
    }
    fetchTxData();
  })

  return (
    <div>

      TxHash: {txhash}


    </div>
  )
}

export default TxHash;




export async function getServerSideProps(context) {
  const { txhash } = context.query;
  
  return {
    props: {
      txhash: txhash || [],
    },
  }
}  