"use client"

import type React from "react"

import { useState, useEffect } from "react"
import type { NavItem } from "@/types"

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [showNav, setShowNav] = useState<boolean>(false)
    const [activeSection, setActiveSection] = useState<string>("hero")

    const navItems: NavItem[] = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const heroHeight = window.innerHeight

            // Show navigation when scrolled past hero section
            setShowNav(scrollPosition > heroHeight * 0.9)
            if (scrollPosition < heroHeight * 0.9) {
                setActiveSection("hero")
                return
            }

            // Determine active section
            const sections = ["hero", "about", "skills", "projects", "experience", "contact"]


            // Check each section
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i]
                if (section === "hero") continue

                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    const offsetTop = element.offsetTop

                    // If section is in view (considering the hero height offset)
                    if (scrollPosition >= offsetTop - 200 && scrollPosition < offsetTop + element.offsetHeight - 200) {
                        setActiveSection(section)
                        break
                    }
                }
            }

        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleNavClick = (href: string): void => {
        setIsOpen(false)

        if (href === "#hero") {
            window.scrollTo({ top: 0, behavior: "smooth" })
            return
        }

        const element = document.getElementById(href.substring(1))
        if (element) {
            const offsetTop = element.offsetTop
            window.scrollTo({ top: offsetTop, behavior: "smooth" })
        }
    }

    const isActive = (href: string): boolean => {
        const sectionName = href.substring(1)
        return activeSection === sectionName
    }

    return (
        <nav
            className={`fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 transition-all duration-300 ${showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-gray-900">Portfolio</div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item: NavItem) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.href)}
                                className={`transition-all duration-300 ${isActive(item.href)
                                    ? "text-blue-600 text-lg scale-110 font-bold"
                                    : "text-gray-700 hover:text-blue-600 text-base font-medium"
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                            {navItems.map((item: NavItem) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`block w-full text-left px-3 py-2 transition-all duration-300 font-medium ${isActive(item.href)
                                        ? "text-blue-600 text-lg font-bold bg-blue-50 rounded-lg"
                                        : "text-gray-700 hover:text-blue-600 text-base hover:bg-gray-50 rounded-lg"
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navigation
