"use client";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  const projects = [
    { 
      title: "CarbonTrack", 
      tech: "Next.js • Competition", 
      description: "Leader-led carbon footprint tracker developed for the Techcomfest 2026 competition.", 
      link: "#"
    },
    { 
      title: "FoodLover AI", 
      tech: "Python • University", 
      description: "AI-powered recipe assistant featuring Neural Network integration.", 
      link: "#"
    },
    { 
      title: "Year Progress", 
      tech: "Vanilla JS • Personal", 
      description: "Interactive visualizer that gamifies your progress through the current year.", 
      link: "#"
    }
  ];

  return (
    <main className="bg-white text-black min-h-screen">
      
      {/* 1. HERO: TEKS ANIMASI (FIXED) */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20">
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-none mb-8 text-gray-900">
          I am a <br />
          <span className="text-animation text-[#00ff44]"></span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-medium leading-relaxed mt-4">
          Building high-performance interactive experiences and leading technical teams to success.
        </p>
      </section>

      {/* 2. ABOUT */}
      <section id="about" className="py-32 px-8 md:px-16 lg:px-24 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#008f26]">01 — About</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-8">
              Muhammad Zidane <br />
              <span className="text-gray-300">Romadhona Haryanto.</span>
            </p>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
              Currently spearheading the development of <span className="text-black font-semibold">CarbonTrack</span>. I specialize in merging technical logic with premium aesthetic design.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS */}
      <section id="projects" className="py-32 px-8 md:px-16 lg:px-24 border-t border-gray-100">
        <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-300 mb-20">02 — Selected Works</h2>
        <div className="flex flex-col">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* 4. CONTACT SECTION (PERBAIKAN JARAK VERTIKAL) */}
      <section id="contact" className="py-40 px-4 md:px-16 lg:px-24 border-t border-gray-100 text-center bg-white">
        
        {/* Jarak besar di bawah Judul: mb-24 (sekitar 6rem/96px) */}
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-24 md:mb-32 text-gray-900">
          LET'S TALK<span className="text-[#00ff44]">.</span>
        </h2>
        
        {/* Komponen Link */}
        <div className="w-full">
            <SocialLinks />
        </div>

        {/* Jarak besar di atas Footer: mt-32 (sekitar 8rem/128px) */}
        <p className="mt-32 md:mt-40 text-gray-300 text-[10px] font-bold tracking-[0.5em] uppercase">
          © 2025 ZIDAN PORTFOLIO
        </p>

      </section>

      {/* STYLE CSS UNTUK ANIMASI TEKS */}
      <style jsx>{`
        .text-animation::after { content: ""; animation: roles 9s infinite; color: #008f26; }
        @keyframes roles {
          0%, 33% { content: "Full Stack Developer"; }
          34%, 66% { content: "Team Lead Techcomfest"; }
          67%, 100% { content: "System Analyst"; }
        }
        .text-animation { border-right: 4px solid #00ff44; padding-right: 15px; animation: blink 0.7s infinite; }
        @keyframes blink { 50% { border-color: transparent; } }
      `}</style>
    </main>
  );
}