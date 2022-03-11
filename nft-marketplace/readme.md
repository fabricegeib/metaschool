# NFT Marketplace

https://metaschool.so/courses/launch-your-own-epic-nft-marketplace/lesson/7cc09613-0b05-4e3f-a747-be657a0b2aaf

- We will start of with setting up our development environment and downloading all the dependencies. The tech stack we will be using today is - Hardhat, Alchemy, Pinata, React and Ethers.js
- We will then use the openzepellin library’s ERC721 smart contract, and inherit it to create our own NFT smart contract called Collection.sol
- After that we will need to deploy our smart contract using ethers.js and check our deployment on etherscan.
- Once all the solidity part is done, we’ll make a very simple react frontend for our website.
- This webpage will be able to list 5 NFTs, a user would be able to connect to their metamask and mint any 2 of these NFTs.
- And that’s it, you will now be able to see and enjoy your NFT in your own metamask wallet!

###
```
mkdir nft-collection  
cd nft-collection

npm init

npm install --save-dev hardhat

npx hardhat

<!-- Create an empty hardhat.config.js -->

mkdir contracts
mkdir scripts

npm install @openzeppelin/contracts
```

Il me manque le dossier `cache` à la racine

Créer un applicatio sur alchemy
Staging, Ethereum, Rinkeby

### Sécuriser les informations
```
npm install dotenv --save
```

Créer un fichier `.env`

```
PRIVATE_KEY=YOUR-PRIVATE-KEY
API_URL_KEY=YOUR-ALCHEMY-APP-URL
```

### Création du contract
Dans votre dossier `contracts` créer un fichier `Collection.sol`
```sol
//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
 
contract Collection is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _totalMinted;
    mapping(address => uint8) private mintedAddress;
    mapping(string => uint8) private URIMapping;
    uint256 public PRICE_PER_TOKEN = 0.01 ether;
    uint256 public LIMIT_PER_ADDRESS = 2;
    uint256 public MAX_SUPPLY  = 5;
 
 
    constructor() ERC721("Collection", "NFT") {}
    function setPrice(uint256 price) external onlyOwner{
        PRICE_PER_TOKEN = price;
    }
    function setLimit(uint256 limit) external onlyOwner{
        LIMIT_PER_ADDRESS = limit;
    }
    function setMaxSupply(uint256 max_supply) external onlyOwner{
        MAX_SUPPLY = max_supply;
    }
    function mintNFT(string memory tokenURI)
        payable
        external
        returns (uint256)
    {
        require(PRICE_PER_TOKEN <= msg.value, "Ether paid is incorrect");
        require(mintedAddress[msg.sender] < LIMIT_PER_ADDRESS, "You have exceeded minting limit");
        require(_totalMinted.current() + 1 <= MAX_SUPPLY, "You have exceeded Max Supply");
        require(URIMapping[tokenURI] == 0, "This NFT has already been minted");
        URIMapping[tokenURI] += 1;
        mintedAddress[msg.sender] += 1;
        _tokenIds.increment();
        _totalMinted.increment();
 
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
 
        return newItemId;
    }
    function withdrawMoney() external onlyOwner{
        address payable to = payable(msg.sender);
        to.transfer(address(this).balance);
    }
}
```

ERC721 - Standard implementation of the ERC721 smart contract used for making NFTs
Counters - Provides a secure way to increment or decrement a number by 1. We will use counters to keep a track of the token IDs of our minted NFTs
Ownable - Allows us to use the ‘onlyOwner’ modifier which in turn allows us to create functions that only the owner of the contract can use.
ERC721URIStorage - This is an extension of the ERC721 smart contract, that provides a way to store the metadata in an array list on chain using the _setTokenURI function.

#### Creating the Mint function

