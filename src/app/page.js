"use client";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import ProjectCardHorizontal from "@/components/ProjectCardHorizontal";
import SocialLinks from "@/components/SocialLinks";
import Guestbook from "@/components/Guestbook";

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

  const galleryItems = [
    { id: 1, category: 'certificates', image: '/gallery/certificates/cert1.jpg' },
    { id: 2, category: 'certificates', image: '/gallery/certificates/cert2.png' },
    { id: 3, category: 'certificates', image: '/gallery/certificates/cert3.png' },
    { id: 4, category: 'achievements', image: '/gallery/achievements/achievement1.jpg' },
    { id: 5, category: 'achievements', image: '/gallery/achievements/achievement2.jpg' },
    { id: 6, category: 'achievements', image: '/gallery/achievements/achievement3.jpg' },
    { id: 7, category: 'random', image: '/gallery/random/photo1.jpg' },
    { id: 8, category: 'random', image: '/gallery/random/photo2.jpg' },
    { id: 9, category: 'random', image: '/gallery/random/photo3.jpg' },
    { id: 10, category: 'random', image: '/gallery/random/photo4.jpg' },
  ];

  const [hideScrollText, setHideScrollText] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredGallery, setFilteredGallery] = useState(galleryItems);
  const [selectedImage, setSelectedImage] = useState(null);

  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState({ type: '', message: '' });
  const contactFormRef = useRef();

  const textArray = ["Full Stack Developer", "Machine Learning Engineer", "Techcomfest Team Lead"];

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setEmailStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    setSendingEmail(true);
    setEmailStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        contactFormRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setEmailStatus({ type: 'success', message: '✓ Message sent successfully! I\'ll get back to you soon.' });
        setContactForm({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setEmailStatus({ type: 'error', message: '✗ Failed to send message. Please try again or contact me directly via email.' });
    } finally {
      setSendingEmail(false);
      setTimeout(() => setEmailStatus({ type: '', message: '' }), 5000);
    }
  };

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredGallery(galleryItems);
    } else {
      setFilteredGallery(galleryItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

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
                        src="/profile.jpeg" 
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
                    <img src="/profile.jpeg" alt="Zidan" className="w-full h-full object-cover" />
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

          <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start scroll-fade">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-200 shadow-md'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('certificates')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'certificates'
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-200 shadow-md'
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => setActiveFilter('achievements')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'achievements'
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-200 shadow-md'
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveFilter('random')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'random'
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-200 shadow-md'
              }`}
            >
              Random Photos
            </button>
          </div>

          
          <div className="masonry-grid scroll-fade">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className="masonry-item group cursor-pointer"
                onClick={() => setSelectedImage(item)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt="Gallery image"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EImage%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-16 scroll-fade">
              <p className="text-gray-500 text-lg">No items found in this category.</p>
            </div>
          )}

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 pt-25 p-auto animate-fadeIn"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.image}
                alt="Gallery image"
                className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </section>


      <section id="contact" className="w-full bg-white text-gray-900 relative z-20 p-15 p-auto">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-10 z-21 scroll-fade">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 m-0">Contact Me</h2>
            <p className="text-gray-600 text-base md:text-lg mt-4">
              Let's connect! Feel free to reach out for collaborations or just a friendly chat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-fade">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:b3nny.haryant0@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                    b3nny.haryant0@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-600">Yogyakarta, Indonesia</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-bold text-lg mb-4">Follow Me</h3>
                <SocialLinks />
              </div>
            </div>

            <form ref={contactFormRef} onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="from_name" className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Your name"
                  disabled={sendingEmail}
                  required
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  disabled={sendingEmail}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                  disabled={sendingEmail}
                  required
                ></textarea>
              </div>

              {emailStatus.message && (
                <div className={`px-4 py-3 rounded-lg ${
                  emailStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  {emailStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={sendingEmail}
                className="w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {sendingEmail ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="mt-16 scroll-fade">
            <Guestbook />
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