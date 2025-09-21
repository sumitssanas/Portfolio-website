import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Github, Linkedin, Code } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Sumit Sanas - Portfolio',
  description: 'Finance Professional Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body className={cn("antialiased font-sans", inter.variable, poppins.variable)}>
        <div className="flex flex-col min-h-screen w-full">
          <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-4 sm:px-8 lg:px-12 backdrop-blur-sm bg-background/90 border-b border-border">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-primary tracking-wide font-poppins">
                Sumit Santosh Sanas
              </Link>
              <div className="hidden md:flex items-center gap-2">
                <a href="https://www.linkedin.com/in/sumitsanas" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>
            {/* Mobile Menu can be added here later */}
          </header>
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
