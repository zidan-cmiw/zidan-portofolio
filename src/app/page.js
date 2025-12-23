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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideScrollText(true);
      } else {
        setHideScrollText(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white text-black min-w-[1280px]">
      
      {/* 1. HERO SECTION (HITAM - SESUAI KODEMU) */}
      <section id="home" className="w-full h-screen bg-[#050505] text-[#ededed] flex flex-col justify-between overflow-hidden">
        
        {/* Spacer Atas */}
        <div className="h-24"></div> 
        
        {/* Container Utama (1200px) */}
        <div className="w-full max-w-[1200px] mx-auto px-12 grid grid-cols-2 gap-16 items-center z-10"> 
          
          {/* Kiri */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-medium text-gray-400 mb-6 animate-fadeIn">
              Hi, I'm <span className="text-white font-bold">Zidan</span>.
            </h2>
            <h1 className="text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
              I am a <br />
              <div className="flex items-center mt-2 h-[1.3em]"> 
                <span className="text-[#00ff44] relative inline-block">
                  <span className="typing-text"></span>
                </span>
                <span className="ml-3 w-3 h-[0.7em] bg-[#00ff44] blinking-cursor"></span>
              </div>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Building high-performance web applications with <span className="text-white font-bold">Next.js</span> and <span className="text-white font-bold">AI</span> integration.
            </p>
          </div>

          {/* Kanan */}
          <div className="flex justify-end relative">
            <div className="absolute top-0 right-10 w-80 h-80 bg-[#00ff44] blur-[150px] opacity-15 rounded-full pointer-events-none"></div>
            <div className="relative w-[500px] bg-[#0a0a0a] border border-[#222] rounded-xl shadow-2xl overflow-hidden hover:border-[#333] transition-colors duration-300">
              <div className="bg-[#111] px-5 py-4 flex items-center gap-2 border-b border-[#222]">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-auto text-xs text-gray-500 font-mono">zidan.config.js</div>
              </div>
              <div className="p-8 font-mono text-[15px] leading-loose text-gray-400">
                <p><span className="text-purple-400">const</span> <span className="text-yellow-200">Developer</span> = <span className="text-blue-400">{`{`}</span></p>
                <p className="pl-6">name: <span className="text-green-400">"Muhammad Zidane"</span>,</p>
                <p className="pl-6">role: <span className="text-green-400">"Full Stack Dev"</span>,</p>
                <p className="pl-6">skills: <span className="text-blue-400">[</span></p>
                <p className="pl-10"><span className="text-orange-300">"Next.js"</span>, <span className="text-orange-300">"React"</span>, <span className="text-orange-300">"AI"</span></p>
                <p className="pl-6"><span className="text-blue-400">]</span>,</p>
                <p className="pl-6">active: <span className="text-purple-400">true</span></p>
                <p><span className="text-blue-400">{`}`}</span>;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`w-full max-w-[1200px] mx-auto px-12 pb-12 z-20 transition-opacity duration-500 ${hideScrollText ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] uppercase text-gray-500 animate-bounce cursor-pointer hover:text-white transition-colors">
            <span>Scroll to explore</span>
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (HITAM - PANJANG KE BAWAH) */}
      {/* pb-64: Ini yang bikin cardnya PANJANG ke bawah, memberi jarak lega buat skill */}
      <section id="about" className="pt-24 pb-64 px-12 bg-[#050505] text-white">
        
        {/* Gunakan max-w-[1200px] biar LURUS sama Hero */}
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* KOLOM KIRI (Deskripsi) */}
          <div className="lg:col-span-8">
            <p className="text-4xl md:text-5xl leading-[1.4] font-medium text-[#999]">
              I am currently a <span className="text-white font-bold border-b-2 border-[#00ff44]">Beginner Programmer</span> exploring the fundamentals of web engineering.
              <br /><br />
              Through my university journey, I’ve started building projects like
              <span className="text-white font-bold mx-2">CarbonTrack</span>
              and
              <span className="text-white font-bold mx-2">FoodLover AI</span>.
              <br /><br />
              I believe in <span className="italic text-white">learning by doing</span>, constantly experimenting with <span className="text-white font-bold">Next.js</span> code and algorithms.
            </p>
          </div>

          {/* KOLOM KANAN (Tech Stack) */}
          <div className="lg:col-span-4 pl-0 lg:pl-10 pt-4"> 
             <div className="flex flex-col gap-10">
                
                {/* Languages - STYLE DISAMAKAN DENGAN HERO ("Hi, I'm Zidan") */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS" />
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                    <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
                    <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                    <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                  </div>
                </div>

                {/* Frameworks - STYLE SAMA */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Frameworks & Libraries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node" />
                    <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next" />
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
                  </div>
                </div>

                {/* Tools - STYLE SAMA */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Tools & Databases
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                    <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                    <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VSCode" />
                  </div>
                </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. PROJECTS SECTION (PUTIH) */}
      <section id="projects" className="py-32 px-12 bg-white text-black">
        <div className="w-full max-w-[1200px] mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-400 mb-20">02 — Selected Works</h2>
          <div className="flex flex-col gap-20">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION (PUTIH) */}
      <section id="contact" className="py-32 px-12 border-t border-gray-100 text-center bg-white text-black">
        <div className="w-full max-w-[1200px] mx-auto">
          <h2 className="text-8xl font-black tracking-tighter mb-24 text-gray-900">
            LET'S TALK<span className="text-[#00ff44]">.</span>
          </h2>
          <SocialLinks />
          <p className="mt-32 text-gray-400 text-xs font-bold tracking-[0.5em] uppercase">
            © 2025 ZIDAN PORTFOLIO
          </p>
        </div>
      </section>

      <style jsx>{`
        .typing-text::after {
          content: "Full Stack Developer";
          animation: changeText 9s infinite linear;
        }
        @keyframes changeText {
          0%, 50% { content: "Full Stack Developer"; }
          53%, 100% { content: "Techcomfest Team Lead"; }
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