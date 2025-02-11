'use client';
import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/utils/animations';

interface Props {
  href: string;
  label: string;
}

const TransitionLink1 = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      className="bg-[#58ac9bd8] rounded-lg p-2"
      style={{
        boxShadow: '3px 3px 5px #bebebe, -3px -3px 5px #ffffff',
      }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink1;
