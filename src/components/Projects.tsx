"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with interactive maps, forecasts, and location-based alerts. Features responsive design and offline capabilities.",
      tech: ["React", "D3.js", "Weather API", "PWA"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics platform for social media performance tracking with data visualization, automated reporting, and insights generation.",
      tech: ["Vue.js", "Python", "MongoDB", "Chart.js"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Learning Management System",
      description: "Complete LMS with course creation, student progress tracking, interactive quizzes, and video streaming capabilities.",
      tech: ["React", "Express", "MySQL", "AWS"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with dark mode, smooth animations, and optimized performance. Built with modern web technologies.",
      tech: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/250"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-shadow-md text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          Featured Projects
        </h2>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-border/60 transition-all duration-300 group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
                <div className="text-center text-muted-foreground group-hover:scale-105 transition-transform duration-300">
                  <Code2 className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Project Screenshot</p>
                  <p className="text-xs">Replace with actual image</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 