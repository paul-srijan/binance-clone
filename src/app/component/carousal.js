// import Section1 from "./home/section1.js";
import styles from "../../app/styles/carousal.module.css";


export default function Carousal() {
  return (
    <main className={styles.Carousal}>

    <img src="binanceIMG1.png" className={styles.binanceImg}></img>
    <div className={styles.carousalButtons}>
        <button className={styles.active}></button>
           <button></button>
              <button></button>
                 <button></button>
                 <button></button>
                 <button></button>
                

    </div>

    </main>
  );
}