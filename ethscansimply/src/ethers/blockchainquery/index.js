import { ContractFactory, ethers, toBigInt } from "ethers";
import { type } from "os";

export class Blockchainquery {
  constructor() {
    this.provider = new ethers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
    );
  }

  async getBlockNumber() {
    const blockNumber = await this.provider.getBlockNumber();
    return blockNumber;
  }

  async getBlock(blockNumber) {
    const block = await this.provider.getBlock(Number(blockNumber));
    return block;
  }

  formatAddress(address) {
    if (!address) {
      return "";
    }
    return `${address.substring(0, 6)}....${address.substring(
      address.length - 4
    )}`;
  }


  async getTransaction(txHash) {
    // getTransactionReceipt() kullanarak logları al
    const contractAddress = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
    const contractABIerc20=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
    const contract = new ethers.Contract(contractAddress, contractABIerc20, this.provider);

    console.log(contract);
    this.provider
      .getTransactionReceipt(txHash)
      .then((receipt) => {
        
        // Transaction'da log var mı yok mu kontrol et
        if (receipt.logs.length > 0) {
          // Her bir log için, olayın adı ve parametrelerini yazdır
          receipt.logs.forEach((log) => {
            const event = contract.interface.parseLog(log);
     
            // console.log(event);
            if(event != null){
              console.log("Event Name:", event.name);
              console.log("Event from:", event.args[0]);
              console.log("Event to:", event.args[1]);
              console.log("Event amount:", event.args[2]);
            }

          });
        } else {
          console.log("Transaction does not contain any logs.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
