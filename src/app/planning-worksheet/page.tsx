export default function PlanningWorksheet() {
  return (
    <>
      <div className="header-gradient">
        <h1 className="text-5xl font-bold">College Application Planning Worksheet</h1>
        
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-8">
          The college planning worksheet is (will be) a downloadable PDF that helps you stay organized:
        </p>
        
        <ul className="list-disc pl-8 mb-8 text-lg">
          <li className="mb-2">Organize your safeties, targets, and reach schools.</li>
          <li className="mb-2">Keep important dates and deadlines in one place.</li>
          <li className="mb-2">Brainstorm topics for college essays.</li>
          <li className="mb-2">Create checklists of requirements for each institution (including financial aid information, recommendation letters, transcripts, essays, etc.).</li>
        </ul>
        
        <p className="text-lg font-medium mb-4">
          (Future: make the worksheet digitized → create an account and store worksheet, update as process goes)
        </p>
        
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
            Download Worksheet (Coming Soon)
          </button>
        </div>
      </div>
    </>
  );
}
