import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "함께 묻고 함께 답하기",
  description: "함께 문제 해결하기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-200`}
      >
        <ThemeProvider>
          <div className="justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <div className="w-full border-b border-gray-200 dark:border-gray-700 mt-8 pb-2 text-left flex items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <Image src="/logo.svg" alt="Logo" width={64} height={64} />
                <Link href="/"><h1 className="text-2xl font-bold">함께 묻고 함께 답하기</h1></Link>
              </div>
              <ThemeToggle />
            </div>
            <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
              {children}
            </main>
            <footer className="w-full border-t border-gray-200 dark:border-gray-700 mt-8 py-4 text-center">
              <p>© 2025 함께 묻고 함께 답하기. All rights reserved.</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
