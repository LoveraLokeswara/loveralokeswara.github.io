"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
        { name: 'R', icon: 'devicon-r-plain colored' },
        { name: 'SQL', icon: 'devicon-azuresqldatabase-plain colored' },
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'HTML/CSS', icon: 'devicon-html5-plain colored' },
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
        { name: 'Figma', icon: 'devicon-figma-plain colored' },
        { name: 'PowerBI', icon: 'devicon-azuresqldatabase-plain colored' },
        { name: 'Tableau', icon: 'devicon-azuresqldatabase-plain colored' },
        { name: 'MATLAB', icon: 'devicon-matlab-plain colored' },
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Oracle', icon: 'devicon-oracle-original colored' },
      ]
    },
    {
      category: "Data Science & Analytics",
      skills: [
        { name: 'Machine Learning', icon: 'devicon-tensorflow-original colored' },
        { name: 'Econometrics', icon: 'devicon-python-plain colored' },
        { name: 'Regression Analysis', icon: 'devicon-python-plain colored' },
      ]
    }
  ];

  // Flatten all skills for the show more/less functionality
  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(skill => ({ ...skill, category: cat.category }))
  );
  
  const initialSkills = allSkills.slice(0, 8);
  const additionalSkills = allSkills.slice(8);

  return (
    <section
      id="about"
      className="py-20 px-6 bg-white relative z-10"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-shadow-md text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
        >
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Profile Photo */}
          <div
            className="flex justify-center lg:justify-end lg:mr-30"
          >
            <div className="w-80 h-80 bg-muted rounded-2xl flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rectangle-full overflow-hidden ring-4 ring-offset-2 ring-gray-500 ring-offset-white">
                  <Image
                    src="/IMG_8212.jpeg"
                    alt="Lovera Lokeswara"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bio and CV */}
          <div
            className="space-y-6 lg:-ml-8"
          >
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate data scientist with internship experience spanning data analysis, data science, and software engineering, focused on creating solutions that make a real impact. I love transforming complex datasets into clear insights and building intuitive data-driven applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you can find me wandering around the city, discovering great food spots, playing board games, or having way too much fun at karaoke nights! I believe in continuous learning and keeping up with the latest trends in data science and AI.
              </p>
            </div>

            <a
              href="/[Jan 2025] Lovera Lokeswara - CV.pdf"
              download="[Jan 2025] Lovera Lokeswara - CV.pdf"
              className="inline-flex items-center gap-2 bg-white text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-gray-100 dark:bg-black dark:text-white dark:border-white dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-20 py-16 px-8 rounded-3xl relative overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%),
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
            `
          }}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 dark:from-black/10 dark:via-transparent dark:to-white/5"></div>
          
          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className="text-shadow-md text-2xl font-bold text-foreground mb-12 text-center"
            >
              Skills & Technologies 👩‍💻
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Always visible skills */}
              {initialSkills.map((skill, index) => (
                <motion.div
                  key={`initial-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05, ease: "easeOut" }}
                  className="shadow-xl text-center space-y-2 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-border/60 hover:bg-card/90 transition-all duration-300"
                >
                  <div className="flex justify-center text-foreground">
                    <i className={`${skill.icon} text-5xl`}></i>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                </motion.div>
              ))}
              
              {/* Additional skills with smooth animation */}
              <AnimatePresence>
                {showAllSkills && additionalSkills.map((skill, index) => (
                  <motion.div
                    key={`additional-${index}`}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ 
                      opacity: 0, 
                      y: -10, 
                      scale: 0.9,
                      transition: {
                        duration: 0.4,
                        delay: (additionalSkills.length - 1 - index) * 0.08, // Reverse order for exit
                        ease: "easeOut"
                      }
                    }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.08, // Normal order for entrance
                      ease: "easeOut"
                    }}
                    className="shadow-xl text-center space-y-2 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-border/60 hover:bg-card/90 transition-all duration-300"
                  >
                    <div className="flex justify-center text-foreground">
                      <i className={`${skill.icon} text-5xl`}></i>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Show More/Less Button */}
            {allSkills.length > 8 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="text-center mt-8"
              >
                <motion.button
                  onClick={() => setShowAllSkills(!showAllSkills)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-gray-100 dark:bg-black dark:text-white dark:border-white dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <motion.span
                    animate={{ rotate: showAllSkills ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                  {showAllSkills ? 'Show Less' : `Show More (${additionalSkills.length} more)`}
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 