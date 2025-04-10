"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import SearchModal from './SearchModal';
import './navbar.css'; // We'll create this CSS file for the hover effect

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Handle search button click
  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };
  
  // Close search modal
  const closeSearchModal = () => {
    setIsSearchOpen(false);
  };
  
  // Dropdown links handle navigation directly via href

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link href="/" className="text-xl font-bold">4CFC</Link>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/planning-worksheet">Planning Worksheet</Link>
          <Link href="/resources">Resources</Link>
          
          {/* College Collage Dropdown - Hoverable */}
          <div className="dropdown">
            <Link href="/college-collage" className="flex items-center text-white">
              A College Collage
              <span className="ml-1">▼</span>
            </Link>
            
            <div className="dropdown-content">
              <Link 
                href="/college-collage" 
                className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white border-b border-gray-200"
              >
                All Categories
              </Link>
              <Link 
                href="/college-collage?category=limited-resource" 
                className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white border-b border-gray-200"
              >
                Limited-Resource
              </Link>
              <Link 
                href="/college-collage?category=student-athletes" 
                className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white border-b border-gray-200"
              >
                Student-Athletes
              </Link>
              <Link 
                href="/college-collage?category=international" 
                className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white border-b border-gray-200"
              >
                International
              </Link>
              <Link 
                href="/college-collage?category=stem" 
                className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                STEM Majors
              </Link>
            </div>
          </div>
          
          {/* Search Button */}
          <button 
            className="search-icon"
            onClick={handleSearchClick}
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>
      </nav>
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={closeSearchModal} />
    </>
  );
};

export default Navbar;
