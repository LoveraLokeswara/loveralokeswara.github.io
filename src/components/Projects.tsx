"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Gromov-Wasserstein Improvement for Low Dimension",
      description: "This project proposes a framework for solving the Gromov-Wasserstein problem between low-dimensional Euclidean point clouds by reformulating it as a low-rank concave Quadratic Assignment Problem (QAP), ensuring global optimality and scalability. The method is evaluated based on computation time and the number of iterations required to reach the optimal solution.",
      tech: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Gromov-Wasserstein Distance", "Scipy"],
      github: "https://github.com/LoveraLokeswara/Gromov_Wasserstein_for_Low_Dimension/tree/main",
      demo: "https://github.com/LoveraLokeswara/Gromov_Wasserstein_for_Low_Dimension/blob/main/Modified%20Algorithm_MNIST.ipynb",
      image: "/demo_gromov.png"
    },
    {
      title: "Style Transfer",
      description: "This project implements a style transfer algorithm that allows users to transfer the style of one image onto another. It uses a pre-trained VGG19 model to extract features from the style image and the content image, and then uses these features to generate a new image that has the style of the style image and the content of the content image.",
      tech: ["Python", "PyTorch", "VGG19", "Matplotlib", "Numpy", "TensorFlow", "Keras"],
      github: "https://github.com/LoveraLokeswara/Style-Transfer",
      demo: "https://github.com/LoveraLokeswara/Style-Transfer/blob/main/report.pdf",
      image: "/demo_style_transfer.png"
    },
    {
      title: "Airbnb Improvement Recommendation System",
      description: "This project aims to develop a machine learning model that predicts Airbnb listing review scores based on various listing features, with the goal of offering actionable recommendations to help hosts improve their ratings and competitiveness. To ensure model accuracy, the data was preprocessed to remove biased ratings, and training was conducted using Google Colab Pro for enhanced computational performance.",
      tech: ["Python", "Scikit-learn", "Keras", "Neural Network", "TensorFlow", "Matplotlib", "Seaborn", "Scipy"],
      github: "https://github.com/LoveraLokeswara/Airbnb-Improvement-Recommendation-System",
      demo: "https://github.com/LoveraLokeswara/Airbnb-Improvement-Recommendation-System/blob/main/code.ipynb",
      image: "/demo_airbnb.png"
    },
    {
      title: "Private Education Platform",
      description: "This project is a simple web-based private education platform focused on math tutoring, designed to help students improve their math skills through personalized learning. It includes access to practice materials and offers the option to contact the tutor directly for additional one-on-one classes.",
      tech: ["Python", "Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
      github: "https://github.com/LoveraLokeswara/edu-math-connect",
      demo: "https://edu-math-connect.lovable.app/",
      image: "/demo_math.png"
    },
    {
      title: "Turkish Chess",
      description: "Developed a chess game with a smart AI tool based on the concept of Recursion and Mini-Max Algorithm. AI was set to ever-evolve to re-evaluate and build efficient methods to beat previous patterns. ",
      tech: ["C++", "Recursion", "Mini-Max Algorithm", "Chess", "Game Development"],
      github: "https://github.com/LoveraLokeswara/Turkish-Chess/blob/main/Turkish%20Chess.cpp",
      demo: "https://github.com/LoveraLokeswara/Turkish-Chess/blob/main/Turkish%20Chess.cpp",
      image: "/demo_chess.jpg"
    },
    {
      title: "Bali Itinerary Planner",
      description: "Developed a program that allows users to plan their itinerary for a trip to Bali, Indonesia. The application provides a user-friendly interface for selecting destinations, attractions, and activities, and generates a customized itinerary based on the user's preferences and constraints.",
      tech: ["Python", "Pandas", "Geopanda", "Streamlit", "Shapely"],
      github: "https://github.com/LoveraLokeswara/bali_itinerary_planning",
      demo: "https://github.com/LoveraLokeswara/bali_itinerary_planning/blob/main/itinerary_planning.ipynb",
      image: "/demo_bali.png"
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
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-border/60 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-muted flex items-center justify-center overflow-hidden p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
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
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-[#24292e] hover:text-[#0969da] transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-[#24292e] hover:text-[#0969da] transition-colors"
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