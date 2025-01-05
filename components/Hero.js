import styles from "./Hero.module.css";
import { Button } from "@mui/material";

export default function Hero({ id }) {
  return (
    <div id={id} className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to PROP-hunter</h1>
        <p className={styles.subtitle}>Where your dreams get a home!</p>
        <div className={styles.buttons}>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            href="tel:+11234567890"
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={styles.button}
            href="https://maps.app.goo.gl/tat1QjgSmjVpFwRz5" 
            target="_blank" 
          >
            Visit Us
          </Button>
        </div>
      </div>
    </div>
  );
}
