export default function Resources() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Top spacing to account for the fixed navbar */}
      <div className="pt-16 md:pt-20"></div>
    
      <div className="header-gradient bg-gradient-to-r from-blue-300 to-purple-300 p-4 sm:p-5 rounded mb-6 sm:mb-8 mx-4 sm:mx-6 md:mx-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">College Application Resources</h1>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">

        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6">Common Topics</h2>
        
        <ol className="list-decimal pl-5 sm:pl-8 mb-6 sm:mb-8 text-base sm:text-lg space-y-3 sm:space-y-4">
          <li>Essay writing (e.g. College Essay Guy)</li>
          <li>Scholarship search</li>
          <li>Financial Aid info (e.g. FAFSA, etc.)</li>
          <li>Tips on succeeding during the college app process</li>
          <li>Articles on &quot;Why college&quot;</li>
          <li>Articles on &quot;How to choose the right college&quot; (e.g. what region, big school/small school, etc.)</li>
          <li>
            <p className="text-gray-700">→ can eventually add this as a &quot;quiz&quot; feature on the website: students can come here to fill out a &quot;questionnaire&quot; with their preferences, and an algorithm will run to output a selection of schools that may be of interest to them</p>
          </li>
          <li>How to ask / who to ask for recommendation letters?</li>
        </ol>
        
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Essay Writing Resources</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><a href="https://www.collegeessayguy.com/" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">College Essay Guy</a> - Free guides and resources for writing college essays</li>
              <li><a href="https://www.khanacademy.org/college-careers-more/college-admissions/applying-to-college" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Khan Academy</a> - College application process guides</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Financial Aid Resources</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><a href="https://studentaid.gov/h/apply-for-aid/fafsa" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">FAFSA</a> - Free Application for Federal Student Aid</li>
              <li><a href="https://www.scholarships.com/" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Scholarships.com</a> - Search for scholarships</li>
              <li><a href="https://www.fastweb.com/" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Fastweb</a> - Scholarship search platform</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
