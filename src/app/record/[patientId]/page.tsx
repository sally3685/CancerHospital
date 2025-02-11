'use client';
import React, { useState } from 'react';
import styles from '@/app/record/[patientId]/record.module.css';
import users from '@/app/patients/users';
import patientsDetails from './patientDetails';
import { useParams } from 'next/navigation';
import ChartPie from '@/app/component/ChartPie';
import ChartMap from '@/app/component/ChartMap';
import Cards from '@/app/component/Cards';
import TransportLink from './TransportLink';
// { params }: { params: Promise<{ patientId: string }> }
const Page = () => {
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);
  const params = useParams();
  const patientId = params.patientId as string;
  return (
    <>
      <div
        className={` w-[100px] z-[4]  rounded-xl p-2 absolute block lg:hidden cursor-pointer ${
          open
            ? 'right-[5%] bg-[#ffffff96] text-[#00aa8e]'
            : 'left-0 bg-[#00aa8e] text-[#ffffff]'
        }`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? 'close menu' : 'open menu'}
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-4">
          <aside
            className={`${styles.side} ${
              open === false
                ? 'hidden lg:block absolute !w-[100%] lg:relative lg:!w-[30%] xl:!w-[25%]'
                : 'block absolute !w-[100%] lg:!w-[30%] lg:relative xl:!w-[25%]'
            } lg:block`}
            id="open"
          >
            <div
              className={`${styles.sideUp} flex justify-center items-center`}
            >
              <div className="left-0 top-[-1%] w-[350px] scale-[0.5] bg-[url(/logo.svg)] bg-cover bg-center h-[150px] z-10 absolute"></div>
              <div className="w-full justify-center items-center flex flex-col">
                <div className="w-[55%] lg:w-[210px] h-[160px] bg-[#ffffff96] flex justify-end items-center py-4 rounded-tl-xl rounded-tr-xl gap-4 flex-col">
                  <div
                    className={`w-[80px] h-[80px] ${
                      users[parseInt(patientId)].gender === 'man'
                        ? 'bg-[url(/man.jpg)]'
                        : 'bg-[url(/man.jpg)]'
                    } bg-cover bg-center rounded-[50%]`}
                  ></div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <h1 className="font-bold text-lg">
                      {users[parseInt(patientId)].name}
                    </h1>
                  </div>
                </div>
                <div className="w-[80%] lg:w-[300px] h-[200px] bg-[#ffffff96] flex justify-center  items-center rounded-xl gap-4 flex-col overflow-y-scroll">
                  <div className="flex flex-col gap-2 justify-center items-center h-full py-4 w-full ">
                    <h1 className="font-bold text-lg">Illnesses</h1>
                    <ul className="relative h-full w-full">
                      {patientsDetails[0].ilnesses.map((element, index) => (
                        <li
                          key={index}
                          className="hover:bg-[#9252f881] p-1 w-full text-center space-y-2 text-lg"
                        >
                          {element.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-[80%] lg:w-[300px] bg-[#ffffff96] mt-4 mx-4 flex justify-center  items-center rounded-xl gap-4 flex-col ">
                  <div className="flex flex-col gap-2 justify-center items-center h-full py-4 mt-4 w-full ">
                    <h1 className="font-bold text-xl">More Informatoins</h1>
                    <ul className="relative h-full w-full">
                      <li className="hover:bg-[#9252f881] p-1 w-full text-center space-y-2 text-lg">
                        <span className="font-[550]">Blood Type: </span>{' '}
                        {users[parseInt(patientId)].bloodType}
                      </li>
                      <li className="hover:bg-[#9252f881] p-1 w-full text-center space-y-2 text-lg">
                        <span className="font-[550]">Gender: </span>{' '}
                        {users[parseInt(patientId)].gender}
                      </li>
                      <li className="hover:bg-[#9252f881] p-1 w-full text-center space-y-2 text-lg">
                        <span className="font-[550]">City: </span>{' '}
                        {users[parseInt(patientId)].city}
                      </li>
                      <li className="hover:bg-[#9252f881] p-1 w-full text-center space-y-2 text-lg">
                        <span className="font-[550]">Smoker: </span>{' '}
                        {users[parseInt(patientId)].smoker ? 'yes' : 'no'}
                      </li>
                      <li className="hover:bg-[#9252f881] p-1 w-full text-center space-y-2 text-lg">
                        <span className="font-[550]">
                          First Relative Name:{' '}
                        </span>{' '}
                        {users[parseInt(patientId)].firstrelativeName}
                      </li>
                      <li className="hover:bg-[#9252f881] p-1 w-full text-center space-y-2 text-lg">
                        <span className="font-[550]">
                          First Relative number:{' '}
                        </span>{' '}
                        {users[parseInt(patientId)].firstrelativeNumber}
                      </li>
                      <li className="hover:bg-[#9252f881] p-1 w-full text-center space-y-2 text-lg">
                        <span className="font-[550]">
                          second Relative Name:{' '}
                        </span>{' '}
                        {users[parseInt(patientId)].secondrelativeName}
                      </li>
                      <li className="hover:bg-[#9252f881] p-1 w-full text-center space-y-2 text-lg">
                        <span className="font-[550]">
                          second Relative number:{' '}
                        </span>{' '}
                        {users[parseInt(patientId)].secondrelativeNumber}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <main className=" w-full min-h-full z-[1] gap-20 relative flex justify-center flex-col items-center top-0 p-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Report</h1>

            <div className="w-full flex lg:justify-between justify-center gap-4 items-center flex-wrap lg:flex-nowrap">
              <div className="flex flex-col lg:w-1/2 w-full h-1/2 lg:h-full min-w-[350px] gap-4 justify-start items-center">
                <h2 className="font-bold w-full text-center text-xl">
                  Illnesses Doctors
                </h2>
                <div className="space-y-2 w-[100%] flex flex-col gap-2">
                  <label htmlFor="phone" className="text-lg font-semibold">
                    Search illnessess
                  </label>
                  <input
                    type="filter"
                    className={`w-full ${styles.filter}`}
                    value={filter}
                    placeholder="illnessess"
                    onChange={(e) => {
                      setFilter(e.target.value);
                    }}
                  ></input>
                </div>
                <table
                  className={`${styles.neumorphic} ${styles.table} h-[90%] w-full `}
                >
                  <thead>
                    <tr>
                      <th>Illness</th>
                      <th>Doctor</th>
                      <th>Treatment</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientsDetails[
                      parseInt(patientId)
                    ].ilnesses[0].doctors.map((element, index) => (
                      <React.Fragment key={index}>
                        {element.treatment.includes(filter) ? (
                          <tr>
                            <td>{element.treatment}</td>
                            <td>{element.name}</td>
                            <td>{element.type}</td>
                            <td>{element.details}</td>
                          </tr>
                        ) : (
                          <></>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              <ChartPie />
            </div>

            <div className="w-full flex lg:justify-between justify-center gap-4 items-center flex-wrap  h-[500px]">
              <h2 className="font-bold w-full  text-xl">Illnesses Detailes</h2>
              <ChartMap />
            </div>
          </main>
        </div>
        <div className="w-full flex lg:justify-evenly z-[1] justify-center gap-12 items-center flex-wrap lg:flex-nowrap p-4">
          <div className="gap-4 flex flex-col lg:w-[40%] w-full h-full min-w-[320px]  items-center">
            <h2 className="text-xl font-bold w-full text-left">
              Rps of doctors
            </h2>

            <TransportLink href={`/reports/${patientId}`}>
              <h3 className="hover:text-[#9252f86e] text-lg font-bold cursor-pointer w-full text-left">
                Open Gallery of reports
              </h3>
            </TransportLink>
            <Cards patientId={patientId}></Cards>
          </div>
          <div className="gap-4 flex flex-col lg:w-[40%] w-full h-full min-w-[350px] ">
            <h2 className="text-xl font-bold ">
              Upcoming doctor's appointments
            </h2>

            {/* <TransportLink href={`/appointments/${patientId}`}>
              <h3 className="hover:text-[#9252f86e] text-lg font-bold cursor-pointer w-full text-left">
                Open full list of previuse Appoinments
              </h3>
            </TransportLink> */}
            <div className="rounded-[16px] w-full h-full overflow-hidden  min-h-[500px]">
              <table className="relative w-full h-full min-h-[500px] text-center bg-[#ffffff96]">
                <thead className="bg-[#9252f881] font-medium ">
                  <tr>
                    <th className="p-3">Sun</th>
                    <th className="p-3">Mon</th>
                    <th className="p-3">Tue</th>
                    <th className="p-3">Wed</th>
                    <th className="p-3">Thu</th>
                    <th className="p-3">Fri</th>
                    <th className="p-3">Sat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.calTd}></td>
                    <td className={styles.calTd}>1</td>
                    <td className={styles.calTd}>2</td>
                    <td className={styles.calTd}>3</td>
                    <td className={styles.calTd}>4</td>
                    <td className={styles.calTd}>5</td>
                    <td className={styles.calTd}>6</td>
                  </tr>
                  <tr>
                    <td className={styles.calTd}>7</td>
                    <td className={styles.calTd}>8</td>
                    <td className={`${styles.calTd} bg-[#a9fff7]`}>9</td>
                    <td className={styles.calTd}>10</td>
                    <td className={styles.calTd}>11</td>
                    <td className={styles.calTd}>12</td>
                    <td className={styles.calTd}>13</td>
                  </tr>
                  <tr>
                    <td className={styles.calTd}>14</td>
                    <td className={styles.calTd}>15</td>
                    <td className={styles.calTd}>16</td>
                    <td className={styles.calTd}>17</td>
                    <td className={styles.calTd}>18</td>
                    <td className={`${styles.calTd} bg-[#94fbab]`}>19</td>
                    <td className={styles.calTd}>20</td>
                  </tr>
                  <tr>
                    <td className={styles.calTd}>21</td>
                    <td className={`${styles.calTd} bg-[#82aba1]`}>22</td>
                    <td className={styles.calTd}>23</td>
                    <td className={styles.calTd}>24</td>
                    <td className={styles.calTd}>25</td>
                    <td className={styles.calTd}>26</td>
                    <td className={styles.calTd}>27</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
