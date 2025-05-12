"use client";

import Link from "next/link";
import { FaClipboardCheck, FaBookOpen, FaUserGraduate, FaArrowRight, FaChevronRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      {/* Modern gradient background */}
      <div className="absolute top-0 right-0 w-full h-screen bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 z-0"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl"></div>
      
      <div className="relative z-10 pt-10 pb-16 container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white leading-tight tracking-tight">
            <span className="relative inline-block">                
              <span className="relative z-10">For College Students,</span>
              <span className="absolute -bottom-0.5 left-0 right-0 h-3 bg-blue-500/20 rounded-lg -z-0 transform -skew-x-6"></span>
            </span>
            <br/> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">From College Students</span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto">
            At 4CFC, any student should be able to pave their own path to college, build a career, and pursue their dreams.
          </p>
        </div>
        
        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-gray-900 hover:bg-gradient-to-b hover:from-blue-900/40 hover:to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-blue-600/20 transition-all duration-300 text-center border border-gray-800 relative group">
            <div className="absolute inset-0 bg-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="mb-6 flex justify-center">
              <div className="rounded-full p-5 inline-flex transition-all duration-300 bg-blue-900/30 group-hover:bg-blue-500/30 group-hover:scale-110">
                <FaClipboardCheck className="text-blue-400 group-hover:text-blue-300 text-3xl transition-all duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white relative z-10">Planning Worksheet</h3>
            <p className="text-gray-400 mb-6 relative z-10">
              Organize your college application journey with our comprehensive planning tools.
            </p>
            <Link href="/planning-worksheet" className="relative z-10 text-blue-400 hover:text-blue-300 font-medium inline-flex items-center justify-center group">
              <span className="relative">Explore</span>
              <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 hover:bg-gradient-to-b hover:from-indigo-900/40 hover:to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-indigo-600/20 transition-all duration-300 text-center border border-gray-800 relative group">
            <div className="absolute inset-0 bg-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="mb-6 flex justify-center">
              <div className="rounded-full p-5 inline-flex transition-all duration-300 bg-indigo-900/30 group-hover:bg-indigo-500/30 group-hover:scale-110">
                <FaBookOpen className="text-indigo-400 group-hover:text-indigo-300 text-3xl transition-all duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white relative z-10">Application Resources</h3>
            <p className="text-gray-400 mb-6 relative z-10">
              Access essay writing assistance, financial aid information, and scholarship search tools.
            </p>
            <Link href="/resources" className="relative z-10 text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center justify-center group">
              <span className="relative">Explore</span>
              <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 hover:bg-gradient-to-b hover:from-purple-900/40 hover:to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-purple-600/20 transition-all duration-300 text-center border border-gray-800 relative group">
            <div className="absolute inset-0 bg-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="mb-6 flex justify-center">
              <div className="rounded-full p-5 inline-flex transition-all duration-300 bg-purple-900/30 group-hover:bg-purple-500/30 group-hover:scale-110">
                <FaUserGraduate className="text-purple-400 group-hover:text-purple-300 text-3xl transition-all duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white relative z-10">College Collage</h3>
            <p className="text-gray-400 mb-6 relative z-10">
              Read interviews and stories from current and past college students about their experiences.
            </p>
            <Link href="/college-collage" className="relative z-10 text-purple-400 hover:text-purple-300 font-medium inline-flex items-center justify-center group">
              <span className="relative">Explore</span>
              <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white rounded-xl p-10 md:p-12 text-center shadow-2xl max-w-4xl mx-auto transform group hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 transition-opacity duration-500"></div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative">Ready to Shape Your Future?</h2>
          <div className="h-1 w-16 bg-blue-400/50 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto relative">
            Access our tools, resources, and insights from real college students to make your application process smoother.
          </p>
          <Link 
            href="/planning-worksheet" 
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-blue-700 font-bold rounded-full shadow-md hover:shadow-blue-500/20 hover:shadow-lg hover:scale-105 transition-all duration-300 relative"
          >
            Get Started
            <FaChevronRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
