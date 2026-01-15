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
              href="/Lovera Lokeswara - Resume.pdf"
              download="Lovera Lokeswara - Resume.pdf"
              className="inline-flex items-center gap-2 bg-white text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-gray-100 dark:bg-black dark:text-white dark:border-white dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              Download CV
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
            className="text-shadow-md text-3xl font-bold text-foreground mb-12 text-center"
          >
            Skills & Technologies 👩‍💻
          </motion.h3>

          {/* Category Blocks */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1, ease: "easeOut" }}
                className="py-12 px-8 rounded-3xl relative overflow-hidden"
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
                  {/* Category Title */}
                  <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-xl font-bold text-foreground mb-8"
                  >
                    {category.category}
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
                        className="shadow-xl text-center space-y-2 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-border/60 hover:bg-card/90 transition-all duration-300"
                      >
                        <div className="flex justify-center text-foreground">
                          {skill.icon.startsWith('devicon-') ? (
                            <i className={`${skill.icon} text-5xl`}></i>
                          ) : (
                            <span className="text-5xl">{skill.icon}</span>
                          )}
                        </div>
                        <h5 className="text-sm font-semibold text-foreground">{skill.name}</h5>
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