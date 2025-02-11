'use client';
import React, { useState } from 'react';
import users from '@/app/patients/users';
import Link from 'next/link';
import styles from '@/app/patients/patients.module.css';
import TransportLink from '@/app/record/[patientId]/TransportLink';
import TransitionLink1 from '../component/TransportLink';
const Page = () => {
  const [phone, setPhone] = useState('');
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
        <h1 className="text-4xl lg:text-5xl font-bold">Patients</h1>
        <div className="space-y-2 w-[90%] flex flex-col justify-center items-center">
          <label htmlFor="phone" className="text-xl font-semibold">
            Search Phone number
          </label>
          <input
            type="phone"
            className={`w-[90%] md:w-[60%] ${styles.filter}`}
            value={phone}
            placeholder="phone number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
        </div>
        <section className="flex flex-wrap w-[95%] h-full gap-8 justify-center items-center ">
          <div>
            <div className="w-[210px] h-[260px] bg-[#ffffff96] flex justify-center items-center rounded-lg gap-4 flex-col">
              <TransportLink href={`/register-user`}>
                <div className="w-full h-[66%] flex flex-col gap-16">
                  <div
                    className="relative p-4 
           w-full h-full  item flex justify-center items-center hover:cursor-pointer  scale-[0.9]"
                  >
                    <div className="h-[2rem] w-[11rem] rounded-lg bg-[#58ac9bd8] "></div>
                    <div className="w-[2rem] h-[10rem] rounded-lg bg-[#58ac9bd8] transform rotate-180 absolute"></div>
                  </div>{' '}
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <h1 className="font-bold text-lg">Add patient</h1>
                  </div>
                </div>
              </TransportLink>
            </div>
          </div>
          {users.map((element, index) => (
            <div key={index}>
              {element.number.includes(phone) && (
                <div className="w-[210px] h-[260px] bg-[#ffffff96] flex justify-center items-center rounded-lg gap-4 flex-col">
                  <div
                    className={`w-[80px] h-[80px] ${
                      element.gender === 'man'
                        ? 'bg-[url(/man.jpg)]'
                        : 'bg-[url(/man.jpg)]'
                    } bg-cover bg-center rounded-[50%]`}
                  ></div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <h1 className="font-bold text-lg">{element.name}</h1>
                    <h2 className="text-sm">{element.number}</h2>
                  </div>
                  <TransitionLink1
                    label={'Record'}
                    href={`/record/${element.id}`}
                  ></TransitionLink1>
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
      <div className="flex w-full h-[370px] bottom-0 justify-between">
        <div className="w-[70%] lg:w-[40%] h-full left-0 bg-[url(/side1.png)] bg-cover bg-center relative rotate-[180deg]  opacity-[50%]"></div>

        <div className="w-[70%] lg:w-[40%] h-full right-0 bg-[url(/side2.png)] bg-cover bg-center relative opacity-[50%]"></div>
      </div>
    </div>
  );
};

export default Page;
