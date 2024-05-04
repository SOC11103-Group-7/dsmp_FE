const fs = require('fs');
const { ethers } = require('hardhat');
async function main() {
  const [deployer, user1] = await ethers.getSigners();
  // We get the contract factory to deploy
  const NexusHubFactory = await ethers.getContractFactory("NexusHub");
  // Deploy contract
  const NexusHub = await NexusHubFactory.deploy();
  // Save contract address file in project
  const contractsDir = __dirname + "/../src/contractsData";
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/nexushub-address.json`,
    JSON.stringify({ address: NexusHub.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync("NexusHub");

  fs.writeFileSync(
    contractsDir + `/nexushub.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
  console.log("NexusHub deployed to:", NexusHub.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
