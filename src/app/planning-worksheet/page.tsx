export default function PlanningWorksheet() {
  return (
    <>
      <div className="header-gradient bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded">
        <h1>College Application Planning Worksheet</h1>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-8">
          Our college planning worksheet helps you stay organized throughout your application process:
        </p>
        
        <ul className="list-disc pl-8 mb-8 text-lg">
          <li className="mb-3">Organize your safeties, targets, and reach schools.</li>
          <li className="mb-3">Keep important dates and deadlines in one place.</li>
          <li className="mb-3">Brainstorm topics for college essays.</li>
          <li className="mb-3">Create checklists of requirements for each institution (including financial aid information, recommendation letters, transcripts, essays, etc.).</li>
        </ul>
        
        <div className="card mb-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Ready to get started?</h2>
          <p className="mb-6">
            Download our comprehensive Excel spreadsheet to track your college application process. This tool will help you stay organized and on top of deadlines.
          </p>
          <div className="flex justify-center">
            <a 
              href="/CollegeSpreadsheet.xlsx" 
              download="CollegeSpreadsheet.xlsx"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
              </svg>
              <span>Download Spreadsheet</span>
            </a>
          </div>
        </div>
        
        <p className="text-lg font-medium mb-4">
          Future enhancement: We plan to create a digital version of this worksheet where you can create an account, store your information online, and update it as you progress through the application process.
        </p>
      </div>
    </>
  );
}
