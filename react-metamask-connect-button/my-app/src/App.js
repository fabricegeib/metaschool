import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";

function App() {


        
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  // state for keeping track of current connected account.
    const [account, setAccount] = useState(null);
 
  useEffect(() => {
        if (window.ethereum) {
            setIsWalletInstalled(true);
        }
    }, []);
 
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
    
    if (account === null) {
  
      return (
        
        <div className="App">
          <header className="header">
            <div className="header__container">
                <h1>iamfabriceg.xyz</h1>
                <div className="">
                  { 
                    isWalletInstalled ? (
                      <button className="metamask-button" onClick={connectWallet}>Connect Metamask</button>
                    ) : (
                      <button className="metamask-button"><a href="https://metamask.io/download/" target="_blank" without rel="noreferrer">Install Metamask</a></button>
                    )
                  }
                </div>
            </div>
          </header>
          
          <div class="container">
            <div>
              <h3>Données :</h3>
              <ul>
                <li>Fortnite - Save The World (Heroes) : <a href="https://docs.google.com/spreadsheets/d/1eFmHzkTGOb8MFpBduuFpTauBbe2XEBzNViUi2z9Hx6k/edit?usp=sharing">Google Sheet</a></li>
                <li>Forza Horizon 4 : <a href="https://docs.google.com/spreadsheets/d/1eFmHzkTGOb8MFpBduuFpTauBbe2XEBzNViUi2z9Hx6k/edit?usp=sharing">Google Sheet</a></li>
                    <li>Forza Horizon 4 (Settings) : <a href="https://docs.google.com/spreadsheets/d/15r2fz5Cq1VGQ-UQqGfy0y4puoJ3ncDJf2qG84R2m2yc/edit?usp=sharing">Google Sheet</a></li>
                    <li>Forza Horizon 5 : <a href="https://docs.google.com/spreadsheets/d/1fGx_0XRaQxdpoFR7cDEMiHzimP_wdnjU5kpwhcnkGxI/edit?usp=sharing">Google Sheet</a></li>
                    <li>GTA IV - Online : <a href="https://www.icloud.com/numbers/0d0D3H2QY8z-d56AnUFnzYxpQ#GTA">iCloud Numbers</a></li>
                    <li>GTA IV - FiveM Server #SKIDIP : <a href="https://fivem.iamfabriceg.xyz/">fivem.iamfabriceg.xyz</a></li>
                    <li>League of Kingdoms : <a href="https://docs.google.com/spreadsheets/d/1Ai79JOUE2XfsE0xhqQfMUcXukccB-xiDmxezqicA56A/edit?usp=sharing0">Google Sheet</a></li>
                    <li>Pokémon Go : <a href="https://docs.google.com/spreadsheets/d/1WnW6SrGBnS96rWdKh-H_r3s3N4KNKmUcJe7V5OEFiVo/edit?usp=sharing">Google Sheet</a></li>
                </ul>
            </div>
            <div>
                <h3>Guides et Pages :</h3>
                <ul>
                    <li><a href="/applications">applications</a></li>
                    <li><a href="/images">images</a></li>
                    <li><a href="/lok">League of Kingdoms</a></li>
                    <li><a href="/nft">NFT</a></li>
                    <li><a href="/static">Static</a></li>
                    <li><a href="/videos">Vidéos</a></li>
                </ul>
            </div>
            <div>
                <h3>Configurations :</h3>
                <ul>
                    <li>Carte mère : <a href="https://www.amazon.fr/gp/product/B08B4THL9P/ref=as_li_tl?ie=UTF8&camp=1642&creative=6746&creativeASIN=B08B4THL9P&linkCode=as2&tag=fabricegeib-21&linkId=53a69be2e5a46b25a1a027b541a23d6f">MSI MPG B550 Gaming Edge WiFi</a></li>
                    <li>CPU : <a href="https://www.amazon.fr/AMD-Ryzen-5-3600/dp/B07STGGQ18?&linkCode=ll1&tag=fabricegeib-21&linkId=4c0faa6023626059049ad604a78cde9f&language=fr_FR&ref_=as_li_ss_tl">AMD Ryzen 5 3600 6-Core</a></li>
                    <li>GPU : <a href="https://www.sapphiretech.com/en/consumer/pulse-radeon-rx-5600-xt-6g-gddr6">AMD Radeon RX 5600 XT (Sapphire)</a></li>
                    <li>SSD : <a href="https://www.amazon.fr/gp/product/B07MBQPQ62?ie=UTF8&psc=1&linkCode=ll1&tag=fabricegeib-21&linkId=e564264baa40388722728015e3cadc10&language=fr_FR&ref_=as_li_ss_tl">Samsung SSD Interne 970 EVO Plus NVMe M.2 (1 To)</a></li>
                    <li>Mémoire vive : <a href="https://www.amazon.fr/gp/product/B0143UM4TC/ref=as_li_tl?ie=UTF8&camp=1642&creative=6746&creativeASIN=B0143UM4TC&linkCode=as2&tag=fabricegeib-21&linkId=ff0ff71bdcba92777ccbd791f8cc0f5f">Corsair Vengeance LPX 16Go (2x8Go) DDR4 3200MHz</a></li>
                    <li>Alimentation : <a href="https://www.amazon.fr/gp/product/B079QGPVMC?ie=UTF8&psc=1&linkCode=ll1&tag=fabricegeib-21&linkId=23a0dabce927c06b3d812887672e4eba&language=fr_FR&ref_=as_li_ss_tl">Corsair RM750x</a></li>
                    <li>Boîtier : <a href="https://www.amazon.fr/NZXT-H510-Bo%C3%AEtier-Compatible-Refroidissement/dp/B07SD9R4VY?dchild=1&keywords=h510&qid=1615736683&sr=8-1&th=1&linkCode=ll1&tag=fabricegeib-21&linkId=a6436cf9cab7429b0bbafb8c9955788b&language=fr_FR&ref_=as_li_ss_tl">NZXT H510</a></li>
                    <li>Microphone : <a href="https://www.amazon.fr/gp/product/B00KQPGRRE/ref=as_li_tl?ie=UTF8&camp=1642&creative=6746&creativeASIN=B00KQPGRRE&linkCode=as2&tag=fabricegeib-21&linkId=9dc9c9854ada39ce2b516e98a460769">Rode NT-USB</a></li>
                </ul>
            </div>
            <div>
                <h3>Statistiques et traqueurs :</h3>
                <ul>
                    <li>Fortnite - Battle Royale : <a href="https://fortnitetracker.com/profile/all/iamfabriceg" target="_blank" without rel="noreferrer">fortnitetracker.com</a></li>
                    <li>League of Legends (LOL) : <a href="https://tracker.gg/lol/profile/riot/EUW/FabriceG/overview" target="_blank">tracker.gg</a></li>
                    <li>Rocket League (EPIC Games) : <a href="https://rocketleague.tracker.network/rocket-league/profile/epic/iamfabriceg/overview" target="_blank">tracker.network</a>, <a href="https://euw.op.gg/summoner/userName=fabriceg" target="_blank">op.gg</a></li>
                    <li>Teamfight Tactics (TFT) : <a href="https://tracker.gg/tft/profile/riot/EUW/FabriceG/overview" target="_blank">tracker.gg</a></li>
                </ul>
            </div>
            <div>
                <h3>Liens de parrainage :</h3>
                <ul>
                    <li>League of Kingdoms (LoK) - LAND : <a href="https://land.leagueofkingdoms.com?ref=7YC4ZZ" target="_blank">land.leagueofkingdoms.com</a></li>
                    <li>Mobox : <a href="https://www.mobox.io/home/#/cmcairdrop?source=10591308" target="_blank">mobox.io</a></li>
                    <li>Paladins : <a href="https://www.paladins.com/play-for-free/?ref=iamfabriceg" target="_blank">paladins.com</a></li>
                    <li>PipeFlare : <a href="https://pipeflare.io/r/f6p0" target="_blank">pipeflare.io</a></li>
                    <li>Rollercoin : <a href="https://rollercoin.com/?r=kzbmirv2" target="_blank">rollercoin.com</a></li>

                    <li>Instant Gaming : <a href="https://www.instant-gaming.com/en/?igr=iamfabriceg" target="_blank">instant-gaming.com</a></li>

                </ul>			           
            </div>
            <div>
                <h3>Me soutenir :</h3>
                <ul>
                    <li>Abonnement Twitch : <a href="https://www.twitch.tv/subs/iamfabriceg" target="_blank" without rel="noreferrer">twitch.com</a></li>
                </ul>
            </div>
          </div>
          <footer class="container">
            <div id="about">
                <h3>Réseaux sociaux :</h3>
                <ul class="linksX">
                    <li>
                        <a class="discord" href="https://discord.gg/2CPt337u9p" rel="noopener noreferrer"
                            target="_blank">discord</a>
                    </li>
                    <li>
                        <a class="facebook" href="https://facebook.com/iamfabriceg" rel="noopener noreferrer"
                            target="_blank">facebook</a>
                    </li>
                    <li>
                        <a class="instagram" href="https://www.instagram.com/iamfabriceg/" rel="noopener noreferrer"
                            target="_blank">instagram</a>
                    </li>
                    <li>
                        <a class="twitch" rel="noopener noreferrer" href="https://www.twitch.tv/iamfabriceg"
                            target="_blank">twitch</a>
                    </li>
                    <li>
                        <a class="twitter" href="https://twitter.com/iamfabriceg" rel="noopener noreferrer"
                            target="_blank">twitter</a>
                    </li>
                    <li>
                        <a class="youtube" rel="noopener noreferrer"
                            href="https://www.youtube.com/channel/UCKv4GgFKQvPG2rt3MOZK8Xg/" target="_blank">youtube</a>
                    </li>
                </ul>
            </div>
        </footer>

        </div>
      );
    }
      return (
       <div className="App">
          <header className="header">
            <div className="header__container">
                <h1>iamfabriceg.xyz</h1>
                <div className="">
                  <button className="metamask-button">Connected as : <span id="metamaskAccount">{account}</span></button>
                </div>
            </div>
          </header>
          
          <div class="container">
            <div>
              <h3>Données :</h3>
              <ul>
                <li>Fortnite - Save The World (Heroes) : <a href="https://docs.google.com/spreadsheets/d/1eFmHzkTGOb8MFpBduuFpTauBbe2XEBzNViUi2z9Hx6k/edit?usp=sharing">Google Sheet</a></li>
                <li>Forza Horizon 4 : <a href="https://docs.google.com/spreadsheets/d/1eFmHzkTGOb8MFpBduuFpTauBbe2XEBzNViUi2z9Hx6k/edit?usp=sharing">Google Sheet</a></li>
                    <li>Forza Horizon 4 (Settings) : <a href="https://docs.google.com/spreadsheets/d/15r2fz5Cq1VGQ-UQqGfy0y4puoJ3ncDJf2qG84R2m2yc/edit?usp=sharing">Google Sheet</a></li>
                    <li>Forza Horizon 5 : <a href="https://docs.google.com/spreadsheets/d/1fGx_0XRaQxdpoFR7cDEMiHzimP_wdnjU5kpwhcnkGxI/edit?usp=sharing">Google Sheet</a></li>
                    <li>GTA IV - Online : <a href="https://www.icloud.com/numbers/0d0D3H2QY8z-d56AnUFnzYxpQ#GTA">iCloud Numbers</a></li>
                    <li>GTA IV - FiveM Server #SKIDIP : <a href="https://fivem.iamfabriceg.xyz/">fivem.iamfabriceg.xyz</a></li>
                    <li>League of Kingdoms : <a href="https://docs.google.com/spreadsheets/d/1Ai79JOUE2XfsE0xhqQfMUcXukccB-xiDmxezqicA56A/edit?usp=sharing0">Google Sheet</a></li>
                    <li>Pokémon Go : <a href="https://docs.google.com/spreadsheets/d/1WnW6SrGBnS96rWdKh-H_r3s3N4KNKmUcJe7V5OEFiVo/edit?usp=sharing">Google Sheet</a></li>
                </ul>
            </div>
            <div>
                <h3>Configurations :</h3>
                <ul>
                    <li>Carte mère : <a href="https://www.amazon.fr/gp/product/B08B4THL9P/ref=as_li_tl?ie=UTF8&camp=1642&creative=6746&creativeASIN=B08B4THL9P&linkCode=as2&tag=fabricegeib-21&linkId=53a69be2e5a46b25a1a027b541a23d6f">MSI MPG B550 Gaming Edge WiFi</a></li>
                    <li>CPU : <a href="https://www.amazon.fr/AMD-Ryzen-5-3600/dp/B07STGGQ18?&linkCode=ll1&tag=fabricegeib-21&linkId=4c0faa6023626059049ad604a78cde9f&language=fr_FR&ref_=as_li_ss_tl">AMD Ryzen 5 3600 6-Core</a></li>
                    <li>GPU : <a href="https://www.sapphiretech.com/en/consumer/pulse-radeon-rx-5600-xt-6g-gddr6">AMD Radeon RX 5600 XT (Sapphire)</a></li>
                    <li>SSD : <a href="https://www.amazon.fr/gp/product/B07MBQPQ62?ie=UTF8&psc=1&linkCode=ll1&tag=fabricegeib-21&linkId=e564264baa40388722728015e3cadc10&language=fr_FR&ref_=as_li_ss_tl">Samsung SSD Interne 970 EVO Plus NVMe M.2 (1 To)</a></li>
                    <li>Mémoire vive : <a href="https://www.amazon.fr/gp/product/B0143UM4TC/ref=as_li_tl?ie=UTF8&camp=1642&creative=6746&creativeASIN=B0143UM4TC&linkCode=as2&tag=fabricegeib-21&linkId=ff0ff71bdcba92777ccbd791f8cc0f5f">Corsair Vengeance LPX 16Go (2x8Go) DDR4 3200MHz</a></li>
                    <li>Alimentation : <a href="https://www.amazon.fr/gp/product/B079QGPVMC?ie=UTF8&psc=1&linkCode=ll1&tag=fabricegeib-21&linkId=23a0dabce927c06b3d812887672e4eba&language=fr_FR&ref_=as_li_ss_tl">Corsair RM750x</a></li>
                    <li>Boîtier : <a href="https://www.amazon.fr/NZXT-H510-Bo%C3%AEtier-Compatible-Refroidissement/dp/B07SD9R4VY?dchild=1&keywords=h510&qid=1615736683&sr=8-1&th=1&linkCode=ll1&tag=fabricegeib-21&linkId=a6436cf9cab7429b0bbafb8c9955788b&language=fr_FR&ref_=as_li_ss_tl">NZXT H510</a></li>
                    <li>Microphone : <a href="https://www.amazon.fr/gp/product/B00KQPGRRE/ref=as_li_tl?ie=UTF8&camp=1642&creative=6746&creativeASIN=B00KQPGRRE&linkCode=as2&tag=fabricegeib-21&linkId=9dc9c9854ada39ce2b516e98a460769">Rode NT-USB</a></li>
                </ul>
            </div>
            <div>
                <h3>Statistiques et traqueurs :</h3>
                <ul>
                    <li>Fortnite - Battle Royale : <a href="https://fortnitetracker.com/profile/all/iamfabriceg" target="_blank">fortnitetracker.com</a></li>
                    <li>League of Legends (LOL) : <a href="https://tracker.gg/lol/profile/riot/EUW/FabriceG/overview" target="_blank">tracker.gg</a></li>
                    <li>Rocket League (EPIC Games) : <a href="https://rocketleague.tracker.network/rocket-league/profile/epic/iamfabriceg/overview" target="_blank">tracker.network</a>, <a href="https://euw.op.gg/summoner/userName=fabriceg" target="_blank">op.gg</a></li>
                    <li>Teamfight Tactics (TFT) : <a href="https://tracker.gg/tft/profile/riot/EUW/FabriceG/overview" target="_blank">tracker.gg</a></li>
                </ul>
            </div>
            <div>
                <h3>Liens de parrainage :</h3>
                <ul>
                    <li>League of Kingdoms (LoK) - LAND : <a href="https://land.leagueofkingdoms.com?ref=7YC4ZZ" target="_blank">land.leagueofkingdoms.com</a></li>
                    <li>Mobox : <a href="https://www.mobox.io/home/#/cmcairdrop?source=10591308" target="_blank">mobox.io</a></li>
                    <li>Paladins : <a href="https://www.paladins.com/play-for-free/?ref=iamfabriceg" target="_blank">paladins.com</a></li>
                    <li>PipeFlare : <a href="https://pipeflare.io/r/f6p0" target="_blank">pipeflare.io</a></li>
                    <li>Rollercoin : <a href="https://rollercoin.com/?r=kzbmirv2" target="_blank">rollercoin.com</a></li>

                    <li>Instant Gaming : <a href="https://www.instant-gaming.com/en/?igr=iamfabriceg" target="_blank">instant-gaming.com</a></li>

                </ul>			           
            </div>
            <div>
                <h3>Me soutenir :</h3>
                <ul>
                    <li>Abonnement Twitch : <a href="https://www.twitch.tv/subs/iamfabriceg" target="_blank">twitch.com</a></li>
                </ul>
            </div>
          </div>
          <footer class="container">
            <div id="about">
                <h3>Réseaux sociaux :</h3>
                <ul class="linksX">
                    <li>
                        <a class="discord" href="https://discord.gg/2CPt337u9p" rel="noopener noreferrer"
                            target="_blank">discord</a>
                    </li>
                    <li>
                        <a class="facebook" href="https://facebook.com/iamfabriceg" rel="noopener noreferrer"
                            target="_blank">facebook</a>
                    </li>
                    <li>
                        <a class="instagram" href="https://www.instagram.com/iamfabriceg/" rel="noopener noreferrer"
                            target="_blank">instagram</a>
                    </li>
                    <li>
                        <a class="twitch" rel="noopener noreferrer" href="https://www.twitch.tv/iamfabriceg"
                            target="_blank">twitch</a>
                    </li>
                    <li>
                        <a class="twitter" href="https://twitter.com/iamfabriceg" rel="noopener noreferrer"
                            target="_blank">twitter</a>
                    </li>
                    <li>
                        <a class="youtube" rel="noopener noreferrer"
                            href="https://www.youtube.com/channel/UCKv4GgFKQvPG2rt3MOZK8Xg/" target="_blank">youtube</a>
                    </li>
                </ul>
            </div>
        </footer>

    
        </div>
    ); 
  }
    
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  //}

export default App;
