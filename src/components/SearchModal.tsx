"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch, FaTimes } from 'react-icons/fa';

// Define the structure of search results
interface SearchResult {
  title: string;
  path: string;
  excerpt: string;
  section?: string;
}

// Mock data for search functionality
// In a real application, this would be dynamically generated from your content
const siteContent: SearchResult[] = [
  {
    title: "Planning Worksheet",
    path: "/planning-worksheet",
    excerpt: "Download our comprehensive college planning worksheet to organize your application process.",
    section: "main"
  },
  {
    title: "Essay Writing Resources",
    path: "/resources",
    excerpt: "College Essay Guy - Free guides and resources for writing college essays",
    section: "resources"
  },
  {
    title: "Financial Aid Resources",
    path: "/resources",
    excerpt: "FAFSA - Free Application for Federal Student Aid",
    section: "resources"
  },
  {
    title: "Limited-Resource Backgrounds",
    path: "/college-collage?category=limited-resource",
    excerpt: "Students from low-income, first-generation, or otherwise limited-resource backgrounds share their unique challenges",
    section: "college-collage"
  },
  {
    title: "Student-Athletes",
    path: "/college-collage?category=student-athletes",
    excerpt: "College student-athletes discuss balancing academics with their sport, the recruitment process",
    section: "college-collage"
  },
  {
    title: "International Students",
    path: "/college-collage?category=international",
    excerpt: "International students share their experiences applying to U.S. colleges",
    section: "college-collage"
  },
  {
    title: "STEM Majors",
    path: "/college-collage?category=stem",
    excerpt: "Students pursuing degrees in Science, Technology, Engineering, and Mathematics",
    section: "college-collage"
  },
  {
    title: "About 4CFC",
    path: "/about",
    excerpt: "For College Students, From College Students (4CFC) is your journey to higher education and beyond.",
    section: "about"
  }
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  useEffect(() => {
    // Focus the search input when modal opens
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
    
    // Reset search when modal closes
    if (!isOpen) {
      setSearchTerm('');
      setResults([]);
    }
    
    // Add escape key listener
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  // Handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setResults([]);
      return;
    }
    
    // Perform search on our mock content
    const searchResults = siteContent.filter(item => 
      item.title.toLowerCase().includes(term.toLowerCase()) || 
      item.excerpt.toLowerCase().includes(term.toLowerCase())
    );
    
    setResults(searchResults);
  };
  
  // Navigate to result
  const handleResultClick = (result: SearchResult) => {
    router.push(result.path);
    onClose();
  };
  
  // Early return if modal is closed
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] flex flex-col">
        {/* Search Header */}
        <div className="p-4 border-b flex items-center">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search the entire website..."
            className="flex-1 outline-none text-lg"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close search"
            title="Close search"
          >
            <FaTimes />
          </button>
        </div>
        
        {/* Search Results */}
        <div className="overflow-y-auto flex-1">
          {results.length === 0 && searchTerm !== '' && (
            <div className="p-4 text-center text-gray-500">
              No results found for &quot;{searchTerm}&quot;
            </div>
          )}
          
          {results.length > 0 && (
            <ul className="divide-y">
              {results.map((result, index) => (
                <li 
                  key={index} 
                  className="p-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-600">{result.title}</h3>
                      <p className="text-sm text-gray-500">{result.path}</p>
                      <p className="mt-1">{result.excerpt}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          
          {searchTerm === '' && (
            <div className="p-4 text-center text-gray-500">
              Type to search across all pages
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
