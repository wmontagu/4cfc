import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

// Load and configure fonts for the site
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "4CFC - For College Students, From College Students",
  description: "Helping high schoolers navigate the college application process",
  icons: {
    icon: '/favicon.ico',
  },
};

// Root layout that wraps all pages and provides common elements (navbar and footer)
// This layout persists between page navigations
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      {/* Flex layout keeps footer at bottom even with minimal content */}
      <body className={`flex flex-col min-h-screen font-sans text-gray-900 antialiased`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-4 sm:py-6 text-center text-gray-700 text-sm bg-gray-50 border-t">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <p className="font-medium">© {new Date().getFullYear()} 4CFC - For College Students, From College Students</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
