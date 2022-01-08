// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Multisend = await hre.ethers.getContractFactory("Multisend");
  const multisend = await Multisend.deploy();

  await multisend.deployed();
  console.log("multisend deployed to:", multisend.address);
  await hre.run("verify:verify", {
    address: multisend.address,
    constructorArguments: [],
  });
}

async function verify() {
  const addr = "0x83cC30e1E5f814883B260CE32A2a13D3493E5439";
  const multisend = await hre.ethers.getContractAt("Multisend", addr);
  await hre.run("verify:verify", {
    address: multisend.address,
    constructorArguments: [],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

verify().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
