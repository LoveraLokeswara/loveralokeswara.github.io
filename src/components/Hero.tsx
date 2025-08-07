"use client";

import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Scroll-based animations
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]); // Increase opacity as we scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);
  
  // Background positioning - fixed until past About section (around 40% scroll)
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 0.3, 0.41],
    ["fixed", "fixed", "absolute"]
  );

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
        className="relative min-h-screen overflow-hidden"
      >
        {/* Background Image */}
        <motion.div
          style={{ 
            opacity: backgroundOpacity,
            position: backgroundPosition,
          }}
          className="inset-0 z-0"
        >
          <Image
            src="/saikung_scene.jpeg" // Update with your team photo path
            alt="Team Background"
            fill
            className="object-cover object-center"
            style={{
              filter: 'blur(1.5px)',
            }}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxAAPwCdABmX/9k="
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Fixed Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center"
              >
                <Image
                  src="/LLlogo2.png"
                  alt="LL Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Desktop Navigation */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden md:flex items-center space-x-8"
              >
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden relative z-50 p-2"
                aria-label="Toggle menu"
              >
                <div className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-6 h-0.5 bg-gray-900 my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            initial={false}
            animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </nav>


        {/* Main Hero Content */}
        <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
          <motion.div className="relative text-center">
            {/* Large Transparent Text Overlay */}
            {/* <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-serif text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black leading-none tracking-tight text-transparent"
              style={{
                WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                textShadow: '0 0 40px rgba(255, 0, 0, 0.5)',
              }}
            > */}
            <motion.h1
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="text-center text-[clamp(2.5rem,10vw,8rem)] font-light italic tracking-wide text-white dark:text-white leading-tight font-[georgia]"
              style={{
                WebkitTextStroke: '2px rgba(0, 0, 0, 0.3)',
              }}
            >
              Lovera Lokeswara
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-white text-xl md:text-2xl font-light mt-4 tracking-wider"
            >
              Data Science & AI Enthusiast
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={() => scrollToSection('about')}
          style={{ opacity: textOpacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-orange-500 transition-colors duration-300 animate-bounce z-30"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </motion.button>

      </section>

      {/* White Content Section */}
      <motion.div>
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* About Section */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20 bg-white/80 p-8 rounded-lg shadow-lg backdrop-blur-sm"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-black mb-8"
            >
              Hi there 👋
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <p className="text-lg text-black mb-6">
                  Welcome to my corner of the web! I'm passionate about turning ideas into meaningful digital experiences. 
                </p>
                <p className="text-lg text-black">
                  With a First Class Honors degree in Data Science & Technology from HKUST and currently studying for my Master's in Data Science & AI at Waterloo, I enjoy exploring the intersection of data, statistics, and machine learning to uncover insights and build intelligent, human-centered solutions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/FullSizeRender.jpeg"
                    alt="Lovera Lokeswara"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-[center_70%]"
                  />
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