import React from 'react';
import users from '@/app/patients/users';
import Image from 'next/image';
import Back from '@/app/component/back';

const Page = async ({
  params,
}: {
  params: Promise<{ patientId: string; reportId: string }>;
}) => {
  const p = (await params).patientId;
  const r = (await params).reportId;
  return (
    <div className="bg-[#151517] bg-opacity-75 flex justify-evenly items-center w-full h-full fixed top-0 z-[4] ">
      <div
        className="w-full lg:w-[40%] h-[95%] flex justify-center items-center rounded-lg gap-4 flex-col"
        style={{
          background: 'linear-gradient(45deg, #9252f86e, #008872ba)',
        }}
      >
        <Back></Back>
        <Image
          className="w-full h-[87%]"
          src={users[parseInt(p)].reports[parseInt(r)].src as string}
          alt="report"
          width={350}
          height={350}
        ></Image>
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="font-bold text-lg text-white">
            Date: {users[parseInt(p)].reports[parseInt(r)].date}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
