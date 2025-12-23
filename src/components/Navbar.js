"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const container = useRef();
  
  // STATE
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // LOGIKA SCROLL
  useEffect(() => {
    const handleScroll = () => {
      // 1. Logika Warna Background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Logika Active Link (Spy)
      const sections = ["home", "about", "projects", "contact"];
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= -150 && rect.top < window.innerHeight / 2) {
            setActiveLink(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useGSAP(() => {
    gsap.from("nav", { 
      y: -100, 
      duration: 1, 
      ease: "power3.out" 
    });
  }, { scope: container });

  // --- STYLE ---
  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "80px",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.4s ease, box-shadow 0.4s ease",
      backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.98)" : "#050505",
      boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
    },
    container: {
      width: "100%",
      maxWidth: "1400px",
      padding: "0 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "900",
      letterSpacing: "-1px",
      textDecoration: "none",
      cursor: "pointer",
      color: isScrolled ? "black" : "white", // Logo berubah warna
      transition: "color 0.4s ease",
    },
    menu: {
      display: "flex",
      gap: "40px", 
      alignItems: "center",
    },
    link: {
      fontSize: "12px",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "2px",
      textDecoration: "none",
      transition: "all 0.3s",
      cursor: "pointer",
      paddingBottom: "5px",
      position: "relative",
      color: isScrolled ? "#000" : "#fff", 
    },
  };

  return (
    <div ref={container}>
      <nav style={styles.navbar}>
        <div style={styles.container}>
          
          {/* LOGO */}
          <div className="nav-item" style={styles.logo}>
            ZIDAN<span style={{ color: "#00ff44" }}>.</span>
          </div>

          {/* MENU (PASTI MUNCUL) */}
          <div style={styles.menu}>
            {["home", "about", "projects", "contact"].map((item, i) => {
              const isActive = activeLink === item;
              
              // Logika Warna Final
              let textColor;
              if (isActive) {
                textColor = "#00ff44"; // Kalau aktif: Hijau
              } else if (isScrolled) {
                textColor = "black";   // Kalau di bawah: Hitam
              } else {
                textColor = "white";   // Kalau di atas: Putih
              }

              return (
                <a 
                  key={i} 
                  href={`#${item}`} 
                  // Kita hapus class 'nav-item' biar gak kena efek GSAP yang salah
                  style={{
                    ...styles.link,
                    color: textColor,
                    borderBottom: isActive ? "2px solid #00ff44" : "2px solid transparent"
                  }}
                  onClick={() => setActiveLink(item)}
                >
                  {item.toUpperCase()}
                </a>
              );
            })}
          </div>

        </div>
      </nav>
    </div>
  );
}