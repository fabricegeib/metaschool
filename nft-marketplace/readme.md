# NFT Marketplace

Made with `create-react-app`, CSS and Solidity
by Fabrice Geib

![Preview](https://github.com/fabricegeib/metaschool/tree/master/nft-marketplace/collections-react/nft-marketplace-preview-1.png)

🔗 [Link of the website](https://metaschool.vercel.app/)

🔗 [Link of the contract on rinkeby etherscan](https://rinkeby.etherscan.io/address/0xee305cddE5B17b35eb8EBB664F79A020c3C857C1)

🔗 [Link of the collection on testnets opensea](https://testnets.opensea.io/collection/collection-zyhwkm0rpa)

🔗 [Link of the courses on metaschool](https://metaschool.so/courses/launch-your-own-epic-nft-marketplace/lesson/7cc09613-0b05-4e3f-a747-be657a0b2aaf)

### Resume

- We will start of with setting up our development environment and downloading all the dependencies. The tech stack we will be using today is - Hardhat, Alchemy, Pinata, React and Ethers.js
- We will then use the openzepellin library’s ERC721 smart contract, and inherit it to create our own NFT smart contract called Collection.sol
- After that we will need to deploy our smart contract using ethers.js and check our deployment on etherscan.
- Once all the solidity part is done, we’ll make a very simple react frontend for our website.
- This webpage will be able to list 5 NFTs, a user would be able to connect to their metamask and mint any 2 of these NFTs.
- And that’s it, you will now be able to see and enjoy your NFT in your own metamask wallet!

### Création de notre collection
```shell
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
```shell
npm install dotenv --save
```

Créer un fichier `.env`

```.env
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

### Créer la fonction "Mint"

A lire : https://docs.soliditylang.org/en/develop/units-and-global-variables.html?highlight=special%20variables%20and%20functions#block-and-transaction-properties

### Comprendre le contrat

### Writing the deployment script
We have gotten most of the things set up already we just have to take care of 2 little things for now
```shell
npm install --save-dev @nomiclabs/hardhat-ethers ethers@^5.0.0
```

On compile le contract
```shell
npx hardhat compile
```

En retour dans le terminal :
```shell
Downloading compiler 0.8.2
Compiled 13 Solidity files successfully
```

### Deploiement du contrat
Dans le dossier `script` créer un fichier `deploy.js` : 
```js
async function main() {
    const Collection = await ethers.getContractFactory("Collection")
    const collection = await Collection.deploy()
    await collection.deployed()
    console.log("Contract deployed to address:", collection.address)
  }
 
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
```

Deploiement du contrat sur le réseau Rinkeby :
```
npx hardhat --network rinkeby run scripts/deploy.js
```

Retour du terminal
```
Contract deployed to address: 0xee305cddE5B17b35eb8EBB664F79A020c3C857C1
```

Lien vers le contrat : https://rinkeby.etherscan.io/address/0xee305cddE5B17b35eb8EBB664F79A020c3C857C1

### Création du frontend de notre marketplace
```shell
npx create-react-app collections-react

cd collections-react

npm i ethers
```

### Configurer Pinata

Need add link github
https://metaschool.so/courses/launch-your-own-epic-nft-marketplace/lesson/9de7dbcb-1948-4420-b014-d599a27b62b1


https://gateway.pinata.cloud/ipfs/QmXZ3TgRgd5EZEk2DhwGvjf8f6sQJNCrnHzrEw1oHufgnL

https://ipfs.io/ipfs/QmXZ3TgRgd5EZEk2DhwGvjf8f6sQJNCrnHzrEw1oHufgnL/1.png
https://ipfs.io/ipfs/QmXZ3TgRgd5EZEk2DhwGvjf8f6sQJNCrnHzrEw1oHufgnL/2.png

http://bafybeiei4xqifmumfnyo2k2l4vz2mvv25stdv3q54suj4qqhjyn7kypboe.ipfs.localhost:8080/
http://bafybeiei4xqifmumfnyo2k2l4vz2mvv25stdv3q54suj4qqhjyn7kypboe.ipfs.localhost:8080/1.png
http://bafybeiei4xqifmumfnyo2k2l4vz2mvv25stdv3q54suj4qqhjyn7kypboe.ipfs.localhost:8080/2.png


https://gateway.pinata.cloud/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe
https://ipfs.io/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe
https://ipfs.io/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe/1.json


### Frontend et contractABI.json

Dans le dossier `src` dans notre site `collections-react` créer un nouveau fichier `contractABI.json`

### Preview connected

![Preview](https://github.com/fabricegeib/metaschool/tree/master/nft-marketplace/collections-react/nft-marketplace-preview-2.png)

# To fix
⚠️ Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use eval(). See Never use eval()!, below.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval