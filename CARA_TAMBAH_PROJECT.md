# 📝 Cara Menambah Project Baru

## Langkah-langkah:

### 1️⃣ Siapkan Gambar Project
- Buka folder: `public/projects/`
- Upload gambar project kamu (format: `.jpg`, `.png`, `.webp`)
- Contoh: `public/projects/carbontrack.jpg`
- **Rekomendasi ukuran gambar**: 800x600px atau rasio 4:3

---

### 2️⃣ Edit File `src/app/page.js`

Cari bagian ini di awal file (sekitar baris 7-25):

```javascript
const projectsList = [
  {
    title: "CarbonTrack",
    description: "CarbonTrack is a comprehensive full-stack web application...",
    link: "https://carbon-track-cyan.vercel.app/",
    image: "/projects/carbontrack.jpg",
    year: "2025"
  },
  // Tambahkan project baru di sini!
];
```

### 3️⃣ Tambahkan Object Project Baru

Copy template ini dan tambahkan di dalam array `projectsList`:

```javascript
{
  title: "Nama Project Kamu",
  description: "Deskripsi lengkap project kamu. Jelaskan apa yang dibuat, teknologi apa yang dipakai, dan fitur-fitur utamanya.",
  link: "https://link-website-project-kamu.com",
  image: "/projects/nama-file-gambar.jpg",
  year: "2026"
},
```

---

## 📋 Contoh Lengkap:

```javascript
const projectsList = [
  {
    title: "CarbonTrack",
    description: "CarbonTrack is a comprehensive full-stack web application designed to empower users to track, visualize, and reduce their daily carbon footprint.",
    link: "https://carbon-track-cyan.vercel.app/",
    image: "/projects/carbontrack.jpg",
    year: "2025"
  },
  {
    title: "E-Commerce Website",
    description: "Full-stack e-commerce platform built with Next.js, featuring product catalog, shopping cart, and payment integration with Stripe.",
    link: "https://my-ecommerce.vercel.app/",
    image: "/projects/ecommerce.jpg",
    year: "2026"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing my projects and skills, built with React and Tailwind CSS.",
    link: "https://myportfolio.com",
    image: "/projects/portfolio.jpg",
    year: "2026"
  },
];
```

---

## ✅ Checklist:

- [ ] Gambar sudah di upload ke `public/projects/`
- [ ] Object project baru sudah ditambahkan ke `projectsList`
- [ ] Semua field diisi lengkap (title, description, link, image, year)
- [ ] Path gambar sudah benar (dimulai dengan `/projects/`)
- [ ] Jangan lupa **koma (,)** di akhir object!

---

## 🎨 Tips:

1. **Deskripsi**: Usahakan 2-4 kalimat, jangan terlalu panjang
2. **Gambar**: Screenshot homepage atau fitur utama project
3. **Link**: Pastikan link masih aktif dan bisa diakses
4. **Urutan**: Project terbaru di atas, project lama di bawah

---

## 🚫 File yang Sudah Dihapus:
- ~~`ProjectCard.js`~~ (tidak terpakai, sudah dihapus)

## ✨ File yang Dipakai:
- `ProjectCardHorizontal.js` - Component untuk render card project
- `page.js` - Data semua project ada di sini

---

**Selamat! Project baru kamu akan otomatis muncul di website! 🎉**
