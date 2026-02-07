"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const container = useRef();
  

  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const detectActiveSection = () => {
      const sections = ["home", "about", "projects", "contact"];
      let currentSection = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const navbarHeight = 80;
          
          if (rect.top <= navbarHeight + 100 && rect.bottom > navbarHeight + 50) {
            currentSection = sectionId;
          }
        }
      });

      return currentSection;
    };

    const detectInitialSection = () => {
      const initialSection = detectActiveSection();
      setActiveLink(initialSection);
    };

    detectInitialSection();
    setTimeout(detectInitialSection, 100);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      const currentSection = detectActiveSection();
      setActiveLink(currentSection);
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
      backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 1)",
      backdropFilter: isScrolled ? "blur(12px)" : "none", 
      borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.1)" : "none", 
      boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
    },
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
      color: "black",
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
      color: "black", 
    },
  };

  return (
    <div ref={container}>
      <nav style={styles.navbar}>
        <div style={styles.container}>
          
          <div className="nav-item" style={styles.logo}>
            <img 
              src="/logo.png" 
              alt="Zidan Logo" 
              style={{ 
                height: '30px', 
                width: 'auto',
                cursor: 'pointer'
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>
            <div style={styles.menu}>
            {["home", "about", "projects", "contact"].map((item, i) => {
              const isActive = activeLink === item;
              const textColor = isActive ? "#000000" : "#000000";

              return (
                <a 
                  key={i} 
                  href={`#${item}`} 
                  style={{
                    ...styles.link,
                    color: textColor,
                    borderBottom: isActive ? "2px solid #000000" : "2px solid transparent",
                    opacity: isActive ? 1 : 0.6 
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(item);
                    const element = document.getElementById(item);
                    if (element) {
                      const navbarHeight = 80;
                      const extraOffset = (item === 'about' || item === 'projects') ? 0 : 50;
                      const offsetPosition = element.offsetTop - navbarHeight - extraOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = 1}
                  onMouseLeave={(e) => { if(!isActive) e.target.style.opacity = 0.6 }}
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