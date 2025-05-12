"use client";

export default function About() {
  return (
    <>
      {/* Top spacing to account for the fixed navbar */}
      <div className="header-gradient bg-gradient-to-r from-blue-300 to-purple-300 p-3 rounded">
        <h1>About 4CFC</h1>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 bg-amber-50">
        <p className="text-lg mb-8">
          For College Students, From College Students (4CFC) is your journey to higher education and beyond. At 4CFC, any student should be able to pave their own path to college, build a career, and pursue their dreams. We offer various systems of support so that you can unlock the door to a future that you can shape.
        </p>
        
        <p className="text-lg mb-8">
          Our mission is to encourage high schoolers to pursue higher education by guiding them on their application journey, introducing resources, and offering insight into the college experience.
        </p>
        
        <p className="text-lg mb-8">
          The ultimate hope is that these materials can assist students in the college selection/application process and get them excited to continue their learning journey.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-64 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"></div>
          <div>
            <h2 className="text-4xl text-blue-600 mb-6 font-bold">About the Creator</h2>
            <p className="text-lg mb-4 text-gray-700">Ainika Hou...</p>
            <p className="text-lg mb-4 text-gray-700">
              Biography of Ainika...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
