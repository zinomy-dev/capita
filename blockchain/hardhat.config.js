require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path:__dirname+'/.env'})

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/dqFqjhoWwfYYTCZoj__HMztYBmQd2BH7",
      chainId: 80001,
      accounts: [`${process.env.DEPLOYER_PRIVATE_KEY}`]
    }
  },
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}
