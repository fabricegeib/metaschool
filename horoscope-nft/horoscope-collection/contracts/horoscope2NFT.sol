// SPDX-License-Identifier: UNLICENSED
 
pragma  solidity ^0.8.4;
 
import  "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import  "@openzeppelin/contracts/utils/Counters.sol";
import  "hardhat/console.sol";
import "./Base64.sol";
 
contract horoscopeNFT  is  ERC721URIStorage {
    using  Counters  for  Counters.Counter;
    Counters.Counter private _tokenIds;
    
    string baseSvg ="<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: #c5ae6a; font-family: sans-serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='#333' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>";

    constructor() ERC721("Horoscope", "HSCP") {}
    
function mintNFT(address recipient, string memory zodiacSign)
    public returns (uint256) {
        _tokenIds.increment();
    
        string memory finalSvg = string(
            abi.encodePacked(baseSvg, zodiacSign, "</text></svg>")
        );
 
        // Get all the JSON metadata in place and base64 encode it.
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "',zodiacSign,
                        // We set the title of our NFT as the generated word.
                        '", "description": "On-chain Zodiac Sign NFTs", "attributes": [{"trait_type": "Zodiac Sign", "value": "',
                        zodiacSign,
                        '"}], "image": "data:image/svg+xml;base64,',
                        // We add data:image/svg+xml;base64 and then append our base64 encode our svg.
                        Base64.encode(bytes(finalSvg)),
                        '"}'
                    )
                )
            )
        );
 
        // Just like before, we prepend data:application/json;base64, to our data.
        string memory finalTokenUri = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
    
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, finalTokenUri);
    
        return newItemId;
    }

    // function  mintNFT(address  recipient, string  memory  zodiacSign)
    // public  returns (uint256) {
    //     _tokenIds.increment();
    //     uint256 newItemId = _tokenIds.current();
    //     _mint(recipient, newItemId);
    //     _setTokenURI(newItemId, 'zodiacSign');
    //     return newItemId;
    // }
 
}