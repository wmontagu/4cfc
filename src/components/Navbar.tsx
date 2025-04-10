import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" className="text-xl font-bold">4CFC</Link>
      </div>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/planning-worksheet">Planning Worksheet</Link>
        <Link href="/resources">Resources</Link>
        <div className="relative group">
          <Link href="/college-collage" className="flex items-center">
            A College Collage
            <span className="ml-1">▼</span>
          </Link>
        </div>
        <div className="search-icon">
          <FaSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
