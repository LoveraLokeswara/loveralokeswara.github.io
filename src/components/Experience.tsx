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
        "•	Designed and deployed a PDF Processing API (Python and Streamlit) with integrated LLM chatbot, automated parser, and multi-format export (TXT, CSV, JSON).",
        "•	Built an automated compliance report generator that benchmarked documents against client-specific checklists, giving recommendations and warnings, and resulted in improved accuracy and efficiency of audits.",
        "•	Developed an AI-powered WhatsApp customer service bot by integrating A1Base with N8N, automating response to product inquiries and reducing manual support workload by leveraging LLM.",
        "•	Created a voice AI agent using VAPI and ElevenLabs, implementing NLP pipelines for real-time speech understanding and enhancing customer experience."
      ]
    },
    {
      title: "Digital & IT Intern - Data Scientist Team",
      company: "Cathay Pacific Airways",
      duration: "Jun 2024 - Aug 2024",
      logo: "/api/placeholder/60/60",
      contributions: [
        "•	Quantified and estimated revenue that can be brought upon the company by implementing various Machine Learning models in operation, revenue, and engagement aspects. ",
        "•	Acted as Project Manager for Cathay Hackathon 2024. Organized and led initiatives by adopting an agile approach with external partners (Huawei, Apple, Microsoft, Alibaba, Amazon) resulting in significant operational progress for the event.",
        "•	Developed a Bayesian machine learning model using PyMC to analyze 55,000 user reports, enabling the engineering team to identify and prioritize key areas for issue resolution in the in-flight entertainment system.",
        "•	Created a solution to improve in-flight crew service effectiveness through smart wearable technology that leverages AI and machine learning algorithms with the goal of ensuring seamless interactions between cabin crews and customers."
      ]
    },
    {
      title: "Data Analyst Intern - Business Intelligence Team",
      company: "Tradelink Technologies",
      duration: "Jun 2023 - Aug 2023",
      logo: "/api/placeholder/60/60",
      contributions: [
        "•	Built a feature that allowed clients to access relevant news pertaining to their shipment status. Feature was developed through SEO practices which filters for news centered on a client.",
        "•	Researched and analyzed internal data to identify discrepancies in shipment and order records to ensure exact documentation of data within our client facing application.",
        "•	Visualized an upwards of 40,000 purchase order records through Pivot tooling to provide insights on possible process improvements and potential blockers which then allowed the business to focus on addressing pivotal areas.",
        "•	Resolved stakeholder issues by processing inconsistent report records caused by time zone difference."
      ]
    },
    {
      title: "Private Tutor",
      company: "Self-employed",
      duration: "2024 - 2025",
      logo: "/api/placeholder/60/60",
      contributions: [
        "•	Assisted in development of mobile applications using React Native",
        "•	Wrote comprehensive unit tests achieving 85% code coverage",
        "•	Participated in code reviews and learned industry best practices",
        "•	Collaborated on documentation and technical specification writing"
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
    <section id="experience" className="min-h-screen py-20 px-6 flex items-center justify-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-shadow-md text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
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
          className="space-y-12 flex flex-col items-center justify-center"
        >
          {/* Timeline Line - Centered */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-32 w-0.5 h-3/4 bg-border" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative w-full max-w-2xl flex justify-center"
            >
              {/* Timeline Dot - Centered */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-8 h-8 bg-foreground rounded-full flex items-center justify-center z-10">
                <div className="w-3 h-3 bg-background rounded-full" />
              </div>

              {/* Experience Card - Centered */}
              <div className="bg-card border border-border rounded-xl p-6 w-full hover:border-border/60 transition-colors">
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
                      <span className="text-justify">{contribution}</span>
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
