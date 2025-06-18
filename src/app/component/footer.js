// import Section1 from "./home/section1.js";
import styles from "../../app/styles/footer.module.css";
// import {
//   FaDiscord, FaTelegram, FaTiktok, FaFacebookF,
//   FaXTwitter, FaRedditAlien, FaInstagram, FaMediumM,
//   FaYoutube, FaWhatsapp, FaEllipsisH, FaGlobe, FaDollarSign
// } from 'react-icons/fa';
// import { BsToggle2On } from 'react-icons/bs';
// import {  FaDiscord , FaTelegram , FaTiktok , FaSquareXTwitter ,FaReddit ,FaInstagramSquare , SiCoinmarketcap , FaYoutube ,IoLogoWhatsapp , BsThreeDots  } from "react-icons/fa";

import {  FaDiscord  } from "react-icons/fa";
import {  FaTelegram  } from "react-icons/fa";
import {  FaTiktok  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {  FaReddit  } from "react-icons/fa";
import {  FaFacebook  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import { BsToggle2On } from "react-icons/bs";


// import {  SiCoinmarketcap  } from "react-icons/fa";
// import {  IoLogoWhatsapp  } from "react-icons/fa";
// import {  BsThreeDots  } from "react-icons/fa";


export default function Footer() {
  return (
    <main className={styles.footer}>

         {/* <footer className={styles.footer}> */}
      <div className={styles.container}>

        <div className={styles.column}>
          <h3>Community</h3>
          <div className={styles.icons}>

            <div className={styles.iconRow}>
                         <FaDiscord size={24}/>
            <FaTelegram  size={24}  />
            <FaTiktok  size={24} />
            <FaFacebook  size={24} />

            </div>
   
           
    <div className={styles.iconRow}>
       <FaXTwitter   size={24} />
            <FaReddit  size={24} />
            <FaInstagram  size={24} />
            <SiCoinmarketcap size={24}  />

    </div>
         
        <div className={styles.iconRow}>
                <FaYoutube  size={24}  />
            <FaWhatsapp size={24}  />
            <BsThreeDots size={24}  />
            
         </div>
        
           
     
          </div>
          <div className={styles.options}>
            <div><FaGlobe size={22} /> English</div>
            <div><HiCurrencyDollar size={24} /> USD-$</div>
            <div className={styles.themeToggle}><span>Theme</span><BsToggle2On size={28} /></div>
          </div>
        </div>

        <div className={styles.column}><h3>About Us</h3>
          <ul>
            <li>About</li><li>Careers</li><li>Announcements</li><li>News</li>
            <li>Press</li><li>Legal</li><li>Terms</li><li>Privacy</li>
            <li>Building Trust</li><li>Blog</li><li>Community</li><li>Risk Warning</li>
            <li>Notices</li><li>Downloads</li><li>Desktop Application</li>
          </ul>
        </div>

        <div className={styles.column}><h3>Products</h3>
          <ul>
            <li>Exchange</li><li>Buy Crypto</li><li>Pay</li><li>Academy</li>
            <li>Live</li><li>Tax</li><li>Gift Card</li><li>Launchpool</li>
            <li>Auto-Invest</li><li>ETH Staking</li><li>NFT</li><li>BABT</li>
            <li>Research</li><li>Charity</li>
          </ul>
        </div>

        <div className={styles.column}><h3>Business</h3>
          <ul>
            <li>P2P Merchant Application</li><li>P2Pro Merchant Application</li>
            <li>Listing Application</li><li>Institutional & VIP Services</li>
            <li>Labs</li><li>Binance Connect</li>
          </ul>
          <h3>Learn</h3>
          <ul>
            <li>Learn & Earn</li><li>Browse Crypto Prices</li><li>Bitcoin Price</li>
            <li>Ethereum Price</li><li>Browse Crypto Price Predictions</li>
            <li>Bitcoin Price Prediction</li><li>Ethereum Price Prediction</li>
            <li>Ethereum Upgrade (Pectra)</li><li>Buy Bitcoin</li><li>Buy BNB</li><li>Buy XRP</li><li>Buy Dogecoin</li>
          </ul>
        </div>

        <div className={styles.column}><h3>Service</h3>
          <ul>
            <li>Affiliate</li><li>Referral</li><li>BNB</li><li>OTC Trading</li>
            <li>Historical Market Data</li><li>Trading Insight</li><li>Proof of Reserves</li>
          </ul>
          <h3>Support</h3>
          <ul>
            <li>24/7 Chat Support</li><li>Support Center</li><li>Product Feedback & Suggestions</li>
            <li>Fees</li><li>APIs</li><li>Binance Verify</li><li>Trading Rules</li>
            <li>Binance Airdrop Portal</li><li>Law Enforcement Requests</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <hr></hr>
        <div className={styles.footerBottomDiv}>  <span>Binance© 2025</span> 
        <span>Cookie Preferences</span> </div>
       
      </div>
    {/* </footer> */}
 
    </main>
  );
}