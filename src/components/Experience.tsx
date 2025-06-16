"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      duration: "2022 - Present",
      logo: "/api/placeholder/60/60",
      contributions: [
        "Led development of microservices architecture reducing load times by 40%",
        "Mentored junior developers and established code review best practices",
        "Implemented CI/CD pipelines improving deployment efficiency by 60%",
        "Collaborated with cross-functional teams to deliver user-centric solutions"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      duration: "2021 - 2022",
      logo: "/api/placeholder/60/60",
      contributions: [
        "Developed responsive web applications using React and TypeScript",
        "Optimized application performance resulting in 50% faster page loads",
        "Worked closely with designers to implement pixel-perfect UI components",
        "Maintained and refactored legacy codebase to modern standards"
      ]
    },
    {
      title: "Junior Developer",
      company: "Startup Solutions",
      duration: "2020 - 2021",
      logo: "/api/placeholder/60/60",
      contributions: [
        "Built RESTful APIs using Node.js and Express framework",
        "Implemented database schemas and optimized queries for better performance",
        "Participated in agile development process and daily standups",
        "Contributed to open source projects and internal tool development"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Innovation Labs",
      duration: "2019 - 2020",
      logo: "/api/placeholder/60/60",
      contributions: [
        "Assisted in development of mobile applications using React Native",
        "Wrote comprehensive unit tests achieving 85% code coverage",
        "Participated in code reviews and learned industry best practices",
        "Collaborated on documentation and technical specification writing"
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          Work Experience
        </h2>
        <p className="text-muted-foreground text-center mb-16">
          My professional journey and key contributions across different roles.
        </p>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative pl-8 pb-8 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[15px] top-12 w-0.5 h-full bg-border" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-background rounded-full" />
              </div>

              <div className="bg-card border border-border rounded-xl p-6 ml-6 hover:border-border/60 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    {/* Company Logo Placeholder */}
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6 text-muted-foreground" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.contributions.map((contribution, contribIndex) => (
                    <li
                      key={contribIndex}
                      className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
