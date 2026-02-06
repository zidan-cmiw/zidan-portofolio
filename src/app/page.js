"use client";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  const projects = [
    { title: "CarbonTrack", tech: "Next.js • Team Lead", description: "Leader-led carbon footprint tracker developed for the Techcomfest 2026 competition.", link: "#" },
    { title: "FoodLover AI", tech: "Python • University", description: "AI-powered recipe assistant featuring Neural Network integration.", link: "#" },
    { title: "Year Progress", tech: "Vanilla JS • Personal", description: "Interactive visualizer that gamifies your progress through the current year.", link: "#" }
  ];

  const [hideScrollText, setHideScrollText] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ["Full Stack Developer", "Machine Learning Engineer", "Techcomfest Team Lead"];

  useEffect(() => {
    const checkScrollText = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        if (window.scrollY > 50 || window.scrollY + window.innerHeight / 2 > homeSectionBottom) {
          setHideScrollText(true);
        } else {
          setHideScrollText(false);
        }
      }
    };

    checkScrollText();

    const handleScroll = () => {
      checkScrollText();
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % textArray.length;
      const fullText = textArray[currentIndex];

      setTypingText(
        isDeleting
          ? fullText.substring(0, typingText.length - 1)
          : fullText.substring(0, typingText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && typingText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typingText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, loopNum, typingSpeed]);

  return (
    <main className="text-black">
      

      <section id="home" className="w-full min-h-screen bg-white text-black relative z-20 overflow-hidden">
        

        <div className="flex items-center justify-center w-full max-w-[1200px] mx-auto px-12 z-10 min-h-screen">
          <div className="flex flex-col items-center justify-center text-center w-full"> 
            

            <div className="flex flex-col justify-center items-center" style={{ marginTop: '-80px' }}>
              <h2 className="text-[48px] font-medium text-gray-600 mb-6 animate-fadeIn">
                Hi, I'm <span className="text-black font-bold">Zidan</span>.
              </h2>
              <h1 className="text-[60px] font-bold tracking-tight text-black leading-[1.1] mb-8">
                I am a <br />
                <div className="flex items-center justify-center mt-2 h-[1.3em]"> 
                  <span className="text-black relative inline-block">
                    <span className="typing-text">{typingText}</span>
                  </span>
                  <span className="ml-3 w-3 h-[0.7em] bg-black blinking-cursor"></span>
                </div>
              </h1>
              <p className="text-[20px] text-gray-600 max-w-2xl leading-relaxed mb-8">
                Building Intelligent Solutions through Machine Learning and AI to Transform Data into Actionable Insights.
              </p>
            </div>
          </div>
        </div>

        <div className={`absolute top-[90vh] left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${hideScrollText ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <div 
            className="flex flex-col items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-gray-500 animate-bounce cursor-pointer hover:text-black transition-colors"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                const navbarHeight = 80;
                const offsetPosition = element.offsetTop - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <span className="mt-[-20px]">Scroll to explore</span>
            <span className="text-lg" style={{ marginTop: '20px' }}>↓</span>
          </div>
        </div>
      </section>


      <section id="about" className="w-full bg-gray-100 text-black relative z-20 overflow-hidden" style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="w-full max-w-[1200px] mx-auto px-12 relative z-10">
            
            <div style={{ marginBottom: '16px' }}>
              <h2 className="text-[60px] font-black text-black" style={{ margin: 0 }}>About Me</h2>
            </div>
              <div className="grid grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 text-[20px] leading-relaxed text-justify" style={{ marginTop: '1px' }}>
                    I am a college student majoring in <span className="text-black font-semibold">Informatics Engineering Education</span> at <span className="text-black font-semibold">Yogyakarta State University</span>. 
                    I have created several systems for universities, and competitions. 
                    I have good leadership, time management, and communication skills. 
                    Currently developing my <span className="text-black font-semibold">full-stack website development skills</span> and exploring the world of <span className="text-black font-semibold">AI integration</span>.
                  </p>
                </div>

                <div className="pt-4" style={{ marginTop: '60px' }}>
                  <button 
                    className="download-cv-btn"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/cv.pdf';
                      link.download = 'Zidan_CV.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    Download My CV
                  </button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end items-start">
                <div className="relative mt-[-80px]">
                  <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-1 border-gray-300 shadow-2xl">
                    <img 
                      src="/profile.jpg" 
                      alt="Zidan" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-200 rounded-full -z-10"></div>
                </div>
              </div>

            </div>

        </div>
      </section>


      <section id="projects" className="w-full bg-white text-black relative z-20 overflow-hidden" style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '80px', paddingBottom: '80px' }}>"
        <div className="w-full max-w-[1200px] mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-600 mb-20">02 — Selected Works</h2>
          <div className="flex flex-col gap-20">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>


      <section id="contact" className="py-32 px-12 border-t border-gray-200 text-center bg-gray-100 text-black">
        <div className="w-full max-w-[1200px] mx-auto">
          <h2 className="text-[60px] font-black tracking-tighter mb-24 text-black">
            LET'S TALK<span className="text-gray-400">.</span>
          </h2>
          <SocialLinks />
          <p className="mt-32 text-gray-600 text-[20px] font-bold tracking-[0-5em] uppercase">
            © 2025 ZIDAN PORTFOLIO
          </p>
        </div>
      </section>

      <style jsx>{`
        .typing-text {
          display: inline-block;
          min-width: 20px;
        }
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </main>
  );
}
