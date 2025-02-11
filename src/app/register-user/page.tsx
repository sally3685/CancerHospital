import React from 'react';
import styles from '@/app/patients/patients.module.css';
const Page = () => {
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
        <h1 className="text-4xl lg:text-5xl font-bold">Register patient</h1>
        <form className="w-full h-full flex flex-col gap-10 justify-center items-center">
          <div className="flex gap-8 flex-wrap lg:flex-nowrap justify-center items-center">
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="Fname">
                First Name
              </label>
              <input
                type="text"
                className={styles.filter}
                id="Fname"
                placeholder="First name"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="Sname">
                Second Name
              </label>
              <input
                type="text"
                className={styles.filter}
                id="Sname"
                placeholder="Second Name"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="phone">
                phone
              </label>
              <input
                type="text"
                className={styles.filter}
                id="phone"
                placeholder="phone"
              />
            </div>
          </div>

          <div className="flex gap-8 flex-wrap lg:flex-nowrap justify-center items-center">
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="Rel1">
                Relative First Name
              </label>
              <input
                type="text"
                className={styles.filter}
                id="Rel1"
                placeholder="Relative First Name"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="Rel1L">
                Relative Second Name
              </label>
              <input
                type="text"
                className={styles.filter}
                id="Rel1L"
                placeholder="Relative Second Name"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="Relphone">
                phone
              </label>
              <input
                type="text"
                className={styles.filter}
                id="Relphone"
                placeholder="Relative phone"
              />
            </div>
          </div>

          <div className="flex gap-8 flex-wrap lg:flex-nowrap justify-center items-center">
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="Rel2">
                Relative2 First Name
              </label>
              <input
                type="text"
                className={styles.filter}
                id="Rel2"
                placeholder="Relative2 First Name"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="Rel2L">
                Relative2 Second Name
              </label>
              <input
                type="text"
                className={styles.filter}
                id="Rel2L"
                placeholder="Relative2 Second Name"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="Rel2phone">
                phone
              </label>
              <input
                type="text"
                className={styles.filter}
                id="Relphone"
                placeholder="Relative2 phone"
              />
            </div>
          </div>

          <div className="flex gap-8 flex-wrap lg:flex-nowrap justify-center items-center">
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="Email">
                Email
              </label>
              <div className="input-group mb-2">
                <input
                  type="email"
                  className={styles.filter}
                  id="Email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="City">
                City
              </label>
              <input
                type="text"
                className={styles.filter}
                id="city"
                placeholder="City"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-8 justify-center items-center">
                <div className="flex justify-evenly items-center gap-2">
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    className={styles.filterRadio}
                  />
                  <label htmlFor="customRadio1" className=" font-semibold">
                    Male
                  </label>
                </div>
                <div className="flex justify-evenly items-center gap-2">
                  <input
                    type="radio"
                    id="customRadio2"
                    name="customRadio"
                    className={styles.filterRadio}
                  />
                  <label htmlFor="customRadio2" className=" font-semibold">
                    Female
                  </label>
                </div>

                <div className="flex justify-evenly items-center gap-2">
                  <input
                    type="radio"
                    id="custom"
                    name="custom"
                    className={styles.filterRadio}
                  />
                  <label htmlFor="custom" className=" font-semibold">
                    Smoker
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 flex-wrap lg:flex-nowrap justify-center items-center">
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="Blood">
                Blood Type
              </label>
              <select
                id="Blood"
                className={styles.filter}
                defaultValue={'Choose'}
              >
                <option>Choose...</option>
                <option>...</option>
                <option>A</option>
                <option>AB</option>
                <option>B</option>
                <option>O</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="Chrate1">
                First Charity Rate
              </label>
              <select
                id="Chrate1"
                className={styles.filter}
                defaultValue={'Choose'}
              >
                <option>Choose...</option>
                <option>...</option>
                <option>25%</option>
                <option>50%</option>
                <option>75%</option>
                <option>100%</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 ">
              <label className=" font-semibold" htmlFor="Chrate2">
                Second Charity Rate
              </label>
              <select
                id="Chrate2"
                className={styles.filter}
                defaultValue={'Choose'}
              >
                <option>Choose...</option>
                <option>...</option>
                <option>25%</option>
                <option>50%</option>
                <option>75%</option>
                <option>100%</option>
              </select>
            </div>
          </div>

          <button
            className="bg-[#58ac9bd8] rounded-lg p-2 font-semibold"
            style={{
              boxShadow: '3px 3px 5px #bebebe, -3px -3px 5px #ffffff',
            }}
          >
            Submit
          </button>
        </form>
        <section className="flex flex-wrap w-[95%] h-full gap-8 justify-center items-center "></section>
      </main>
      <div className="flex w-full h-[370px] bottom-0 justify-between">
        <div className="w-[70%] lg:w-[40%] h-full left-0 bg-[url(/side1.png)] bg-cover bg-center relative rotate-[180deg]  opacity-[50%]"></div>

        <div className="w-[70%] lg:w-[40%] h-full right-0 bg-[url(/side2.png)] bg-cover bg-center relative opacity-[50%]"></div>
      </div>
    </div>
  );
};

export default Page;
