import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cancer hospital dashboard',
  description: 'All patients and their important reports',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-full m-0 p-0 before:fixed before:content-[''] before:w-full before:h-full before:bg-[url(/back.gif)]  before:bg-cover before:bg-center text-[#1b4b47]">
        {children}
        {modal}
      </body>
    </html>
  );
}
