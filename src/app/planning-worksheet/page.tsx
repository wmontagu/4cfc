export default function PlanningWorksheet() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Top spacing to account for the fixed navbar */}
      <div className="pt-16 md:pt-20"></div>
      
      <div className="header-gradient bg-gradient-to-r from-blue-300 to-purple-300 p-4 sm:p-5 rounded mb-6 sm:mb-8 mx-4 sm:mx-6 md:mx-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left text-gray-800">College<br className="sm:hidden"/> Application<br className="sm:hidden"/> Planning<br className="sm:hidden"/> Worksheet</h1>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-700">
          Our college planning worksheet helps you stay organized throughout your application process:
        </p>
        
        <ul className="list-disc pl-5 sm:pl-8 mb-6 sm:mb-8 text-base sm:text-lg text-gray-700">
          <li className="mb-3">Organize your safeties, targets, and reach schools.</li>
          <li className="mb-3">Keep important dates and deadlines in one place.</li>
          <li className="mb-3">Brainstorm topics for college essays.</li>
          <li className="mb-3">Create checklists of requirements for each institution (including financial aid information, recommendation letters, transcripts, essays, etc.).</li>
        </ul>
        
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4 text-center">Ready to get started?</h2>
          <p className="mb-4 sm:mb-6 text-gray-700 text-sm sm:text-base text-center">
            Download our comprehensive Excel spreadsheet to track your college application process. This tool will help you stay organized and on top of deadlines.
          </p>
          <div className="flex justify-center">
            <a 
              href="/CollegeSpreadsheet.xlsx" 
              download="CollegeSpreadsheet.xlsx"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
              </svg>
              <span>Download Spreadsheet</span>
            </a>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}
