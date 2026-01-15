"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10"
          : "bg-slate-900/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Tech styled */}
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/70 transition-all">
              <span className="text-white font-bold text-lg">LL</span>
            </div>
            <span className="text-cyan-400 font-bold text-lg font-mono hidden sm:block">
              <span className="text-slate-400">{'<'}</span>
              Lovera
              <span className="text-slate-400">{'/>'}</span>
            </span>
          </button>

          {/* Desktop Navigation - Tech styled */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-mono relative"
                >
                  <span className="text-cyan-500/50">{'<'}</span>
                  {item.label}
                  <span className="text-cyan-500/50">{'/>'}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full shadow-lg shadow-cyan-500/50" />
                </button>
              ))}
            </div>
            
            {/* Theme Toggle - Tech styled */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors ml-4 bg-slate-800/50 rounded-lg border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Controls - Tech styled */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors bg-slate-800/50 rounded-lg border border-cyan-500/30"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors bg-slate-800/50 rounded-lg border border-cyan-500/30"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Tech styled */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-cyan-500/20 bg-slate-800/50 rounded-lg backdrop-blur-md">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors text-left py-2 font-mono border-l-2 border-transparent hover:border-cyan-400 pl-3"
                >
                  <span className="text-cyan-500/50">{'> '}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 