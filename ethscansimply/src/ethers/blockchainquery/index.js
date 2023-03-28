import { ethers, toBigInt } from "ethers";

export class Blockchainquery {
  constructor() {
    this.provider = new ethers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
    );
  }

  formatAddress(address) {
    if (!address) {
      return "";
    }
    return `${address.substring(0, 6)}....${address.substring(
      address.length - 4
    )}`;
  }

  isAddr(add){
    return ethers.isAddress(add);
  }

  async isContractAcc(address){
    const isContract = await this.provider.getCode(address);
    return isContract;
  }

  async getBlockNumber() {
    const blockNumber = await this.provider.getBlockNumber();
    return blockNumber;
  }

  async getBlock(blockNumber) {
    const block = await this.provider.getBlock(Number(blockNumber));
    return block;
  }

  async getAccountDetails(address){
    const balanceBigNumber = await this.provider.getBalance(address);
    const balanceValue = ethers.formatEther(balanceBigNumber);
    const balance = Math.round(balanceValue * 1000) / 1000;
    const nonce = await this.provider.getTransactionCount(address);

    const ensName = await this.provider.lookupAddress(address);
    const formattedAddres = this.formatAddress(address)
    return {addr: formattedAddres, balance: balance, nonce: nonce, ensName: ensName}

  }

  async getContractDetails(address) {
    try {
      const daiAbi = [
        // Some details about the token
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function decimals() view returns (uint8)",
      
        // Get the account balance
        "function balanceOf(address) view returns (uint)",
      
        // An event triggered whenever anyone transfers to someone else
        "event Transfer(address indexed from, address indexed to, uint amount)",
      
        // Get the total supply of tokens
        "function totalSupply() view returns (uint)",

        // Get the owner of the contract
        "function owner() view returns (address)"
      ];
      
      // Contract Instance
      const contractInstance = new ethers.Contract(address, daiAbi, this.provider);
  
      // Contract Name
      const contractName =  await contractInstance.name();
  
      // Contract Symbol
      const contractSymbol =  await contractInstance.symbol();
  
      // Contract Total Supply
      const totalSupplyBigInt = await contractInstance.totalSupply();
      const contractTotalSupply = totalSupplyBigInt.toLocaleString();

      // Decimal
      const decimalValue = await contractInstance.decimals();
      const decimal = decimalValue.toString();
  
      // Contract Balance
      const contractBalanceBigInt = await this.provider.getBalance(address);
      const contractBalance = contractBalanceBigInt.toLocaleString();

      return {
        contractInstance: contractInstance,
        name: contractName,
        symbol: contractSymbol,
        totalSupply: contractTotalSupply,
        decimals: decimal,
        balance: contractBalance
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getContractsEvents(contractInstance){
    // events

    const transferLogs = [];
    await contractInstance.on("Transfer", (from, to, _amount, event) => {
      const formattedFrom = this.formatAddress(from);
      const formattedTo = this.formatAddress(to);
      function formatAmount(_amount) {
        const parts = amount.toString().split('.');
        let formattedAmount = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (parts[1]) {
          formattedAmount += '.' + (parts[1].length === 1 ? parts[1] + '0' : parts[1]);
        } else {
          formattedAmount += '.00';
        }
        console.log(formattedAmount);
      }
      formatAmount(_amount);


      const amount = _amount.toLocaleString();
      const transferLog = { formattedFrom, formattedTo, amount, event };
      transferLogs.push(transferLog);

      setTimeout( () => {
        event.removeListener();
        console.log("stopped");
      }, 5000);
    });
    while (transferLogs.length === 0) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  
    return transferLogs;
  }
  

  async getTransferDetails(txHash) {
    
    // ERC-20 contract address and ABI
    const contractAddressErc20 = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
    const contractABIerc20 = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
    const contractErc20 = new ethers.Contract(contractAddressErc20, contractABIerc20, this.provider);
  
    // ERC-721 contract address and ABI
    const contractAddressErc721 = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D';
    const contractABIerc721 = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"maxNftSupply","type":"uint256"},{"internalType":"uint256","name":"saleStart","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BAYC_PROVENANCE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_APES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVEAL_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"apePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencySetStartingIndexBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxApePurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mintApe","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveApes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"revealTimeStamp","type":"uint256"}],"name":"setRevealTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setStartingIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startingIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startingIndexBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const contractErc721 = new ethers.Contract(contractAddressErc721, contractABIerc721, this.provider);
  
    // Get the transaction receipt using the transaction hash
    const receipt = await this.provider.getTransactionReceipt(txHash);
    const block = await this.provider.getBlock(receipt.blockNumber);

    // Check if there are any logs in the transaction receipt
    if (receipt.logs.length > 0) {

    const date = new Date(block.timestamp * 1000).toLocaleString()
    const fee = ethers.formatEther(receipt.gasUsed*receipt.gasPrice);
    let metadata = null;

    try{
      const log = receipt.logs.find(log => {
        try {
          const event = contractErc721.interface.parseLog(log);
          return (event.name === "Transfer" && Number(event.args[2]) < 100000);
        } catch (err) {
          return false;
        }
    });

    // Parse the event from the log using the ERC-721 contract interface
    const event = contractErc721.interface.parseLog(log);
      
    // Get the transfer details from the event logs
    const from = event.args[0];
    const to = event.args[1];
    const tokenId = event.args[2].toString();
    const contractAddress = log.address;
      
    let img = '';
    if(from === "0x0000000000000000000000000000000000000000"){
      img = 'mint'
      const NFTcontract = new ethers.Contract(receipt.to, contractABIerc721, this.provider);
      metadata = await NFTcontract.tokenURI(tokenId);
    }else{
      img = 'erc721transfer'
      const NFTcontract = new ethers.Contract(contractAddress, contractABIerc721, this.provider);
      metadata = await NFTcontract.tokenURI(tokenId);
    }
      
    return {receipt: receipt, img: img, fee:fee,date:date, from: from,to: to, tokenId: tokenId, metadata: metadata};

    }
    catch(err) {
      const log = receipt.logs.find(log => {
        try {
          const event = contractErc20.interface.parseLog(log);
          return (event.name === "Transfer");
        } catch (err) {
          return false;
        }
    });

    // Parse the event from the log using the ERC-20 contract interface
    const event = contractErc20.interface.parseLog(log);

    return{receipt: receipt,img:'erc20transfer',  name: event.name, fee: fee,date:date, from: event.args[0], to: event.args[1], amount: event.args[2].toString(),metadata:metadata}
    }
  } else {
    console.log("Transaction does not contain any logs.");
  }
  }
  
}
