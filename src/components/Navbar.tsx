"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Auto-close mobile menu when screen size increases to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Tailwind md breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Event handlers for search and mobile menu
  const handleSearchClick = () => setIsSearchOpen(true);
  const handleCloseSearch = () => setIsSearchOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Main navigation - fixed at top of screen */}
      <nav className="fixed w-full z-40 bg-white border-b shadow-sm py-3 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-amber-900 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300 hover:opacity-80">
              4CFC
            </Link>
            <span className="ml-2 hidden sm:inline-block text-sm text-gray-700 tracking-wide">
              For College Students, From College Students
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Search button (desktop only) */}
            <div className="hidden md:block">
              <button 
                className="p-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-200"
                onClick={handleSearchClick}
                aria-label="Search"
              >
                <FaSearch className="text-blue-600 hover:text-blue-800 transition-colors duration-200" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Floating hamburger button - always visible on mobile */}
      <div className="md:hidden">
        <button
          className="fixed bottom-6 right-6 flex items-center justify-center w-20 h-20 rounded-full focus:outline-none bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg border-2 border-blue-400 z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? 
            <FaTimes className="text-white text-4xl" /> : 
            <FaBars className="text-white text-4xl" />
          }              
        </button>
      </div>

      {/* Mobile menu - slides in from left when toggled */}
      <div 
        className={`fixed inset-0 z-45 transform transition-transform duration-300 ease-in-out top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="bg-gradient-to-b from-amber-50 to-amber-100 shadow-lg h-full overflow-y-auto p-4">
          <div className="max-w-lg mx-auto rounded-xl bg-white p-6 shadow-md">
            <div className="flex flex-col space-y-3">
              {/* Navigation links - each closes the mobile menu when clicked */}
              <Link 
                href="/" 
                className="py-3 px-4 text-lg font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="py-3 px-4 text-lg font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/planning-worksheet" 
                className="py-3 px-4 text-lg font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Planning Worksheet
              </Link>
              <Link 
                href="/resources" 
                className="py-3 px-4 text-lg font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              
              {/* College Collage section with nested category links */}
              <div className="flex flex-col py-2">
                <Link 
                  href="/college-collage" 
                  className="py-3 px-4 text-lg font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  College Collage
                </Link>
                {/* Indented submenu for College Collage categories */}
                <div className="mt-2 ml-4 pl-4 border-l-2 border-amber-200 flex flex-col space-y-2 bg-amber-50/50 rounded-lg p-2">
                  <Link 
                    href="/college-collage" 
                    className="py-2 px-3 text-base text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Categories
                  </Link>
                  <Link 
                    href="/college-collage?category=limited-resource" 
                    className="py-2 px-3 text-base text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Limited-Resource
                  </Link>
                  <Link 
                    href="/college-collage?category=student-athletes" 
                    className="py-2 px-3 text-base text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Student-Athletes
                  </Link>
                  <Link 
                    href="/college-collage?category=international" 
                    className="py-2 px-3 text-base text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    International
                  </Link>
                  <Link 
                    href="/college-collage?category=stem" 
                    className="py-2 px-3 text-base text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    STEM Majors
                  </Link>
                </div>
              </div>
              
              {/* Mobile Search Button */}
              <button 
                className="py-3 px-4 text-lg font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 flex items-center mt-2"
                onClick={() => {
                  handleSearchClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                <FaSearch className="mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Modal - conditionally rendered based on isSearchOpen state */}
      <SearchModal isOpen={isSearchOpen} onClose={handleCloseSearch} />
    </>
  );
}
