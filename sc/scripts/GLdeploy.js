const { ethers} = require("hardhat");
const baseURI = "https://goots-34a71ba6d699.herokuapp.com/nft/";

async function main() {
    const glFactory = await ethers.getContractFactory("GootsLottery");
    console.log("Deploying GootsLottery...");
    console.log(baseURI);
    const gl = await glFactory.deploy(baseURI);
    console.log("GootsLottery:", gl.address);
}

main();
