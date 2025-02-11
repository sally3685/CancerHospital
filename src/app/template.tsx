'use client';

import { animatePageIn } from '@/utils/animations';
import { useEffect } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-[#9252f86e] z-10 fixed top-0 left-0 w-0"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-[#008872ba] z-10 fixed top-0 left-0 w-0"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-[#006288b8] z-10 fixed top-0 left-0 w-0"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-[#d0f3e16e] z-10 fixed top-0 left-0 w-0"
      />
      {children}
    </div>
  );
}
