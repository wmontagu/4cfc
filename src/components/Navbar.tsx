"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import SearchModal from './SearchModal';
import './navbar.css'; // We'll create this CSS file for the hover effect

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Handle window resize to close mobile menu on larger screens
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Handle search button click
  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };
  
  // Close search modal
  const closeSearchModal = () => {
    setIsSearchOpen(false);
  };
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Close mobile menu when clicking a link
  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };
  
  // Dropdown links handle navigation directly via href

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link href="/" className="text-xl font-bold">4CFC</Link>
        </div>
        
        {/* Mobile menu button - only shows on small screens */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Desktop & Mobile Navigation */}
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link href="/" onClick={handleMobileMenuItemClick}>Home</Link>
          <Link href="/about" onClick={handleMobileMenuItemClick}>About</Link>
          <Link href="/planning-worksheet" onClick={handleMobileMenuItemClick}>Planning Worksheet</Link>
          <Link href="/resources" onClick={handleMobileMenuItemClick}>Resources</Link>
          
          {/* College Collage Dropdown - Hoverable on desktop, clickable on mobile */}
          <div className="dropdown">
            <Link href="/college-collage" className="flex items-center text-white">
              A College Collage
              <span className="ml-1">▼</span>
            </Link>
            
            <div className="dropdown-content">
              <Link 
                href="/college-collage" 
                className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white border-b border-gray-200"
                onClick={handleMobileMenuItemClick}
              >
                All Categories
              </Link>
              <Link 
                href="/college-collage?category=limited-resource" 
                className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white border-b border-gray-200"
                onClick={handleMobileMenuItemClick}
              >
                Limited-Resource
              </Link>
              <Link 
                href="/college-collage?category=student-athletes" 
                className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white border-b border-gray-200"
                onClick={handleMobileMenuItemClick}
              >
                Student-Athletes
              </Link>
              <Link 
                href="/college-collage?category=international" 
                className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white border-b border-gray-200"
                onClick={handleMobileMenuItemClick}
              >
                International
              </Link>
              <Link 
                href="/college-collage?category=stem" 
                className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white"
                onClick={handleMobileMenuItemClick}
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
