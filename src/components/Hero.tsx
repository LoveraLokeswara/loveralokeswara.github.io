"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      <div className="text-center max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-border">
              <Image
                src="/FullSizeRender.jpeg"
                alt="Lovera Lokeswara"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Name and Bio */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-shadow-lg text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            >
              Lovera Lokeswara
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl space-y-4"
            >
              <p>
                Hi there 👋 — I'm passionate about turning ideas into meaningful digital experiences.
              </p>
              <p>
                With a First Class Honors degree in Data Science & Technology from HKUST and soon starting my Master's in Data Science & AI at the University of Waterloo (so excited 🤩), I enjoy exploring the intersection of data, statistics, and machine learning to uncover insights and build intelligent, human-centered solutions.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors duration-300 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero; 