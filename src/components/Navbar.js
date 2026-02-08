"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const container = useRef();
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(undefined);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
      padding: "10px 20px",
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
      zIndex: 10000,
    },
    menu: {
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
    hamburger: {
      flexDirection: "column",
      justifyContent: "center",
      gap: "5px",
      cursor: "pointer",
      zIndex: 10000,
      padding: "8px",
      width: "40px",
      height: "40px",
    },
    hamburgerLine: {
      width: "24px",
      height: "2.5px",
      backgroundColor: "black",
      borderRadius: "2px",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      transformOrigin: "center",
    },
    mobileMenu: {
      position: "fixed",
      top: "80px",
      left: 0,
      width: "100%",
      height: "auto",
      maxHeight: "calc(100vh - 80px)",
      backgroundColor: "rgba(40, 40, 40, 0.98)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      gap: "12px",
      padding: "30px 30px",
      transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: 9998,
      overflowY: "auto",
    },
    mobileLink: {
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "1.5px",
      textDecoration: "none",
      color: "white",
      transition: "all 0.3s",
      cursor: "pointer",
      width: "100%",
      userSelect: "none",
      WebkitUserSelect: "none",
      WebkitTapHighlightColor: "transparent",
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
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            />
          </div>

          {(isMobile === false || isMobile === undefined) && (
            <div style={{...styles.menu, display: 'flex', visibility: isMobile === undefined ? 'hidden' : 'visible'}}>
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
          )}

          {isMobile === true && (
            <div 
              style={{...styles.hamburger, display: 'flex'}} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div style={{
                ...styles.hamburgerLine,
                transform: isMobileMenuOpen ? "translateY(7.5px) rotate(45deg)" : "translateY(0) rotate(0)"
              }}></div>
              <div style={{
                ...styles.hamburgerLine,
                opacity: isMobileMenuOpen ? 0 : 1,
                transform: "translateY(0)"
              }}></div>
              <div style={{
                ...styles.hamburgerLine,
                transform: isMobileMenuOpen ? "translateY(-7.5px) rotate(-45deg)" : "translateY(0) rotate(0)"
              }}></div>
            </div>
          )}

        </div>
      </nav>

      {isMobile === true && (
        <div style={styles.mobileMenu}>
          {["home", "about", "projects", "contact"].map((item, i) => {
            const isActive = activeLink === item;
            
            return (
              <a 
                key={i} 
                href={`#${item}`} 
                style={{
                  ...styles.mobileLink,
                  opacity: isActive ? 1 : 0.7,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(item);
                  setIsMobileMenuOpen(false);
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
                onMouseLeave={(e) => { if(!isActive) e.target.style.opacity = 0.7 }}
              >
                {item.toUpperCase()}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}