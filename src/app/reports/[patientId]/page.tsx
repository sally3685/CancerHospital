import React from 'react';
import users from '@/app/patients/users';
import Search from '@/app/component/Search';
const Page = async ({ params }: { params: Promise<{ patientId: string }> }) => {
  const patientId = (await params).patientId;
  return (
    <div className="h-full w-full">
      <div
        className=" z-[1] sm:w-[65%] lg:w-[50%] w-[90%] xl:w-[45%] h-[40%] lg:h-[350px] xl:h-[370px] bg-[url(/header.gif)]  bg-center absolute"
        style={{ backgroundSize: '100% 100%' }}
      >
        <div className="top-[20px] left-[20px] w-[350px] scale-[0.8] bg-[url(/logo.svg)] bg-cover bg-center h-[150px] z-10 absolute"></div>
      </div>
      <div className="w-[70%] lg:w-[40%] h-[370px] right-0 bg-[url(/side1.png)] bg-cover bg-center absolute top-0 opacity-[50%]"></div>

      <main className=" w-full min-h-full z-[1] gap-10 relative flex justify-center flex-col items-center top-[300px] xl:top-[250px] 2xl:top-[200px]">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Reports of{' '}
          <span className="text-[#006288b8]">
            {users[parseInt(patientId)].name}
          </span>
        </h1>
        <Search patientId={patientId}></Search>
      </main>

      <div className="flex w-full h-[370px] bottom-0 justify-between ">
        <div className="w-[70%] lg:w-[40%] h-full left-0 bg-[url(/side1.png)] bg-cover bg-center relative rotate-[180deg]  opacity-[50%]"></div>

        <div className="w-[70%] lg:w-[40%] h-full right-0 bg-[url(/side2.png)] bg-cover bg-center relative opacity-[50%]"></div>
      </div>
    </div>
  );
};

export default Page;
