require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const INFURA_PROJECT_ID = "";
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
console.log(mnemonic);

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      accounts: { mnemonic: mnemonic },
      allowUnlimitedContractSize: true,
    },
    ethereum: {
      url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: { mnemonic: mnemonic },
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: { mnemonic: mnemonic },
    },
    heco: {
      url: "https://http-mainnet.hecochain.com",
      accounts: { mnemonic: mnemonic },
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: { mnemonic: mnemonic },
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: { mnemonic: mnemonic },
    },
    hecotestnet: {
      url: "https://http-testnet.hecochain.com",
      accounts: { mnemonic: mnemonic },
    },
    mumbai: {
      // url: 'https://rpc-mumbai.maticvigil.com',
      url: "https://rpc-mumbai.matic.today",
      accounts: { mnemonic: mnemonic },
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  mocha: {
    timeout: 2000000,
  },
};
