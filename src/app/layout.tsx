import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "4CFC - For College Students, From College Students",
  description: "Helping high schoolers navigate the college application process",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <footer className="py-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} 4CFC - For College Students, From College Students</p>
        </footer>
      </body>
    </html>
  );
}
