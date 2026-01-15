"use client";

import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Scroll-based animations
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Navigation items
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      >
        {/* Animated Tech Background */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95" />
          
          {/* Animated Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.1) 2px, transparent 2px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.1) 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px',
            animation: 'grid-move 20s linear infinite'
          }} />
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <style jsx>{`
          @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 100px 100px; }
          }
        `}</style>

        {/* Fixed Navigation Bar - Tech Style */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <span className="text-white font-bold text-lg">LL</span>
                </div>
                <span className="text-cyan-400 font-bold text-lg hidden sm:block">Lovera</span>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden md:flex items-center space-x-8"
              >
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full shadow-lg shadow-cyan-500/50" />
                  </button>
                ))}
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden relative z-50 p-2"
                aria-label="Toggle menu"
              >
                <div className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-6 h-0.5 bg-cyan-400 my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            initial={false}
            animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="block w-full text-left text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </nav>


        {/* Main Hero Content - Tech Style */}
        <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
          <motion.div className="relative text-center max-w-5xl">
            {/* Tech-styled Name */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <h1 className="text-[clamp(2.5rem,10vw,7rem)] font-bold tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Lovera Lokeswara
                  </span>
                </h1>
                {/* Glowing underline */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm"></div>
              </div>
            </motion.div>
            
            {/* Subtitle with typing effect style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <p className="text-cyan-300 text-xl md:text-3xl font-mono tracking-wide">
                <span className="text-slate-400">&gt;</span> Data Science & AI/ML Engineer
              </p>
              
              {/* Tech badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap justify-center gap-3 mt-8"
              >
                {['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-mono backdrop-blur-sm hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                    style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Decorative code brackets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="absolute -left-4 top-1/2 -translate-y-1/2 text-cyan-500/30 text-6xl font-mono hidden lg:block"
            >
              {'<'}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 text-cyan-500/30 text-6xl font-mono hidden lg:block"
            >
              {'>'}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Tech Style */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={() => scrollToSection('about')}
          style={{ opacity: textOpacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 animate-bounce z-30 flex flex-col items-center gap-2"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-mono text-slate-400">scroll down</span>
          <ChevronDown size={32} />
        </motion.button>

      </section>

      {/* Content Section - Tech Style */}
      <motion.div className="bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* About Section Preview */}
          <motion.section
            id="about-preview"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20 bg-slate-800/50 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-cyan-500/20 relative overflow-hidden"
          >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/50"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-500/50"></div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Hi there 👋
              </span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <p className="text-lg text-slate-300 leading-relaxed">
                  Welcome to my corner of the web! I&apos;m passionate about turning ideas into meaningful digital experiences. 
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  With a First Class Honors degree in Data Science & Technology from HKUST and currently studying for my Master&apos;s in Data Science & AI at Waterloo, I enjoy exploring the intersection of data, statistics, and machine learning to uncover insights and build intelligent, human-centered solutions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative">
                  {/* Glowing frame effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-50"></div>
                  <div className="relative w-full h-96 rounded-2xl overflow-hidden border-2 border-cyan-500/30">
                    <Image
                      src="/FullSizeRender.jpeg"
                      alt="Lovera Lokeswara"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-[center_70%]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Education Section */}
          {/* <section id="education" className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Education</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900">Master's in Data Science & AI</h3>
                <p className="text-xl text-gray-600">University of Waterloo</p>
                <p className="text-gray-500">Starting Soon</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900">First Class Honors in Data Science & Technology</h3>
                <p className="text-xl text-gray-600">Hong Kong University of Science and Technology</p>
                <p className="text-gray-500">Completed</p>
              </div>
            </div>
          </section> */}

          {/* Projects Section */}
          {/* <section id="projects" className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
              {/* Add your projects here */}
              {/* <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Coming Soon</h3>
                <p className="text-gray-700">Exciting projects will be showcased here.</p>
              </div>
            </div>
          </section> */}

          {/* Experience Section */}
          {/* <section id="experience" className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Experience</h2>
            <div className="space-y-8"> */}
              {/* Add your experience here */}
              {/* <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900">Experience Coming Soon</h3>
                <p className="text-xl text-gray-600">Professional experience will be detailed here.</p>
              </div>
            </div>
          </section> */}

          {/* Contact Section */}
          {/* <section id="contact">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Contact</h2>
            <div className="text-center">
              <p className="text-xl text-gray-700 mb-8">
                Let's connect and create something amazing together.
              </p>
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                Get In Touch
              </button>
            </div>
          </section> */}
        </div>
      </motion.div>
    </>
  );
};

export default Hero; 