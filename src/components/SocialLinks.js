"use client";

export default function SocialLinks() {
  const links = [
    { name: "GITHUB", url: "https://github.com/zidan-cmiw" }, 
    { name: "LINKEDIN", url: "#" },
    { name: "INSTAGRAM", url: "#" },
    { name: "FACEBOOK", url: "#" },
    { name: "WHATSAPP", url: "https://wa.me/6281234567890" },
    { name: "EMAIL", url: "mailto:emailmu@contoh.com" }
  ];

  return (
    <div className="w-full flex justify-center px-4">
      {/* PERUBAHAN PENTING:
         1. gap-x-12 (HP) -> gap-x-24 (Laptop): Jarak antar kata sangat jauh.
         2. leading-loose: Jarak antar baris jika turun ke bawah lebih lega.
      */}
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-24">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            className="group relative text-[10px] md:text-xs font-bold tracking-[0.25em] text-gray-500 hover:text-black transition-all duration-500 uppercase no-underline"
          >
            {link.name}
            <span className="absolute -bottom-3 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </div>
  );
}