export default function Resources() {
  return (
    <>
      <div className="header-gradient">
        <h1>College Application Resources</h1>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Common topics:</h2>
        
        <ol className="list-decimal pl-8 mb-8 text-lg space-y-4">
          <li>Essay writing (e.g. College Essay Guy)</li>
          <li>Scholarship search</li>
          <li>Financial Aid info (e.g. FAFSA, etc.)</li>
          <li>Tips on succeeding during the college app process</li>
          <li>Articles on "Why college"</li>
          <li>Articles on "How to choose the right college" (e.g. what region, big school/small school, etc.)</li>
          <li>
            <p>→ can eventually add this as a "quiz" feature on the website: students can come here to fill out a "questionnaire" with their preferences, and an algorithm will run to output a selection of schools that may be of interest to them</p>
          </li>
          <li>How to ask / who to ask for recommendation letters?</li>
        </ol>
        
        <p className="text-lg italic mb-8">
          → this could eventually be turned into a blog / community forum style feature of the website, where visitors can share what resources they used as well as any tips for any of the above!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Essay Writing Resources</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://www.collegeessayguy.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">College Essay Guy</a> - Free guides and resources for writing college essays</li>
              <li><a href="https://www.khanacademy.org/college-careers-more/college-admissions/applying-to-college" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Khan Academy</a> - College application process guides</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Financial Aid Resources</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://studentaid.gov/h/apply-for-aid/fafsa" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FAFSA</a> - Free Application for Federal Student Aid</li>
              <li><a href="https://www.scholarships.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Scholarships.com</a> - Search for scholarships</li>
              <li><a href="https://www.fastweb.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Fastweb</a> - Scholarship search platform</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
