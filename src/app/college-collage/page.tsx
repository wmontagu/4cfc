"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaHandHoldingUsd, FaFutbol, FaGlobeAmericas, FaFlask } from "react-icons/fa";

function CollegeContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Dropdown state has been removed
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    setSelectedCategory(category || 'all');
  }, [searchParams]);

  const cards = [
    {
      key: 'limited-resource',
      icon: <FaHandHoldingUsd style={{ fontSize: '3rem' }} />,
      title: 'Limited-Resource Backgrounds',
      text: (
        <>
          Students from low-income, first-generation,<br className="hidden sm:inline" />
          or otherwise limited-resource backgrounds share their unique challenges and strategies in navigating the college application process and college life.
        </>
      ),
    },
    {
      key: 'student-athletes',
      icon: <FaFutbol style={{ fontSize: '3rem' }} />,
      title: 'Student-Athletes',
      text: (
        <>
          College student-athletes discuss balancing academics with their sport,<br className="hidden sm:inline" />
          the recruitment process, and their advice for high school athletes looking to compete at the collegiate level.
        </>
      ),
    },
    {
      key: 'international',
      icon: <FaGlobeAmericas style={{ fontSize: '3rem' }} />,
      title: 'International Students',
      text: (
        <>
          International students share their experiences applying to U.S. colleges,<br className="hidden sm:inline" />
          adapting to a new culture, and advice for other international students considering higher education in the United States.
        </>
      ),
    },
    {
      key: 'stem',
      icon: <FaFlask style={{ fontSize: '3rem' }} />,
      title: 'STEM Majors',
      text: (
        <>
          Students pursuing degrees in Science, Technology, Engineering, and Mathematics<br className="hidden sm:inline" />
          discuss their academic journey, research opportunities, and career paths in these demanding fields.
        </>
      ),
    },
  ];

  const filteredCards = selectedCategory === 'all'
    ? cards
    : cards.filter(card => card.key === selectedCategory);

  return (
    <>
      {/* Top spacing to account for the fixed navbar */}
      <div className="pt-16 md:pt-20"></div>

      
      <div className="header-gradient bg-gradient-to-r from-blue-300 to-purple-300 p-3 rounded">
        <h1>A College Collage</h1>
      </div>
      

      <div className="section container mx-auto px-4 md:px-8 py-12 md:py-16 bg-amber-50">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            In this genuine and insightful series, we chat with current college students and recent alumni<br className="hidden sm:inline" />
            about their experiences in the college application process and/or during college.<br className="hidden sm:inline" />
            Immerse yourself in their stories to get a glimpse of what college beholds!
          </p>
        </div>

        {/* Dropdown has been removed */}

        {/* Enhanced Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {filteredCards.map(card => (
            <div
              key={card.key}
              className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group hover:translate-y-[-4px] hover:border-blue-200"
            >
              <div className="mb-6 rounded-full p-5 bg-blue-50 text-blue-500 group-hover:bg-blue-100 transition-all duration-300">{card.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{card.title}</h2>
              <p className="text-center text-gray-600 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function CollegeCollage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CollegeContent />
    </Suspense>
  );
}
