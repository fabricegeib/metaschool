const hre = require("hardhat"); 
 
async function main() {  
 
    // We get the contract to deploy  
    const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
    const hscp = await horoscopeNFT.deploy();   
    await hscp.deployed();
 
    console.log("horoscopeNFT deployed to:", hscp.address);   
 } 
 
// We recommend this pattern to be able to use async/await
//everywhere and properly handle errors.
main()
    .then(() => process.exit(0))  
    .catch((error) => {    
    console.error(error);
    process.exit(1);  
});