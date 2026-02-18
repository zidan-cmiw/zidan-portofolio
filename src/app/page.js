"use client";
import { useState, useEffect, useRef } from "react";
import ProjectCardHorizontal from "@/components/ProjectCardHorizontal";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  const projectsList = [
    {
      title: "CarbonTrack",
      description: "A full-stack web application to track and reduce daily carbon footprint through activity logging, gamified missions, AI eco-assistant, and social features.",
      link: "https://carbon-track-web.vercel.app/",
      image: "/projects/carbontrack.png",
      year: "2025"
    },
    {
      title: "SafeShore",
      description: "A web platform providing real-time beach safety information, education, and reporting system to increase awareness and safety for beach visitors.",
      link: "https://github.com/zidan-cmiw/safeshore",
      image: "/projects/safeshore.png",
      year: "2025"
    },
    {
      title: "Year Progress Tracker",
      description: "A simple, aesthetic web-based tool to track the current year's progress with real-time updates, dynamic year reset, and minimalist terminal-inspired dark mode design.",
      link: "https://zidan-cmiw.github.io/year-progress/",
      image: "/projects/yearprogress.png",
      year: "2025"
    },
  ];

  const [hideScrollText, setHideScrollText] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ["Full Stack Developer", "Machine Learning Engineer", "Techcomfest Team Lead"];

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-fade, .scroll-fade-left, .scroll-fade-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    <main className="text-gray-900">
      

      <section id="home" className="w-full min-h-screen bg-white text-gray-900 relative z-20 p-8 p-auto overflow-hidden">
        
        <div className="flex items-center justify-center w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 z-10 min-h-screen">
          <div className="flex flex-col items-center justify-center text-center w-full"> 
            
            <div className="flex flex-col justify-center items-center -mt-12 sm:-mt-16 md:-mt-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-3 md:mb-3 fade-in-up">
                Hi, I'm Zidan.
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6 md:mb-8 fade-in-up fade-in-delay-2">
                I am a <br />
                <span className="block mt-2">
                  <span className="text-gray-900 relative inline-block typing-wrapper">
                    <span className="typing-text">{typingText}</span>
                    <span className="typing-cursor">|</span>
                  </span>
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed mb-6 md:mb-8 fade-in-up fade-in-delay-3">
                Building Intelligent Solutions through Machine Learning and AI to Transform Data into Actionable Insights.
              </p>
            </div>
          </div>
        </div>

        <div className={`absolute top-[90vh] left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${hideScrollText ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <div
            className="flex flex-col items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-gray-500 animate-bounce cursor-pointer hover:text-black transition-colors"
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
            <span className="mt-[-10px] sm:mt-[-20px]">Scroll to explore</span>
            <span className="text-base sm:text-lg mt-3 sm:mt-5">↓</span>
          </div>
        </div>
      </section>


      <section id="about" className="w-full bg-gray-100 text-gray-900 relative z-20 p-15 p-auto">
        <div className="max-w-[1200px] mx-auto relative z-10">
            
            <div className="desktop-view">
              <div className="scroll-fade">
                <h2 className="text-5xl font-black text-gray-900 m-0 mb-6">About Me</h2>
              </div>
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="space-y-6 scroll-fade-left">
                  <div>
                    <p className="text-gray-600 text-xl leading-relaxed text-justify">
                      I am a college student majoring in Informatics Engineering Education at Yogyakarta State University. 
                      I have created several systems for universities, and competitions. 
                      I have good leadership, time management, and communication skills. 
                      Currently developing my full-stack website development skills and exploring the world of AI integration.
                    </p>
                  </div>

                  <div className="mt-4">
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

                <div className="flex justify-center lg:justify-end items-start scroll-fade-right">
                  <div className="relative" style={{ marginLeft: '40px' }}>
                    <div className="w-[370px] h-[370px] rounded-full overflow-hidden border-none shadow-2xl">
                      <img 
                        src="/profile.jpg" 
                        alt="Zidan" 
                        className="w-full h-full object-cover my-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-view">
              <div className="flex flex-col items-center">
                <div className="text-center mb-8 scroll-fade">
                  <h2 className="font-black text-gray-900 text-3xl md:text-5xl">About Me</h2>
                </div>
                
                <div className="relative flex justify-center w-full px-4 scroll-fade" style={{ marginTop: '32px', marginBottom: '32px' }}>
                  <div className="overflow-hidden shadow-xl" style={{ 
                    width: '100%',
                    maxWidth: '300px',
                    aspectRatio: '1/1'
                  }}>
                    <img src="/profile.jpg" alt="Zidan" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="w-full mt-8 mb-8 scroll-fade">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
                    I am a college student majoring in Informatics Engineering Education at Yogyakarta State University. 
                    I have created several systems for universities, and competitions. 
                    I have good leadership, time management, and communication skills. 
                    Currently developing my full-stack website development skills and exploring the world of AI integration.
                  </p>
                </div>

                <div className="w-full flex justify-center" style={{ marginTop: '32px' }}>
                  <button 
                    className="download-cv-btn w-full max-w-[280px]"
                    style={{ justifyContent: 'center' }}
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
            </div>

        </div>
      </section>


      <section id="projects" className="w-full bg-white text-gray-900 p-15 p-auto relative z-20">
        <div className="max-w-[1200px] mx-auto w-full box-border">
          <div className="mb-10 scroll-fade">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 m-0">Projects</h2>
            <p className="text-gray-600 text-base md:text-lg mt-4">
              There are some of my projects, <a href="https://github.com/zidan-cmiw" target="_blank" rel="noopener noreferrer" className="underline text-gray-900 font-semibold hover:text-gray-700 transition-colors">visit my Github</a> to see the others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-fade">
            {projectsList.map((project, index) => (
              <ProjectCardHorizontal 
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
                year={project.year}
              />
            ))}
          </div>
        </div>
      </section>


      <section id="gallery" className="w-full bg-gray-100 text-gray-900 relative z-20 p-15 p-auto">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-10 z-21 scroll-fade">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 m-0">Gallery</h2>
            <p className="text-gray-600 text-base md:text-lg mt-4">
              My certificates, achievements, and memorable moments.
            </p>
          </div>

        </div>
      </section>


      <section id="contact" className="w-full bg-white text-gray-900 relative z-20 p-15 p-auto">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-10 z-21 scroll-fade">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 m-0">Gallery</h2>
            <p className="text-gray-600 text-base md:text-lg mt-4">
              My certificates, achievements, and memorable moments.
            </p>
          </div>

        </div>
      </section>

      <style jsx>{`
        .typing-wrapper {
          display: inline-flex;
          align-items: center;
        }
        .typing-text {
          display: inline-block;
          min-width: 20px;
        }
        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          font-weight: 400;
          animation: blink 0.8s infinite;
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </main>
  );
}