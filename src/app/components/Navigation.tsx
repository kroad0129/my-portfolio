"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Cloud } from "lucide-react";
import type { NavItem } from "@/types";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const navItems: NavItem[] = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;

      // Show navigation when scrolled past hero section
      setShowNav(scrollPosition > heroHeight * 0.9);
      if (scrollPosition < heroHeight * 0.9) {
        setActiveSection("hero");
        return;
      }

      // Determine active section
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];

      // Check each section
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section === "hero") continue;

        const element = document.getElementById(section);
        if (element) {
          element.getBoundingClientRect();
          const offsetTop = element.offsetTop;

          // If section is in view (considering the hero height offset)
          if (
            scrollPosition >= offsetTop - 200 &&
            scrollPosition < offsetTop + element.offsetHeight - 200
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string): void => {
    setIsOpen(false);

    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(href.substring(1));
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const isActive = (href: string): boolean => {
    const sectionName = href.substring(1);
    return activeSection === sectionName;
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-sky-200/50 transition-all duration-500 shadow-lg ${
        showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Cloud Theme */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Cloud className="w-8 h-8 text-sky-500 animate-float" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item: NavItem) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-lg scale-110"
                    : "text-sky-700 hover:bg-sky-50 hover:text-sky-800 hover:scale-105"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-sky-700 hover:text-sky-800 hover:bg-sky-50 rounded-full transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-6 space-y-2 bg-white/90 backdrop-blur-sm rounded-2xl mx-4 mb-4 border border-sky-200/50 shadow-lg">
            {navItems.map((item: NavItem) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-md scale-105"
                    : "text-sky-700 hover:bg-sky-50 hover:text-sky-800 hover:scale-105"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
