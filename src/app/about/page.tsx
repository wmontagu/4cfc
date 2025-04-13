export default function About() {
  return (
    <>
      <div className="header-gradient">
        <h1 className="text-5xl font-bold">About</h1>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-8">
          For College Students, From College Students (4CFC) is your journey to higher education and beyond. At 4CFC, any student should be able to pave their own path to college, build a career, and pursue their dreams. We offer various systems of support so that you can unlock the door to a future that you can shape.
        </p>
        
        <p className="text-lg mb-8">
          Our mission is to encourage high schoolers to pursue higher education by guiding them on their application journey, introducing resources, and offering insight into the college experience.
        </p>
        
        <p className="text-lg mb-8">
          The ultimate hope is that these materials can assist students in the college selection/application process and get them excited to continue their learning journey.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
          <div className="card h-64"></div>
          <div>
            <h2 className="text-4xl text-blue-600 mb-6">About the Creator</h2>
            <p className="text-lg mb-4">Ainika Hou...</p>
            <p className="text-lg mb-4">
              Biography of Ainika...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
