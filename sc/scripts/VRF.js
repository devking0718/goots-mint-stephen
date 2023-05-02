const { ethers} = require("hardhat");

async function main() {
    const vrfFactory = await ethers.getContractFactory("VRF");
    console.log("Deploying VRF...");
    const vrf = await vrfFactory.deploy();
    console.log("VRF:", vrf.address);
}

main();
