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
      title: "Software Engineer Intern",
      company: "Bridge AI Knowledge",
      duration: "May 2025 - Aug 2025",
      logo: "/api/placeholder/60/60",
      contributions: [
        "Designed and deployed a PDF Processing API (Python and Streamlit) with integrated LLM chatbot, automated parser, and multi-format export (TXT, CSV, JSON).",
        "Built an automated compliance report generator that benchmarked documents against client-specific checklists, giving recommendations and warnings, and resulted in improved accuracy and efficiency of audits.",
        "Developed an AI-powered WhatsApp customer service bot by integrating A1Base with N8N, automating response to product inquiries and reducing manual support workload by leveraging LLM.",
        "Created a voice AI agent using VAPI and ElevenLabs, implementing NLP pipelines for real-time speech understanding and enhancing customer experience."
      ]
    },
    {
      title: "Digital & IT Intern - Data Scientist Team",
      company: "Cathay Pacific Airways",
      duration: "Jun 2024 - Aug 2024",
      logo: "/api/placeholder/60/60",
      contributions: [
        "Quantified and estimated revenue that can be brought upon the company by implementing various Machine Learning models in operation, revenue, and engagement aspects. ",
        "Acted as Project Manager for Cathay Hackathon 2024. Organized and led initiatives by adopting an agile approach with external partners (Huawei, Apple, Microsoft, Alibaba, Amazon) resulting in significant operational progress for the event.",
        "Developed a Bayesian machine learning model using PyMC to analyze 55,000 user reports, enabling the engineering team to identify and prioritize key areas for issue resolution in the in-flight entertainment system.",
        "Created a solution to improve in-flight crew service effectiveness through smart wearable technology that leverages AI and machine learning algorithms with the goal of ensuring seamless interactions between cabin crews and customers."
      ]
    },
    {
      title: "Data Analyst Intern - Business Intelligence Team",
      company: "Tradelink Technologies",
      duration: "Jun 2023 - Aug 2023",
      logo: "/api/placeholder/60/60",
      contributions: [
        "Built a feature that allowed clients to access relevant news pertaining to their shipment status. Feature was developed through SEO practices which filters for news centered on a client.",
        "Researched and analyzed internal data to identify discrepancies in shipment and order records to ensure exact documentation of data within our client facing application.",
        "Visualized an upwards of 40,000 purchase order records through Pivot tooling to provide insights on possible process improvements and potential blockers which then allowed the business to focus on addressing pivotal areas.",
        "Resolved stakeholder issues by processing inconsistent report records caused by time zone difference."
      ]
    },
    {
      title: "Private Tutor",
      company: "Self-employed",
      duration: "2024 - 2025",
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
    <section id="experience" className="min-h-screen py-20 px-6 flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background tech elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            &lt;Work Experience /&gt;
          </span>
        </h2>
        <p className="text-cyan-400 font-mono text-sm text-center mb-2">
          {'// Professional journey & contributions'}
        </p>
        <p className="text-slate-400 text-center mb-16">
          My professional journey and key contributions across different roles.
        </p>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-12 flex flex-col items-center justify-center"
        >
          {/* Timeline Line - Centered with tech styling */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-32 w-0.5 h-3/4 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-50" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative w-full max-w-2xl flex justify-center"
            >
              {/* Timeline Dot - Tech styled */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg shadow-cyan-500/50 border-2 border-slate-900">
                <div className="w-4 h-4 bg-slate-900 rounded-full" />
              </div>

              {/* Experience Card - Tech styled */}
              <div className="group relative bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 w-full hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"></div>
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      {/* Company Logo - Tech styled */}
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/30">
                        <Building2 className="w-6 h-6 text-cyan-400" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-slate-200 mb-1 group-hover:text-cyan-400 transition-colors font-mono">
                          <span className="text-cyan-500/50">{'> '}</span>
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 font-medium mb-2 text-sm">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 shrink-0 font-mono text-xs bg-slate-900/50 px-3 py-1.5 rounded-md border border-cyan-500/20">
                      <Calendar className="w-4 h-4 text-cyan-500" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 bg-slate-900/30 p-4 rounded-lg border border-cyan-500/20">
                    {exp.contributions.map((contribution, contribIndex) => (
                      <li
                        key={contribIndex}
                        className="text-slate-400 text-sm leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-cyan-500 mt-1 shrink-0">▹</span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
