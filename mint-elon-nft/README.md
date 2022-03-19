# How to write a smart contract and mint Elon Musk NFT on OpenSea

In this tutorial for beginners, we are going to be writing a smart contract and learn how we can use the standard for non-fungible tokens ERC 721 to mint an image of Elon Musk programmatically.

https://metaschool.so/courses/how-to-write-a-smart-contract-and-mint-elon-musk-nft-on-opensea

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# Fabrice

### Rinkeby
[https://testnets.opensea.io/assets/rinkeby](https://testnets.opensea.io/assets/rinkeby/0xe731eB64d4cDa6526B4883A2cEc8C4E0699F5048/1)

```
{
    "name": "Elon Musk",
    "description": "Making inter planetory travel possible and pushing the boundaries for mankind.",
    "image": "https://64.media.tumblr.com/242f308aee595552a0898e11b4bfb9a3/tumblr_pe1d49XUHB1tsqz3b_1280.jpg",
    "attributes": [
        { "trait_type": "Zodiac", "value": "Cancer" },
        { "trait_type": "Height", "value": "6'1" },
        { "trait_type": "Personality Type", "value": "INTJ" }
    ]
}
```

### Polygon Mumbai
[https://testnets.opensea.io/assets/mumbai](https://testnets.opensea.io/assets/mumbai/0x391bae54e91008235ed74ab76986328c92f3aaf1/1)

```
{
    "name": "Elon Musk",
    "description": "Making inter planetory travel possible and pushing the boundaries for mankind.",
    "image": "https://va.media.tumblr.com/tumblr_qvv73bSOBo1xh4ndj.mp4",
    "attributes": [
        { "trait_type": "Zodiac", "value": "Cancer" },
        { "trait_type": "Height", "value": "6'1" },
        { "trait_type": "Personality Type", "value": "INTJ" },
        { "trait_type": "Date of Birth", "value": "06/28/1971" },
        { "trait_type": "City of Birth", "value": "Pretoria" }
    ]
}
```
credit video : Paul Jackson - Shut it Elon

### Log Rinkeby
```
from:
0x1151B473355f42bD97eAf2A5721c6825318d178F
to:
0x011276d94a09d9d6855ef260b6fec4050f37940d
token:
0x0000000000000000000000000000000000000000
txGas:
137658
tokenGasPrice:
0
batchId:
0
batchNonce:
12
deadline:
1645137063
data:
0x6898f82b0000000000000000000000000000000000000000000000000000000000001090
```
