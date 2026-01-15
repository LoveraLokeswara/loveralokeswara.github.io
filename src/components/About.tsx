"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'C/C++', icon: 'devicon-cplusplus-plain colored' },
        { name: 'R', icon: 'devicon-r-plain colored' },
        { name: 'SQL', icon: 'devicon-mysql-plain colored' },
      ]
    },
      {
        category: "Tools & Technologies",
        skills: [
          { name: 'Git', icon: 'devicon-git-plain colored' },
          { name: 'Figma', icon: 'devicon-figma-plain colored' },
          { name: 'PowerBI', icon: '📊' },
          { name: 'Tableau', icon: '📈' },
          { name: 'MATLAB', icon: 'devicon-matlab-plain colored' },
          { name: 'RStudio', icon: 'devicon-rstudio-plain colored' },
          { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
          { name: 'Postman', icon: 'devicon-postman-plain colored' },
          { name: 'VAPI', icon: '🎤' },
          { name: 'ElevenLabs', icon: '🔊' },
          { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
          { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        ]
      },
      {
        category: "Data & ML Engineering",
        skills: [
          { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
          { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
          { name: 'Keras', icon: 'devicon-keras-plain colored' },
          { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain colored' },
          { name: 'Pandas', icon: 'devicon-pandas-plain colored' },
          { name: 'NumPy', icon: 'devicon-numpy-plain colored' },
          { name: 'Matplotlib', icon: 'devicon-matplotlib-plain colored' },
          { name: 'Seaborn', icon: '📊' },
          { name: 'SciPy', icon: '🔬' },
          { name: 'MLflow', icon: '🔄' },
        ]
      },
    {
      category: "Data Science & Analytics",
      skills: [
        { name: 'Machine Learning', icon: 'devicon-tensorflow-original colored' },
        { name: 'Deep Learning', icon: 'devicon-pytorch-original colored' },
        { name: 'Econometrics', icon: 'devicon-r-plain colored' },
        { name: 'Bayesian Statistics', icon: 'devicon-r-plain colored' },
        { name: 'Financial Econometrics', icon: 'devicon-r-plain colored' },
        { name: 'Regression Analysis', icon: 'devicon-python-plain colored' },
        { name: 'Time Series Analysis', icon: 'devicon-python-plain colored' },
        { name: 'Data Engineering', icon: 'devicon-python-plain colored' },
        
      ]
    }
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800 relative z-10 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            &lt;About Me /&gt;
          </span>
        </h2>
        <p className="text-center text-cyan-400 font-mono text-sm mb-16">
          {'// Building intelligent solutions with data'}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Photo with tech frame */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
              
              {/* Tech corner decorations */}
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400 z-10"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400 z-10"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400 z-10"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400 z-10"></div>
                
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/50">
                  <Image
                    src="/IMG_8212.jpeg"
                    alt="Lovera Lokeswara"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                  {/* Scanline effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio and CV with tech styling */}
          <div className="space-y-6 lg:-ml-8">
            <div className="space-y-4 bg-slate-800/30 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <p className="text-lg text-slate-300 leading-relaxed">
                <span className="text-cyan-400 font-mono text-sm">{'> '}</span>
                I&apos;m a passionate data scientist with internship experience spanning data analysis, data science, and software engineering, focused on creating solutions that make a real impact. I love transforming complex datasets into clear insights and building intuitive data-driven applications.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                <span className="text-cyan-400 font-mono text-sm">{'> '}</span>
                When I&apos;m not coding, you can find me wandering around the city, discovering great food spots, playing board games, or having way too much fun at karaoke nights! I believe in continuous learning and keeping up with the latest trends in data science and AI.
              </p>
            </div>

            <a
              href="/Lovera Lokeswara - Resume.pdf"
              download="Lovera Lokeswara - Resume.pdf"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium border border-cyan-400/50"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-3xl font-bold mb-4 text-center"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Technologies 👩‍💻
            </span>
          </motion.h3>
          <p className="text-center text-cyan-400 font-mono text-sm mb-12">
            {'// Tech stack & expertise'}
          </p>

          {/* Category Blocks */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1, ease: "easeOut" }}
                className="py-12 px-8 rounded-3xl relative overflow-hidden bg-slate-800/30 border border-cyan-500/20 backdrop-blur-sm"
              >
                {/* Tech grid pattern overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `
                    linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/50"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/50"></div>
                
                <div className="relative z-10">
                  {/* Category Title */}
                  <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-xl font-bold mb-8"
                  >
                    <span className="text-cyan-400 font-mono">{'// '}</span>
                    <span className="text-slate-200">{category.category}</span>
                  </motion.h4>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={`${category.category}-${skillIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05, ease: "easeOut" }}
                        className="group text-center space-y-2 p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden"
                      >
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                        
                        <div className="relative flex justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          {skill.icon.startsWith('devicon-') ? (
                            <i className={`${skill.icon} text-5xl`}></i>
                          ) : (
                            <span className="text-5xl">{skill.icon}</span>
                          )}
                        </div>
                        <h5 className="relative text-sm font-semibold text-slate-300 font-mono">{skill.name}</h5>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 