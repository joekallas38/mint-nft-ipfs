const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main(){

  const metadataURL = "ipfs://QmUFaqUD8ojPExuXPNJ3Tm53PZVLSe7eiopgCfywgFvq3R/";

  const abstractArtContract = await ethers.getContractFactory("AbstractArt");
  const deployedAbstractArtContract = await abstractArtContract.deploy(metadataURL);
  await deployedAbstractArtContract.deployed();

  console.log("Abstract art contract address:", deployedAbstractArtContract.address);

}

main().then(() => process.exit(0))
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });