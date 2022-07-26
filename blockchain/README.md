# Capita Blockchain Backend

This repository contains Capita Blockchain smart contract deployed on the Mumbai Testnet.

This project is intended to be used with the
[Hardhat Beginners Tutorial](https://hardhat.org/tutorial), but you should be
able to follow it by yourself by reading the README and exploring its
`contracts`, `tests`, `scripts` and `frontend` directories.

## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/arjundevn/capita-blockchain-backend.git
cd capita-blockchain-backend
npm install
```

Repeat the process to run the frontend with:

```sh
cd frontend
npm install
npm start
```

> Note: There's [an issue in `ganache-core`](https://github.com/trufflesuite/ganache-core/issues/650) that can make the `npm install` step fail. 
>
> If you see `npm ERR! code ENOLOCAL`, try running `npm ci` instead of `npm install`.

Open [http://localhost:3000/](http://localhost:3000/) to see your Dapp. You will
need to have [Metamask](https://metamask.io) installed and listening to
`Mumbai testnet`.


## User Guide

You can find detailed instructions on using this repository and many tips in [its documentation](https://hardhat.org/tutorial).

- [Writing and compiling contracts](https://hardhat.org/tutorial/writing-and-compiling-contracts/)
- [Setting up the environment](https://hardhat.org/tutorial/setting-up-the-environment/)
- [Testing Contracts](https://hardhat.org/tutorial/testing-contracts/)
- [Setting up Metamask](https://hardhat.org/tutorial/hackathon-boilerplate-project.html#how-to-use-it)
- [Hardhat's full documentation](https://hardhat.org/getting-started/)

For a complete introduction to Hardhat, refer to [this guide](https://hardhat.org/getting-started/#overview).

## What’s Included?

Your environment will have everything you need to build a Dapp powered by Hardhat and React.

- [Hardhat](https://hardhat.org/): An Ethereum development task runner and testing network.
- [Mocha](https://mochajs.org/): A JavaScript test runner.
- [Chai](https://www.chaijs.com/): A JavaScript assertion library.
- [ethers.js](https://docs.ethers.io/v5/): A JavaScript library for interacting with Ethereum.
- [Waffle](https://github.com/EthWorks/Waffle/): To have Ethereum-specific Chai assertions/mathers.
- [A sample frontend/Dapp](./frontend): A Dapp which uses [Create React App](https://github.com/facebook/create-react-app).

## Troubleshooting

- `Invalid nonce` errors: if you are seeing this error on the `npx hardhat node`
  console, try resetting your Metamask account. This will reset the account's
  transaction history and also the nonce. Open Metamask, click on your account
  followed by `Settings > Advanced > Reset Account`.

## APIs for Frontend

The primary contract has a Struct for handling indiviual projecs and all their attributes. Here are the details:

```solidity
Project {
  string projectURL;
  address erc20;
  uint numOfsecOwners;
  address[] secOwners;
  uint[] allocation;
  address payable owner;
  bool disbursed;
}
```
Based on the above here are the list of **APIs**:

**Read Functions**

 ```javascript
numOfProjects()
```
Returns the total number of registered projects

 ```javascript
getAllocation(int projectID)
```
Returns array of allocation set for that respective project ID

 ```javascript
getSecOwners(int projectID)
```
Returns array of owners' addresses set for that respective project ID

 ```javascript
projects(int projectID)
```
Returns
- Project URL (string)
- Address of the deployed ERC20 Token (string)
- Number of secondary owners (int)
- Owner Address (string)
- Disbursed (bool)

**Write Functions**

 ```javascript
createProject(
  string projectURL, 
  int numOfSecondaryOwners, 
  string array addressesOfSecondaryOwners, 
  int totalSupplyOfTokens,
  int tokenName
  int tokenSymbol
  )
```
No return data

```javascript
setAllocation(
  int projectID, 
  array int percentageAllocation
  )
```
No return data. To be called only by the owner of the project.

```javascript
disburse(int projectID)
```
No return data. To be called only by the owner of the project.
