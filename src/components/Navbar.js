"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const container = useRef();
  

  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

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
      transition: "all 0.4s ease", 
      backgroundColor: isScrolled ? "rgba(5, 5, 5, 0.85)" : "transparent",
      backdropFilter: isScrolled ? "blur(12px)" : "none", 
      borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.05)" : "none", },
    container: {
      width: "100%",
      maxWidth: "1400px",
      padding: "10px 127px",
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
      color: "white",
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
      color: "white", 
    },
  };

  return (
    <div ref={container}>
      <nav style={styles.navbar}>
        <div style={styles.container}>
          
          <div className="nav-item" style={styles.logo}>
            ZIDAN<span style={{ color: "#00ff44" }}>.</span>
          </div>
            <div style={styles.menu}>
            {["home", "about", "projects", "contact"].map((item, i) => {
              const isActive = activeLink === item;
              const textColor = isActive ? "#00ff44" : "white";

              return (
                <a 
                  key={i} 
                  href={`#${item}`} 
                  style={{
                    ...styles.link,
                    color: textColor,
                    borderBottom: isActive ? "2px solid #00ff44" : "2px solid transparent",
                    opacity: isActive ? 1 : 0.8 
                  }}
                  onClick={() => setActiveLink(item)}
                  onMouseEnter={(e) => e.target.style.opacity = 1}
                  onMouseLeave={(e) => { if(!isActive) e.target.style.opacity = 0.8 }}
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