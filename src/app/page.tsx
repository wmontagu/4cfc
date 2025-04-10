import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="header-gradient bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded">
        <h1>For College Students, From College Students</h1>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-8">
          For College Students, From College Students (4CFC) is your journey to higher education and beyond. At 4CFC, any student should be able to pave their own path to college, build a career, and pursue their dreams. We offer various systems of support so that you can unlock the door to a future that you can shape:
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="flex flex-col items-center">
            <div className="card w-full h-64"></div>
            <Link href="/planning-worksheet" className="text-blue-600 hover:underline text-xl font-medium mt-4">
              College Application Planning Worksheet
            </Link>
            <p className="text-center mt-4">
              The college application process can be daunting and stressful. Use our college application planning worksheet to organize application requirements, prioritize your tasks, and start making your futures!
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="card w-full h-64"></div>
            <Link href="/resources" className="text-blue-600 hover:underline text-xl font-medium mt-4">
              Application Season Resources
            </Link>
            <p className="text-center mt-4">
              Check out our compilation of college application resources to assist your journeys. From essay writing assistance to financial aid information to scholarship searches, these resources can help you fill in the blanks and get your questions answered.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="card w-full h-64"></div>
            <Link href="/college-collage" className="text-blue-600 hover:underline text-xl font-medium mt-4">
              A College Collage
            </Link>
            <p className="text-center mt-4">
              This series of interviews offers a glimpse into current (and past!) college students&apos; journeys through the college application process and during their college years. Learn about their decisions, challenges, and priorities, and hear what advice they have for up-and-coming college applicants!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
