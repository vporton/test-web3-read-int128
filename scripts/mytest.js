// We require the Buidler Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `buidler run <script>` you'll find the Buidler
// Runtime Environment's members available in the global scope.
const bre = require("@nomiclabs/buidler");

async function main() {
  // Buidler always runs the compile task when running scripts through it. 
  // If this runs in a standalone fashion you may want to call compile manually 
  // to make sure everything is compiled
  // await bre.run('compile');

  // We get the contract to deploy
  const Files = await ethers.getContractFactory("Files");
  const files = await Files.deploy();

  await files.deployed();

  console.log("Files deployed to:", files.address);

  const FilesRelayer = await ethers.getContractFactory("FilesRelayer");
  const deployResult = await FilesRelayer.deploy(files.address);
  if (deployResult.newlyDeployed) {
    console.log(`contract FilesRelayer deployed at ${deployResult.address} in block ${deployResult.receipt.blockNumber} using ${deployResult.receipt.gasUsed} gas`);
  }

  console.log("web3 version:", web3.version);
//  const interface = [{inputs: [], name: "arToETHCoefficient", outputs: [{internalType: "int128", name: "", type: "int128"}], stateMutability: "view", type: "function"}]
  const interface = JSON.parse(require('fs').readFileSync('artifacts/Files.json')).abi;
  contractInstance = new web3.eth.Contract(interface, deployResult.address);
  console.log(await contractInstance.methods.arToETHCoefficient().call());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
