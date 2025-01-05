'use client'
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styles from "./Header.module.css"; 
import { useState, useEffect } from "react";

export default function Header({ id }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ["hero", "features", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
        }
        return false;
      });
      setActiveSection(currentSection || "hero");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      id={id}
      position="fixed"
      sx={{
        background: scrolled
          ? "linear-gradient(to right, #111, #555)"  // Gradient on scroll
          : "#333", // Dark background when not scrolled
        color: "white", // White text color
        boxShadow: scrolled ? "0px 6px 12px rgba(0, 0, 0, 0.3)" : "0px 4px 8px rgba(0, 0, 0, 0.2)", // Box shadow
        padding: "10px 30px", // Padding for AppBar
      }}
    >
      <Toolbar className={styles.toolbar}>
        <div className={styles.logoContainer}>
          <img
            src="/prop-hunter.png"
            alt="PROP-hunter Logo"
            className={styles.logoImage}
          />
          <Typography variant="h6" className={styles.logoText}>
            PROP-hunter
          </Typography>
        </div>
        <nav className={styles.navLinks}>
          <Button
            color="inherit"
            className={`${styles.navButton} ${
              activeSection === "hero" ? styles.active : ""
            }`}
            href="#hero"
          >
            Home
          </Button>
          <Button
            color="inherit"
            className={`${styles.navButton} ${
              activeSection === "features" ? styles.active : ""
            }`}
            href="#features"
          >
            About
          </Button>
          <Button
            color="inherit"
            className={`${styles.navButton} ${
              activeSection === "contact" ? styles.active : ""
            }`}
            href="#contact"
          >
            Contact
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
