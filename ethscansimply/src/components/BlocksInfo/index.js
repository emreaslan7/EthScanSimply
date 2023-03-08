import { Box } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import { Blockchainquery } from "../../ethers/blockchainquery";


const blockchain = new Blockchainquery();

function BlocksInfo(props) {

  const [block, setBlock] = useState(null);

  useEffect(() => {
    async function fetchBlockchainData() {
      const latestBlockNumber = await blockchain.getBlockNumber();
      const latestBlock = await blockchain.getBlock(latestBlockNumber-props.BlockNo);
      setBlock(latestBlock);
    }
    fetchBlockchainData();
  }, []);

  return (
    <Box>
        
        {block && (
        <div>
            <h1>Blok numarası: {block.number}</h1>
          <h2>Blok bilgileri</h2>
          <ul>
            <li>Blok numarası: {block.number}</li>
            <li>Blok hash'i: {block.hash}</li>
            <li>Gas limiti: {block.gasLimit.toString()}</li>
            <li>Gas kullanımı: {block.gasUsed.toString()}</li>
            <li>Blok oluşum tarihi: {new Date(block.timestamp * 1000).toLocaleString()}</li>
          </ul>
        </div>
      )}
    </Box>
  )
}

export default BlocksInfo;