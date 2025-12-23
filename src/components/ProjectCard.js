"use client";

export default function ProjectCard({ title, tech, description, link }) {
  return (
    <a 
      href={link} 
      className="group block w-full border-b border-gray-200 pb-12 hover:border-black transition-colors duration-500"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        
        {/* JUDUL: Responsif (Besar di Laptop, Sedang di HP) */}
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 group-hover:text-[#008f26] transition-colors duration-300">
          {title}
        </h3>

        {/* TECH STACK: Ukuran menyesuaikan */}
        <span className="px-3 py-1 rounded-full border border-gray-200 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500">
          {tech}
        </span>
      </div>

      {/* DESKRIPSI: Responsif (Font membesar di layar lebar) */}
      <div className="max-w-2xl">
        <p className="text-lg md:text-xl text-gray-500 group-hover:text-black transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Tombol Panah (Muncul pas hover) */}
      <div className="mt-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-[#008f26] font-bold text-sm tracking-widest uppercase">
        View Project →
      </div>
    </a>
  );
}