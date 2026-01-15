"use client";

import { motion } from "framer-motion";
import { Award, MapPin } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";

const Education = () => {
  const { theme } = useTheme();
  
  const education = [
    {
      institution: "University of Waterloo",
      location: "Canada",
      degree: "Master of Data Science and Artificial Intelligence",
      gpa: "GPA: 4.00",
      program: "(Co-op program)",
      duration: "Sep 2025 - Dec 2026",
      status: "Expected",
      courses: [
        "CS 679: Neural Networks",
        "CS 738: Data Engineering for Data Science",
        "CS 794: Optimization for Data Science",
        "STAT 946: Case Studies in Data Science",
        "STAT 974: Financial Econometrics",
        "SYDE 770: Deployment of Deep Learning Models (Model Development Lifecycle)",
      ],
      icon: <Image src="/uwaterloo.png" alt="University of Waterloo" width={50} height={50} />,
    },
    {
      institution: "The Hong Kong University of Science and Technology",
      location: "Hong Kong SAR",
      degree: "Bachelor of Science in Data Science and Technology",
      gpa: "GPA: 3.70",
      duration: "Sep 2021 - Dec 2024",
      courses: [
        "COMP 3211: Fundamentals of Artificial Intelligence",
        "COMP 3311: Database Management Systems",
        "COMP 3711: Design and Analysis of Algorithms",
        "COMP 4211: Machine Learning",
        "MATH 3332: Data Analytics Tools",
        "MATH 3424: Regression Analysis",
        "MATH 3425: Stochastic Modelling",
        "MATH 4424: Multivariate Analysis",
      ],
      status: "Completed",
      distinction: "First Class Honors Graduate",
      honors: [
        "2021 Admission Scholarship Awardee (4 years)",
        "2022 Dean's List Scholar",
        "2023 Teaching Outstanding Performance Award",
        "2023-2024 Dean's List Scholar",
        "Got a perfect score in the final semester with a GPA of 4.30"
      ],
      exchange: "Selected to attend an exchange semester at the University of Waterloo, Canada during Fall 2023/24",
      icon: <Image src="/hkustlogo_no_bg_new.png" alt="HKUST" width={50} height={50} />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Theme-aware background styles
  const backgroundStyles = {
    backgroundImage: theme === 'dark' 
      ? `
          linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)),
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.08) 0%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 48, 0.08) 0%),
          radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.05) 0%)
        `
      : `
          linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)),
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 48, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.1) 0%, transparent 50%)
        `,
    backgroundSize: '100% 100%, 100% 100%, 100% 100%'
  };

  return (
    <section 
      id="education" 
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Tech background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                &lt;Education 🎓 /&gt;
              </span>
            </h2>
            <p className="text-cyan-400 font-mono text-sm mb-2">
              {'// Academic journey in Data Science & AI'}
            </p>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              My academic journey in Data Science and Artificial Intelligence
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"></div>
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-4 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400 transition-all duration-300">
                      {edu.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors font-mono">
                        <span className="text-cyan-500/50">{'> '}</span>
                        {edu.institution}
                      </h3>
                      <div className="flex items-center text-slate-400 text-sm font-mono">
                        <MapPin className="w-4 h-4 mr-1 text-cyan-500" />
                        {edu.location}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-lg text-slate-300 font-medium">
                        {edu.degree} {edu.program && <span className="text-slate-400 font-mono text-sm">{edu.program}</span>}
                      </p>
                      {edu.gpa && (
                        <p className="text-cyan-400 font-mono text-sm mt-1">{edu.gpa}</p>
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <p className="text-slate-400 font-mono text-sm">{edu.duration}</p>
                      <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-mono border ${
                        edu.status === 'Expected' 
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                          : 'bg-green-500/10 text-green-400 border-green-500/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    {edu.distinction && (
                      <div className="mb-4">
                        <div className="flex items-center text-cyan-400 mb-2 bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/30">
                          <Award className="w-4 h-4 mr-2" />
                          <span className="font-medium font-mono text-sm">{edu.distinction}</span>
                        </div>
                      </div>
                    )}

                    {edu.honors && (
                      <div className="mb-4 bg-slate-900/30 p-4 rounded-lg border border-cyan-500/20">
                        <h4 className="font-medium text-cyan-400 mb-3 font-mono text-sm">
                          <span className="text-cyan-500/50">{'// '}</span>Honors & Awards:
                        </h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                          {edu.honors.map((honor, honorIndex) => (
                            <li key={honorIndex} className="flex items-start">
                              <span className="text-cyan-500 mr-2 mt-1">▹</span>
                              <span>{honor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.courses && (
                      <div className="mb-4 bg-slate-900/30 p-4 rounded-lg border border-cyan-500/20">
                        <h4 className="font-medium text-cyan-400 mb-3 font-mono text-sm">
                          <span className="text-cyan-500/50">{'// '}</span>Key Courses:
                        </h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                          {edu.courses.map((course, courseIndex) => (
                            <li key={courseIndex} className="flex items-start">
                              <span className="text-cyan-500 mr-2 mt-1">▹</span>
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.exchange && (
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4 border border-cyan-500/30">
                        <h4 className="font-medium text-cyan-400 mb-2 font-mono text-sm">
                          <span className="text-cyan-500/50">{'// '}</span>Exchange Experience:
                        </h4>
                        <p className="text-slate-400 text-sm">{edu.exchange}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 