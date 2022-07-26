// This is a script for deploying your contracts. You can adapt it to deploy

const { artifacts } = require("hardhat");

// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();
  console.log("\nToken address:", token.address);

  //Repeating the above code for multisig contract
  const Capita = await ethers.getContractFactory("Capita");
  const capita = await Capita.deploy();
  await capita.deployed();
  console.log("\nCapita address:", capita.address);

  // We also save the contract's artifacts and address in the frontend directory
  // saveFrontendFiles(token);
  // saveFrontendFiles();


// function saveFrontendFiles() {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }
// }


  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ Token: token.address, Capita: capita.address }, undefined, 2),
  //   JSON.stringify({ Capita: capita.address }, undefined, 2)
  );
  
  const TokenArtifact = artifacts.readArtifactSync("Token");
  const CapitaArtifact = artifacts.readArtifactSync("Capita");
  
  fs.writeFileSync(
    contractsDir + "/Token.json",
    JSON.stringify(TokenArtifact, null, 2)
  );

  fs.writeFileSync(
    contractsDir + "/Capita.json",
    JSON.stringify(CapitaArtifact, null, 2)
  );
  }
  
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
