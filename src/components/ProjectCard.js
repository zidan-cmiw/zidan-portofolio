"use client";

export default function ProjectCard({ title, tech, description, link }) {
  return (
    <a 
      href={link} 
      className="group block w-full border-b border-gray-200 pb-12 hover:border-black transition-colors duration-500"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <h3 className="text-[60px] font-bold tracking-tight text-gray-900 group-hover:text-[#008f26] transition-colors duration-300">
          {title}
        </h3>

        <span className="px-3 py-1 rounded-full border border-gray-200 text-[20px] font-bold uppercase tracking-widest text-gray-500">
          {tech}
        </span>
      </div>
      <div className="max-w-2xl">
        <p className="text-[20px] text-gray-500 group-hover:text-black transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="mt-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-[#008f26] font-bold text-[20px] tracking-widest uppercase">
        View Project →
      </div>
    </a>
  );
}