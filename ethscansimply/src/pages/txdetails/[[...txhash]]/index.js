import React from 'react'

function TxHash({ txhash }) {

  return (
    <div>TxHash: {txhash}</div>
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