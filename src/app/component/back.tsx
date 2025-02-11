'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
const Back = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.back();
        router.refresh();
      }}
      className=" h-[24px] relative text-white text-start p-2 text-[20px] rounded left-0 w-full"
    >
      &#10008;
    </button>
  );
};

export default Back;
