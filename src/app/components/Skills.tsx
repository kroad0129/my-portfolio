"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Cloud } from "lucide-react";
import type { SkillCategory } from "@/types";

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 70 },
        { name: "C", level: 90 },
        { name: "C++", level: 70 },
        { name: "Kotlin", level: 60 },
        { name: "JavaScript", level: 70 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Node.js", level: 70 },
        { name: "Express", level: 70 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "Firebase", level: 60 },
      ],
    },
    {
      title: "Cloud & IoT",
      skills: [
        { name: "AWS EC2", level: 80 },
        { name: "AWS S3", level: 60 },
        { name: "AWS IoT Core", level: 70 },
        { name: "AWS Lambda", level: 80 },
        { name: "Arduino", level: 90 },
        { name: "Raspberry Pi", level: 80 },
      ],
    },
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "React", level: 60 },
        { name: "Flutter", level: 50 },
        { name: "Tailwind CSS", level: 50 },
        { name: "Vite", level: 50 },
      ],
    },
  ];

  const getSkillIcon = (skillName: string) => {
    const icons: { [key: string]: string } = {
      Java: "☕",
      Kotlin: "🎯",
      Python: "🐍",
      "C++": "⚡",
      C: "🔧",
      JavaScript: "🟨",
      "Spring Boot": "🍃",
      "Node.js": "🟢",
      Express: "🚀",
      MySQL: "🐬",
      MongoDB: "🍃",
      Firebase: "🔥",
      "AWS EC2": "☁️",
      "AWS S3": "📦",
      "AWS IoT Core": "🌐",
      "AWS Lambda": "⚡",
      Arduino: "🤖",
      "Raspberry Pi": "🍓",
      React: "⚛️",
      Flutter: "🦋",
      "Tailwind CSS": "🎨",
      Vite: "⚡",
    };
    return icons[skillName] || "💻";
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Sky Background - About에서 자연스럽게 연결 */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-sky-50 to-sky-100" />

      {/* Floating Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-32 bg-white/40 rounded-full blur-sm animate-float" />
        <div className="absolute top-40 right-20 w-80 h-28 bg-white/35 rounded-full blur-sm animate-float-delayed" />
        <div className="absolute bottom-20 left-1/3 w-72 h-24 bg-white/30 rounded-full blur-sm animate-float" />

        <Cloud className="absolute top-32 right-1/4 w-12 h-12 text-white/50 animate-float" />
        <Cloud className="absolute bottom-40 left-1/4 w-16 h-16 text-white/40 animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cloud Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-sky-800 mb-4 drop-shadow-sm">
            Skills
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-sky-600 text-lg">구름 위에서 쌓아온 기술들</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category: SkillCategory, index: number) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-700 hover:scale-105 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-sky-800 mb-2">
                  {category.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex: number) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-lg mr-2 group-hover/skill:scale-110 transition-transform duration-200">
                          {getSkillIcon(skill.name)}
                        </span>
                        <span className="text-sky-700 font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-sky-500 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-sky-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          animationDelay: `${skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
