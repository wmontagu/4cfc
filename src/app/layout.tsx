// Import necessary Next.js and React types/components
import type { Metadata } from "next";

// Import fonts from Google Fonts using Next.js font optimization
import { Inter, Poppins } from "next/font/google";

// Import global CSS styles
import "./globals.css";

// Import the Navbar component for site navigation
import Navbar from "../components/Navbar";

// Define font variables for Inter and Poppins fonts
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "4CFC - For College Students, From College Students",
  description: "Helping high schoolers navigate the college application process",
  icons: {
    icon: '/favicon.ico',
  },
};

/**
 * RootLayout component - The main layout wrapper for all pages in the application
 * 
 * This is the root layout that wraps every page in the app. It includes:
 * - HTML document with language and font variables
 * - Body with flex column layout for sticky footer
 * - Navbar at the top of every page
 * - Main content area that grows to fill available space
 * - Footer at the bottom of every page
 * 
 * @param {React.ReactNode} children - The page content to be rendered inside the layout
 * @returns {JSX.Element} The complete layout with header, content area, and footer
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      {/* 
        Body uses flex column layout to ensure footer stays at bottom 
        even with minimal content on the page 
      */}
      <body className={`flex flex-col min-h-screen font-sans text-gray-900 antialiased`}>
        {/* Navigation bar - appears on all pages */}
        <Navbar />
        
        {/* Main content area - flexes to fill available space */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer with copyright information */}
        <footer className="py-6 text-center text-white text-sm bg-gray-50 border-t">
          <div className="container mx-auto px-6 md:px-12">
            <p className="font-medium">© {new Date().getFullYear()} 4CFC - For College Students, From College Students</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
