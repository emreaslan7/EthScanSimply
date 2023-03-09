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
    const block = await this.provider.getBlock(Number(blockNumber));
    console.log(block);
    return block;
  }

  formatAddress(address) {
    if (!address) {
      return "";
    }
    return `${address.substring(0, 6)}....${address.substring(address.length -4)}`;
  }
}