import styles from '@/app/assets/sign.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="w-full h-[100vh] relative font-[family-name:var(--font-geist-sans)] z-[1] bg-[#597b86] before:absolute before:content-[''] before:w-full before:h-full before:bg-[url(/pattern.png)] before:opacity-[10%] before:bg-cover before:bg-center">
      <main className="flex w-full h-full gap-8 row-start-2 items-center sm:items-start">
        <div className='lg:block z-[1] hidden left-0 lg:w-[550px] xl:w-[40%] h-full rounded-tr-[30%] bg-[url(/doctors.jpeg)] bg-cover bg-center before:absolute before:content-[""] before:w-full before:h-full before:bg-gradient-to-b before:from-[#43968475] before:to-[#00000000]'>
          <div className="top-[20px] left-[20px] w-[350px] scale-[0.8] bg-[url(/logo.svg)] bg-cover bg-center h-[150px] z-10 absolute"></div>
        </div>
        <div className="w-full h-full flex justify-center items-end absolute">
          <section
            className={`w-full h-[75%] bottom-0 mx-auto rounded-[16px] lg:rounded-tr-[30%] relative bg-[#ffffff52] text-[#1b4b47] flex justify-end space-y-8 items-center flex-col z-[1] ${styles.signin}`}
          >
            <h1 className="text-3xl lg:text-4xl font-bold 3xl:text-5xl">
              Sign In
            </h1>
            <h3 className="text-sm">Just press submit it is just a frontend</h3>
            <div className="relative flex flex-col w-full h-[70%] justify-evenly items-center gap-4 m-0">
              <div className="w-full flex flex-col justify-center items-center gap-2">
                <label htmlFor="email" className="w-[75%] font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Name"
                  className={`relative  p-[14px_22px_10px_26px] bg-[#edf1f146] rounded-[6px] w-[80%] h-[45px] outline-none ${styles.input}`}
                  style={{
                    boxShadow: '3px 3px 5px #bebebe, -3px -3px 5px #ffffffbe',
                    border: 'unset',
                  }}
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center gap-2">
                <label htmlFor="password" className="w-[75%] font-bold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  className={`relative  p-[14px_22px_10px_26px] bg-[#edf1f146] rounded-[6px] w-[80%] h-[45px] outline-none ${styles.input}`}
                  style={{
                    boxShadow: '3px 3px 5px #bebebe, -3px -3px 5px #ffffffbe',
                    border: 'unset',
                  }}
                />
              </div>
              <Link
                href="/patients"
                className={`relative font-bold text-2xl" flex justify-center items-center bg-[#edf1f146] rounded-[6px] w-[200px] h-[40px] outline-none cursor-pointer`}
                style={{
                  boxShadow: '3px 3px 5px #bebebe, -3px -3px 5px #ffffffbe',
                  border: 'unset',
                }}
              >
                Submit
              </Link>
            </div>
          </section>
        </div>

        <div className={`${styles.dna}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    </div>
  );
}
