"use client";

export default function ProjectCard({ title, tech, description, link }) {
  return (
    <div className="group py-12 border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-500 cursor-pointer">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="max-w-2xl">
          <span className="text-[10px] text-[#008f26] font-bold tracking-[0.2em] uppercase mb-3 block">{tech}</span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
          <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
        </div>
        
        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 text-gray-300 group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-500">
          <span className="text-xl">↗</span>
        </div>
      </div>
    </div>
  );
}