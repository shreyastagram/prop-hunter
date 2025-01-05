'use client'
import Link from "next/link";
import { Button } from "@mui/material"; // Importing the Material-UI Button
import styles from "./Footer.module.css";

export default function Footer({ id }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id={id} className={styles.footer}>
      <div className={styles.left}>
        <p>© 2025 PROP-hunter. All rights reserved.</p>
      </div>
      <div className={styles.right}>
        <div className={styles.socialLinks}>
          <Link href="https://www.linkedin.com/company/prop-hunter/?originalSubdomain=in" passHref>
            <div className={styles.icon}>LinkedIn</div>
          </Link>
          <Link href="https://www.instagram.com/prophunter.pune/" passHref>
            <div className={styles.icon}>Instagram</div>
          </Link>
          <Link href="https://www.facebook.com/prophunterPune/" passHref>
            <div className={styles.icon}>Facebook</div>
          </Link>

          {/* Call Us link styled as a button */}
          <Link href="tel:+1234567890" passHref>
            <div className={styles.callUsButton}>Call Us</div>
          </Link>
        </div>
        <Button
          onClick={scrollToTop}
          variant="contained"
          color="primary"
          className={styles.toTopButton}
        >
          Back to Top
        </Button>
      </div>
    </div>
  );
}
