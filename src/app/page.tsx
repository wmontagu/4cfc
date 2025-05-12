"use client"
import { useState } from "react";
import Link from "next/link";
import { FaClipboardCheck, FaBookOpen, FaUserGraduate } from "react-icons/fa";

export default function Home() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cards = [
    {
      href: "/planning-worksheet",
      icon: <FaClipboardCheck style={{ fontSize: '3rem' }} />,
      title: "Application Planning Worksheet",
      blurb: "Organize your college application journey with our worksheet.",
      color: "text-blue-600"
    },
    {
      href: "/resources",
      icon: <FaBookOpen style={{ fontSize: '3rem' }} />,
      title: "Application Season Resources",
      blurb: "Find essay help, financial aid info, and more resources.",
      color: "text-blue-600"
    },
    {
      href: "/college-collage",
      icon: <FaUserGraduate style={{ fontSize: '3rem' }} />,
      title: "A College Collage",
      blurb: "Read real stories and advice from college students.",
      color: "text-blue-600"
    },
  ];

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="header-gradient bg-gradient-to-r from-blue-500 to-black-500 p-3 rounded mb-8">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center">
          For College Students, From College Students
        </h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-10 text-center">
          For College Students, From College Students (4CFC) is your journey to higher education and beyond. At 4CFC, any student should be able to pave their own path to college, build a career, and pursue their dreams. We offer various systems of support so that you can unlock the door to a future that you can shape:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <Link
              key={card.href}
              href={card.href}
              className="focus:outline-none no-underline"
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`card bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-8 flex flex-col items-center text-center h-full transition-all duration-200 hover:shadow-md hover:scale-105 ${
                  hovered === idx ? "ring-2 ring-black-400" : ""
                }`}
              >
                <div className={`mb-4 ${card.color}`}>
                  {card.icon}
                </div>
                <div className={`text-xl font-bold mb-2 ${card.color}`}>
                  {card.title}
                </div>
                <div className="text-base text-black">
                  {card.blurb}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
