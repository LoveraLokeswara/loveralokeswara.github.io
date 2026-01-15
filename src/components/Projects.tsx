"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
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
      title: "Volatility Forecasting",
      description: "A comprehensive study of hybrid models for forecasting financial market volatility. This project evaluates and compares traditional econometric models like ARIMA and GARCH with machine learning techniques such as LSTM and SVM, including hybrid combinations, using historical time series data from assets like S&P 500, Bitcoin, and EUR/USD.",
      tech: ["Python", "Jupyter Notebook", "ARIMA", "GARCH", "LSTM", "SVM", "scikit-learn", "statsmodels", "arch", "yfinance", "pandas", "numpy", "TensorFlow"],
      github: "https://github.com/LoveraLokeswara/Volatility-Forecasting",
      demo: "https://github.com/LoveraLokeswara/Volatility-Forecasting/blob/main/README.md",
      image: "/The-ARIMA-LSTM-model-Literature-often-uses-several-indicators-to-evaluate-the-performance.png"
    },
    {
      title: "FinBERT Financial Sentiment Analysis",
      description: "A financial sentiment classification project that implements and compares transformer-based models specifically for financial text. It fine-tunes and evaluates domain-adapted FinBERT and other NLP architectures on labeled datasets, and includes a Gradio-based interactive interface for real-time sentiment analysis of financial text.",
      tech: ["Python", "PyTorch", "Transformers (Hugging Face)", "FinBERT", "BERT", "RoBERTa", "ULMFiT", "Gradio", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      github: "https://github.com/LoveraLokeswara/FinBERT-Financial-Sentiment-Analysis",
      demo: "https://github.com/LoveraLokeswara/FinBERT-Financial-Sentiment-Analysis/blob/main/README.md",
      image: "/FinBERT.png"
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
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            &lt;Featured Projects /&gt;
          </span>
        </h2>
        <p className="text-center text-cyan-400 font-mono text-sm mb-16">
          {'// Showcasing data science & ML projects'}
        </p>

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
              className="group relative bg-slate-800/50 rounded-xl border border-cyan-500/20 overflow-hidden hover:border-cyan-400 transition-all duration-300 flex flex-col h-full backdrop-blur-sm"
            >
              {/* Tech corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyan-400/50 z-10"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyan-400/50 z-10"></div>
              
              {/* Project Image with overlay */}
              <div className="relative h-48 bg-slate-900 flex items-center justify-center overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Tech overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-xl font-semibold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors font-mono">
                  <span className="text-cyan-500/50">{'> '}</span>{project.title}
                </h3>
                
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack with tech styling */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-900/50 border border-cyan-500/30 text-cyan-400 px-3 py-1.5 rounded-md text-xs font-mono hover:border-cyan-400 hover:shadow-sm hover:shadow-cyan-500/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links with tech styling */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-cyan-500/20">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group/link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4 group-hover/link:animate-pulse" />
                    <span className="text-sm font-mono">code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group/link"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:animate-pulse" />
                    <span className="text-sm font-mono">demo</span>
                  </a>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 