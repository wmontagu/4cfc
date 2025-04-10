"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CollegeCollage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const searchParams = useSearchParams();
  
  // Update selected category based on URL parameter
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  return (
    <>
      <div className="header-gradient bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded">
        <h1>A College Collage</h1>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-8">
          In this genuine and insightful series, we chat with current college students and recent alumni about their experiences in the college application process and/or during college. Immerse yourself in their stories to get a glimpse of what college beholds!
        </p>
        
        <div className="mb-8 bg-blue-50 p-4 rounded border border-blue-200">
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
          <p>
            Use the dropdown menu in the navigation bar to filter different categories of college experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {(selectedCategory === 'all' || selectedCategory === 'limited-resource') && (
            <div>
              <div className="card h-64"></div>
              <h2 className="text-xl font-bold text-blue-600 mt-4 mb-2">Limited-Resource Backgrounds</h2>
              <p>
                Students from low-income, first-generation, or otherwise limited-resource backgrounds share their unique challenges and strategies in navigating the college application process and college life.
              </p>
            </div>
          )}
          
          {(selectedCategory === 'all' || selectedCategory === 'student-athletes') && (
            <div>
              <div className="card h-64"></div>
              <h2 className="text-xl font-bold text-blue-600 mt-4 mb-2">Student-Athletes</h2>
              <p>
                College student-athletes discuss balancing academics with their sport, the recruitment process, and their advice for high school athletes looking to compete at the collegiate level.
              </p>
            </div>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {(selectedCategory === 'all' || selectedCategory === 'international') && (
            <div>
              <div className="card h-64"></div>
              <h2 className="text-xl font-bold text-blue-600 mt-4 mb-2">International Students</h2>
              <p>
                International students share their experiences applying to U.S. colleges, adapting to a new culture, and advice for other international students considering higher education in the United States.
              </p>
            </div>
          )}
          
          {(selectedCategory === 'all' || selectedCategory === 'stem') && (
            <div>
              <div className="card h-64"></div>
              <h2 className="text-xl font-bold text-blue-600 mt-4 mb-2">STEM Majors</h2>
              <p>
                Students pursuing degrees in Science, Technology, Engineering, and Mathematics discuss their academic journey, research opportunities, and career paths in these demanding fields.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
