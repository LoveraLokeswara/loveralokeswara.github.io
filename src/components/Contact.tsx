"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:lovera.087@gmail.com",
      label: "lovera.087@gmail.com"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/LoveraLokeswara",
      label: "github.com/LoveraLokeswara"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/lovera-lokeswara",
      label: "linkedin.com/in/lovera-lokeswara"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950"
    >
      {/* Tech background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              &lt;Get In Touch /&gt;
            </span>
          </h2>
          <p className="text-cyan-400 font-mono text-sm mb-4">
            {'// Let\'s build something amazing together'}
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Tech styled */}
          <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 shadow-2xl overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <MessageCircle className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-slate-200 font-mono">
                <span className="text-cyan-500/50">{'> '}</span>Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                  name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all text-slate-300 font-mono"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                  email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all text-slate-300 font-mono"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                  message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all resize-none text-slate-300 font-mono"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 font-medium border border-cyan-400/50"
              >
                <Send className="w-4 h-4" />
                <span className="font-mono">send_message()</span>
              </button>
            </form>
          </div>

          {/* Contact Information - Tech styled */}
          <div className="space-y-8">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-slate-200 mb-4 font-mono">
                <span className="text-cyan-500/50">{'// '}</span>Let&apos;s Connect
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Whether you&apos;re working on a project, exploring a collaboration, or simply want to connect — I&apos;d be happy to hear from you.
                Feel free to reach out through any of the channels below 👇
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden"
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                  
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform relative z-10">
                    {link.icon}
                  </div>
                  <div className="relative z-10">
                    <p className="font-medium text-slate-200 font-mono text-sm">{link.name}</p>
                    <p className="text-xs text-slate-400 font-mono">{link.label}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-cyan-500/20">
              <p className="text-sm text-slate-500 text-center font-mono">
                <span className="text-cyan-500/50">{'// '}</span>
                © 2024 Lovera Lokeswara. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 