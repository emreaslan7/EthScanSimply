import React, { useState, useEffect } from 'react';
import { Blockchainquery } from "../../ethers/blockchainquery";

const blockchain = new Blockchainquery();

function Blockchain() {
  const [blockNumber, setBlockNumber] = useState(null);
  const [block, setBlock] = useState(null);

  useEffect(() => {
    async function fetchBlockchainData() {
      const latestBlockNumber = await blockchain.getBlockNumber();
      const latestBlock = await blockchain.getBlock(latestBlockNumber);
      setBlockNumber(latestBlockNumber);
      setBlock(latestBlock);

    }
    fetchBlockchainData();
  }, []);

  return (
    <div>
      {/* <h1>Son blok numarası: {blockNumber}</h1>
      {block && (
        <div>
          <h2>Blok bilgileri</h2>
          <ul>
            <li>Blok numarası: {block.number}</li>
            <li>Blok hash'i: {block.hash}</li>
            <li>Gas limiti: {block.gasLimit.toString()}</li>
            <li>Gas kullanımı: {block.gasUsed.toString()}</li>
            <li>Blok oluşum tarihi: {new Date(block.timestamp * 1000).toLocaleString()}</li>
          </ul>
        </div>
      )} */}
    </div>
  )
}
export default Blockchain;