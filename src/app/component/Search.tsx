'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import users from '@/app/patients/users';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/patients/patients.module.css';
import { ArrowUpRight } from 'lucide-react';
interface Props {
  patientId: string;
}

const Search = ({ patientId }: Props) => {
  const [date, setDate] = useState('');
  const [date1, setDate1] = useState('');
  useEffect(() => {
    const [year, month, day] = date.split('-');
    setDate1(day && month && year ? `${day}-${month}-${year}` : '');
  }, [date]);

  return (
    <>
      <div className="space-y-2 w-[90%] flex flex-col justify-center items-center">
        <label htmlFor="date" className="text-xl font-semibold">
          Search Report Date
        </label>
        <input
          type="date"
          className={`w-[90%] md:w-[60%] ${styles.filter}`}
          value={date}
          placeholder="27/12/2021"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input>
      </div>
      <section className="flex flex-wrap w-[95%] h-full gap-8 justify-center items-center ">
        {users[parseInt(patientId)].reports.map((element, index) => (
          <div key={index}>
            {element.date.includes(date1) && (
              <div
                className="w-[210px] h-[300px]  flex justify-center items-center rounded-lg gap-4 flex-col"
                style={{
                  background: 'linear-gradient(45deg, #9252f86e, #008872ba)',
                }}
              >
                <div className="w-full h-[250px]">
                  <span
                    title="bigger image"
                    className="absolute rounded-[18px] p-2  cursor-pointer"
                    style={{
                      background:
                        'linear-gradient(45deg, #9252f86e, #008872ba)',
                    }}
                  >
                    <Link href={`/report/${patientId}/${index}`}>
                      <ArrowUpRight />
                    </Link>
                  </span>
                  <Image
                    className="w-full"
                    src={element.src as string}
                    alt="report"
                    width={350}
                    height={350}
                  ></Image>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <h1 className="font-bold text-lg">Date: {element.date}</h1>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Search;
