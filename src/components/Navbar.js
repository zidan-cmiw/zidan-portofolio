"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-black tracking-tighter text-black">
          ZIDAN<span className="text-[#00ff44]">.</span>
        </a>
        
        {/* Menu */}
        <div className="flex gap-8 md:gap-12 items-center">
          {["About", "Projects", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}