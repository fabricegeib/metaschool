const hre = require("hardhat"); 
 
async function main() {  
 
    // We get the contract to deploy  
    const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
    const hscp = await horoscopeNFT.deploy();   
    await hscp.deployed();
    
    //since we are testing, you should mention your own Eth wallet address
    const myAddress="0x1151B473355f42bD97eAf2A5721c6825318d178F";
    console.log("horoscopeNFT deployed to:", hscp.address);   

    let txn = await hscp.mintNFT(myAddress, 'libra');
    await txn.wait();
 } 
 
// We recommend this pattern to be able to use async/await
//everywhere and properly handle errors.
main()
    .then(() => process.exit(0))  
    .catch((error) => {    
    console.error(error);
    process.exit(1);  
});