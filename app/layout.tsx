import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
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
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
          <div className="w-full border-b border-gray-100/30 mt-8 pb-2 text-left flex items-center gap-4">
            <Image src="/logo.svg" alt="Logo" width={64} height={64} className="ml-4" />
            <Link href="/"><h1 className="text-2xl font-bold">함께 묻고 함께 답하기</h1></Link>
          </div>
          <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
            {children}
          </main>
          <footer className="w-full border-t border-gray-100/30 mt-8 py-4 text-center text-gray-500">
            <p>© 2025 함께 묻고 함께 답하기. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
