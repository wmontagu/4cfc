"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaHandHoldingUsd, FaFutbol, FaGlobeAmericas, FaFlask } from "react-icons/fa";

function CollegeContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');
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
      <div className="header-gradient bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded">
        <h1 className="text-center">A College Collage</h1>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        <p className="text-base sm:text-lg mb-6 sm:mb-8">
          In this genuine and insightful series, we chat with current college students and recent alumni<br className="hidden sm:inline" />
          about their experiences in the college application process and/or during college.<br className="hidden sm:inline" />
          Immerse yourself in their stories to get a glimpse of what college beholds!
        </p>

        <div className="mb-6 sm:mb-8 bg-blue-50 p-3 sm:p-4 rounded border border-blue-200">
          <h2 className="font-bold text-xl text-blue-600 mb-2">
            {selectedCategory === 'all'
              ? 'All Categories'
              : selectedCategory === 'limited-resource'
                ? 'Limited-Resource Backgrounds'
                : selectedCategory === 'student-athletes'
                  ? 'Student-Athletes'
                  : selectedCategory === 'international'
                    ? 'International Students'
                    : 'STEM Majors'}
          </h2>
        </div>

        {/* Cards grid with proper separation */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCards.map(card => (
            <div
              key={card.key}
              className="card p-6 bg-white border rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="mb-4">{card.icon}</div>
              <h2 className="text-xl font-bold text-blue-600 mb-2 text-center">{card.title}</h2>
              <p className="text-center">{card.text}</p>
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
