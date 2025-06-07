import type React from "react"
import type { SkillCategory } from "@/types"

const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: "Frontend",
            skills: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "TypeScript", level: 80 },
                { name: "Tailwind CSS", level: 85 },
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 80 },
                { name: "Express", level: 75 },
                { name: "Python", level: 70 },
                { name: "Django", level: 65 },
                { name: "PostgreSQL", level: 75 },
                { name: "MongoDB", level: 70 },
            ],
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "Git", level: 85 },
                { name: "Docker", level: 70 },
                { name: "AWS", level: 65 },
                { name: "Figma", level: 80 },
                { name: "VS Code", level: 95 },
                { name: "Postman", level: 85 },
            ],
        },
    ]

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category: SkillCategory, index: number) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{category.title}</h3>
                            <div className="space-y-3">
                                {category.skills.map((skill, skillIndex: number) => (
                                    <div key={skillIndex} className="flex items-center justify-between">
                                        <span className="text-gray-700">{skill.name}</span>
                                        <div className="w-24 bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
