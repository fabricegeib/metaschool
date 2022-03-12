import "./App.css";
import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import contractABI from "./contractABI.json";
 
const contractAddress = "0xee305cddE5B17b35eb8EBB664F79A020c3C857C1";
 
function App() {
  const [account, setAccount] = useState(null);
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [NFTContract, setNFTContract] = useState(null);
  // state for whether app is minting or not.
  const [isMinting, setIsMinting] = useState(false);
 
 
  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);
 
  useEffect(() => {
    function initNFTContract() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setNFTContract(new Contract(contractAddress,contractABI.abi,signer));
    }
      initNFTContract();
  }, [account]);
 
 
  async function connectWallet() {
        window.ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((accounts) => {
                setAccount(accounts[0]);
            })
            .catch((error) => {
                alert("Something went wrong");
            });
    }
 
 
    const data = [
        {
            url: "./assets/images/1.png",
			description: "This is a dog NFT",
            param: "handleMint('https://ipfs.io/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe/1.json')",
        },
        {
          	url: "./assets/images/4.png",
			description: "This is a cow NFT",
            param: "handleMint('https://ipfs.io/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe/2.json')",
        },
        {
          url: "./assets/images/3.png",
			description: "This is a lion NFT",
            param: "handleMint('https://ipfs.io/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe/3.json')",
        },
        {
          url: "./assets/images/2.png",
			description: "This is a fox NFT",
            param: "handleMint('https://ipfs.io/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe/4.json')",
        },
        {
          url: "./assets/images/5.png",
			description: "This is a fox NFT",
            param: "handleMint('https://ipfs.io/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe/5.json')",
        },
		{
            url: "./assets/images/1.png",
			description: "This is a dog NFT",
            param: "handleMint('https://ipfs.io/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe/1.json')",
        },
        {
          	url: "./assets/images/4.png",
			description: "This is a cow NFT",
            param: "handleMint('https://ipfs.io/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe/2.json')",
        },
        {
          url: "./assets/images/3.png",
			description: "This is a lion NFT",
            param: "handleMint('https://ipfs.io/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe/3.json')",
        },
        {
          url: "./assets/images/2.png",
			description: "This is a fox NFT",
            param: "handleMint('https://ipfs.io/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe/4.json')",
        },
        {
          url: "./assets/images/5.png",
			description: "This is a fox NFT",
            param: "handleMint('https://ipfs.io/ipfs/QmQNjFyowhQzxhiUYqZf5h2FpBuLXDbwKEDXDuvYdhmpxe/5.json')",
        },
    ];
 
    async function withdrawMoney(){
        try {
 
            const response = await NFTContract.withdrawMoney();
            console.log("Received: ", response);
          } catch (err) {
              alert(err);
          }
 
    }
 
    async function handleMint(tokenURI) {
        setIsMinting(true);
            try {
              const options = {value: ethers.utils.parseEther("0.01")};
              const response = await NFTContract.mintNFT(tokenURI, options);
              console.log("Received: ", response);
            } catch (err) {
                alert(err);
            }
            finally {
              setIsMinting(false);
            }
    }
 
    if (account === null) {
    	return (
        	<div className="App">
				<div className="container">
					<div className="header">
						<h1>NFT Marketplace</h1>
						<p>Buy an NFT from our marketplace.</p>
					</div>
					<div className="withdraw">
						{isWalletInstalled ? (
							<button onClick={connectWallet}>Connect Wallet</button>
						) : (
							<p>Install Metamask wallet</p>
						)}
					</div>
				</div>
				<footer className="footer-alt">
						<p>Made by <a href="https://fabricegeib.com" className="App-link" target="_blank" rel="noreferrer">Fabrice Geib</a> with the course of <a href="https://metaschool.so" className="App-link" target="_blank" rel="noreferrer">Metaschool.so</a></p>
					</footer>
        	</div>
     	 );
    }
 
    return (
    	<div className="App">   	
			<div className="container">
				
				<div className="header">
					<h1>NFT Marketplace</h1>
					<p>Buy an NFT from our marketplace.</p>
					<p className="etherscan-link">Find the contract on Etherscan : <a href="https://rinkeby.etherscan.io/address/0xee305cdde5b17b35eb8ebb664f79a020c3c857c1" className="App-link" target="_blank" rel="noreferrer">link</a></p>
				</div>

				<div className="withdraw">
					<button onClick={() => {withdrawMoney();}}>
						Withdraw Money from Contract
					</button>
				</div>  
			
			<div className="nfts">
				{data.map((item, index) => (
				<div className="nft" key={index}>
					<img className="nft__img"
						src={item.url}
						key={index}
						alt="images"
						// width={250}
						// height={250}
					/>
					<div className="nft__bottom">
						<p className="nft__description">{item.description}</p>
						<button className="nft__button" isLoading={isMinting}
							onClick={() => {
								eval(item.param);
							}}
						>
							Mint for 0.01 eth
						</button>
					</div>
				</div>
				))}
			</div>
        </div>
		<footer className="footer">
				<p>Made by <a href="https://fabricegeib.com" className="App-link" target="_blank" rel="noreferrer">Fabrice Geib</a> with the course of <a href="https://metaschool.so" className="App-link" target="_blank" rel="noreferrer">Metaschool.so</a></p>
			</footer>
      </div>
    );
}
 
export default App;