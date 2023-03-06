import { ethers } from "ethers";

export class Blockchainquery {
  constructor() {
    this.provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);
  }

  async getBlockNumber() {
    const blockNumber = await this.provider.getBlockNumber();
    return blockNumber;
  }

  async getBlock(blockNumber) {
    const block = await this.provider.getBlock(blockNumber);
    return block;
  }
}