"use client"
import { useState } from "react";
import Link from "next/link";
import { FaClipboardCheck, FaBookOpen, FaUserGraduate, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cards = [
    {
      href: "/planning-worksheet",
      icon: <div className="flex justify-center items-center w-full"><FaClipboardCheck className="text-blue-500 group-hover:text-blue-400 text-3xl transition-all duration-300" /></div>,
      title: "Planning Worksheet",
      blurb: "Organize your college application journey with our worksheet.",
      color: "text-blue-600"
    },
    {
      href: "/resources",
      icon: <div className="flex justify-center items-center w-full"><FaBookOpen className="text-blue-500 group-hover:text-blue-400 text-3xl transition-all duration-300" /></div>,
      title: "App Resources",
      blurb: "Find essay help, financial aid info, and more resources.",
      color: "text-blue-600"
    },
    {
      href: "/college-collage",
      icon: <div className="flex justify-center items-center w-full"><FaUserGraduate className="text-blue-500 group-hover:text-blue-400 text-3xl transition-all duration-300" /></div>,
      title: "The College Collage",
      blurb: "Read real stories and advice from college students.",
      color: "text-blue-600"
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Top spacing to account for the fixed navbar */}
      <div className="pt-16 md:pt-20"></div>
      
      {/* Header gradient similar to other pages */}
      <div className="header-gradient bg-gradient-to-r from-blue-300 to-purple-300 p-3 rounded mb-8">
        <h1>4CFC</h1>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-12 pb-32 md:py-16 md:pb-40 bg-amber-50">
        {/* Hero Section with enhanced typography */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-800 leading-tight tracking-tight">
            <span className="relative inline-block">                
              <span className="relative z-10">For College Students,</span>
              
              <span className="absolute -bottom-1 left-0 right-0 h-4 bg-blue-500/20 rounded-lg -z-0 transform -skew-x-6"></span>
            </span>
            <br/>
              <span className="relative z-10">From College Students</span>
            <br/> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">From College Students</span>
          </h1>
          <p className="text-xl md:text-2xl text-white leading-relaxed mb-10 max-w-3xl mx-auto font-light">
            At 4CFC, any student should be able to pave their own path to college, build a career, and pursue their dreams.
          </p>
        </div>
        <p className="text-lg mb-10 text-center text-white">
          For College Students, From College Students (4CFC) is your journey to higher education and beyond. At 4CFC, any student should be able to pave their own path to college, build a career, and pursue their dreams. We offer various systems of support so that you can unlock the door to a future that you can shape:
        </p>
        {/* Feature Cards Section with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-32">
          {cards.map((card, idx) => (
            <Link
              key={card.href}
              href={card.href}
              className="focus:outline-none no-underline"
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={`light-feature-card group ${hovered === idx ? 'ring-2 ring-blue-400' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="feature-icon">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white relative z-10">{card.title}</h3>
                <p className="text-white mb-8 relative z-10">
                  {card.blurb}
                </p>
                <div className="relative z-10 btn btn-primary inline-flex items-center justify-center group">
                  <span className="relative">Explore</span>
                  <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
}
