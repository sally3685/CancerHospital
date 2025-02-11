'use client';
import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/utils/animations';
import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
}

const TransitionLink = ({ href, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button className="text-left w-full" onClick={handleClick}>
      {children}
    </button>
  );
};

export default TransitionLink;
