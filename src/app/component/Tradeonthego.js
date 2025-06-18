// import Section1 from "./home/section1.js";
import styles from "../../app/styles/tradeonthego.module.css";

export default function Tradeonthego() {
  return (
    <main className={styles.tradeonthego}>

        <div className={styles.demoImgDiv}>
          <img src="download-lite-dark.svg" />
        </div>
        
        <div className={styles.rightDiv}>
            <h1>Trade on the go. Anywhere, anytime.</h1>
            <div className={styles.downloadQR}>
              <div className={styles.qrImgDiv}>
                    <img className={styles.qrImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png" />
              </div>
            
                <h2><span className={styles.scanDownload}> Scan To Download App</span> <br></br><br></br>
                iOS and Android</h2>
            </div>
            <div className={styles.downloadPlatforms}>
                <div className={styles.apple}></div>
                <div className={styles.windows}></div>
                <div className={styles.linus}></div>
             </div>
            <p>More Download Options</p>
        </div>
 
    </main>
  );
}