"use client";

import Image from "next/image";
import styles from "../../src/app/styles/style.module.css"

import Carousal from "./component/carousal";
import StartTradingNow from "./component/startTradingnow.js";
import Tradeonthego from "./component/Tradeonthego.js";
import Footer from "./component/footer";

// import PopularCoins 
// import { useEffect , useState } from "react";
import { useState, useEffect } from "react";
import { FaSearch, FaUserCircle, FaBell, FaExchangeAlt, FaMoon, FaGlobe } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import { IoMdSquare } from 'react-icons/io';



export default function Home() {

  const [coinData, setCoinData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.binance.com/api/v3/ticker/24hr?");
      const data = await response.json();
      const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'XRPUSDT', 'SOLUSDT'];

      const filtered = data.filter(item => symbols.includes(item.symbol));

      const result = {};
      filtered.forEach(item => {
        result[item.symbol] = {
          price: parseFloat(item.lastPrice).toFixed(2),
          change: parseFloat(item.priceChangePercent).toFixed(2),
        };
      });
      setCoinData(result);
      console.log(data);

    } catch (err) {
      console.error('Error fetching coin data:', err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 4000); // refresh every 4s
    return () => clearInterval(interval);
  }, []);


  return (
    <section className={styles.main}>
      {/* hello */}

      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <ul className={styles.navLeftUl}>
            <li> <a href="" ><img src="binance.png" className={styles.binanceLogo} /></a>  </li>
            <li> <a href="" >Buy Crupto </a>  </li>
            <li> <a href=""> Markets </a>  </li>
            <li> <a href=""> Trades </a></li>
            <li> <a href=""> Futures</a> </li>
            <li> <a href=""> Futures</a> </li>
            <li> <a href=""> Earn</a> </li>
            <li><a href="">Squares </a></li>
            <li> <a href="">More</a> </li>

          </ul>
        </div>
        <div className={styles.narRight}>
          <ul className={styles.navRightUl}>
            <li> <a href=""></a>       <FaSearch />  Search </li>
            <li> <a href="">
              <button className={styles.depositBtn}><MdDownload /> Deposit</button>
            </a> </li>
            <li> <a href="">   <FaUserCircle /> </a> </li>
            <li> <a href=""><IoMdSquare /></a> </li>
            <li> <a href="">     <FaBell className={styles.bellIcon} /></a> </li>
            <li> <a href="">  <FaExchangeAlt /> </a> </li>
            <li> <a href="">   <FaGlobe /> </a> </li>
            <li> <a href=""> <FaMoon /> </a> </li>
            <div className={styles.right}>



            </div>

          </ul>
        </div>
      </nav>




      <section className={styles.hero}>

        <div className={styles.heroLeft}>
          <h1>
            <span className={styles.trade}>Trade</span> 350+ Cryptocurrencies <br></br>on Binance
          </h1>
          <div className={styles.heroLeftmid}>
            <p className={styles.heroLeftmidp1}>Your Estimated Balance</p>
            <p> <span className={styles.balancePrice}>0.00</span> BTC ≈ $0.00</p>
            <p>Today's PnL $0.00 (0.00%)</p>
          </div>
          <div className={styles.heroLeftbuttom}>
            <button className={styles.tradeButton}>Trade Now</button>
            <button className={styles.watchBtn}>Watch Tutorial</button>
          </div>
          <p className={styles.binanceAnnc}>Binance Has Completed the Standard Tokenization Protocol (STPT) Token Sw...  <span className={styles.dateAnc}>25-05-21</span></p>
        </div>

        <div className={styles.heroRight}>

          <div className={styles.heroRightTop}>
            <div className={styles.heroRightTopHeading}>
              <p className={styles.popular}>Popular</p>
              <p className={styles.newListing}>New Listing</p>
              <p className={styles.Viewallcoins}>View 350+ Coins</p>
            </div>

            <div className={styles.coinTable}>

              <table>
                <tbody>
                  {[
                    { symbol: 'BTCUSDT', name: 'Bitcoin', icon: 'bitcoin.png', label: 'BTC' },
                    { symbol: 'ETHUSDT', name: 'Ethereum', icon: 'eth.png', label: 'ETH' },
                    { symbol: 'BNBUSDT', name: 'BNB', icon: 'bnb.png', label: 'BNB' },
                    { symbol: 'XRPUSDT', name: 'XRP', icon: 'xrp.png', label: 'XRP' },
                    { symbol: 'SOLUSDT', name: 'Solana', icon: 'solana.png', label: 'SOL' },
                  ].map((coin) => (
                    <tr key={coin.symbol}>
                      <td className={styles.coinImgTd}>
                        <img src={coin.icon} className={styles.coinImg} />
                        {coin.label} <span>{coin.name}</span>
                      </td>
                      <td className={styles.coinPrice}>
                        ${coinData[coin.symbol]?.price || '--'}
                      </td>
                      <td
                        className={`${styles.coinPercent} ${coinData[coin.symbol]?.change < 0
                            ? styles.red
                            : styles.green
                          }`}
                      >
                        {coinData[coin.symbol]?.change || '--'}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>

          </div>

          <div className={styles.heroRightMid}>
            <div className={styles.heroRightMidTop}>
              <h2>News</h2>
              <span> View All news</span>
            </div>
            <ul className={styles.newsList}>
              <li>
                <a href="">UK Pension Firm Urges Insurers to Consider Bitcoin as Strategic Asset</a>
              </li>
              <li>
                <a href="">Canaan Technology Reports Strong Q1 Revenue Growth...</a>
              </li>
              <li>
                <a href="">Tether Expands USDT Supply on Tron Network in 2025</a>
              </li>
            </ul>
          </div>



        </div>

      </section>

      <Carousal />
      <Tradeonthego />
      <StartTradingNow />
      <Footer />






    </section>
  );
}
