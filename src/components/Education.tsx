"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";

const Education = () => {
  const { theme } = useTheme();
  
  const education = [
    {
      institution: "University of Waterloo",
      location: "Canada",
      degree: "Master of Data Science and Artificial Intelligence",
      program: "(co-op program)",
      duration: "Sep 2025 - Dec 2026",
      status: "Upcoming",
      icon: <Image src="/uwaterloo.png" alt="University of Waterloo" width={50} height={50} />,
    },
    {
      institution: "The Hong Kong University of Science and Technology",
      location: "Hong Kong SAR",
      degree: "Bachelor of Science in Data Science and Technology",
      gpa: "GPA: 3.67",
      duration: "Sep 2021 - Dec 2024",
      status: "Completed",
      distinction: "First Class Honors Graduate",
      honors: [
        "2021 Admission Scholarship Awardee (4 years)",
        "2022 Dean's List Scholar",
        "2023 Teaching Outstanding Performance Award"
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
      className="py-20 bg-background relative overflow-hidden"
      style={backgroundStyles}
    >
      {/* Theme-aware overlay */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-primary/3 via-transparent to-secondary/3'
          : 'bg-gradient-to-br from-primary/5 via-transparent to-secondary/5'
      }`}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-shadow-md text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education 🎓
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My academic journey in Data Science and Technology
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-muted/30 rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {edu.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {edu.institution}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-lg text-foreground font-medium">
                        {edu.degree} {edu.program && <span className="text-muted-foreground">{edu.program}</span>}
                      </p>
                      {edu.gpa && (
                        <p className="text-muted-foreground">{edu.gpa}</p>
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <p className="text-muted-foreground">{edu.duration}</p>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Upcoming' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    {edu.distinction && (
                      <div className="mb-4">
                        <div className="flex items-center text-primary mb-2">
                          <Award className="w-4 h-4 mr-2" />
                          <span className="font-medium">{edu.distinction}</span>
                        </div>
                      </div>
                    )}

                    {edu.honors && (
                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2">Honors & Awards:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {edu.honors.map((honor, honorIndex) => (
                            <li key={honorIndex}>{honor}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.exchange && (
                      <div className="bg-muted/50 rounded-lg p-4 border border-border">
                        <h4 className="font-medium text-foreground mb-2">Exchange Experience:</h4>
                        <p className="text-muted-foreground">{edu.exchange}</p>
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