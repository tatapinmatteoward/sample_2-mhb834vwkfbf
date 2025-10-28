import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HolisticHeal Blog",
  description: "A simple blog focused on holistic alternative medicine, highlighting natural solutions for specific health problems like stress, digestion, and immunity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-2xl font-bold">
                HolisticHeal Blog
              </a>
              <div className="flex items-center space-x-8">
                <a href="/" className="hover:text-primary transition">
                  Home
                </a>
                <a href="/about/" className="hover:text-primary transition">
                  About
                </a>
                
              </div>
            </div>
          </div>
        </nav>
        
        <main className="max-w-5xl mx-auto px-6 py-12">
          {children}
        </main>
        
        <footer className="border-t mt-20">
          <div className="max-w-5xl mx-auto px-6 py-8 text-center text-muted-foreground">
            <p className="text-sm">&copy; {new Date().getFullYear()} HolisticHeal Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
