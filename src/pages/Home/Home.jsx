import React from 'react'
import { useSelector } from 'react-redux'   

export default function Home() {
    let {lang,dir,translations} = useSelector((state) => state.language);
    let t=translations[lang].home;
  return (
    <>
    <main id='home min-h-fit'>
        <div dir={dir} className='flex md:flex-row flex-col justify-center items-center md:px-30 p-7 gap-3'>
            <div className="md:text-start text-center text flex flex-col gap-7 md:justify-start justify-center md:items-start items-center">
                <h5 className=" text-xl text-[var(--light-green)]">
                    {t.welcome}..
                </h5>
                <h2 className='md:text-5xl text-4xl font-bold text-[var(--my-green)] slogan md:w-[95%]'>
                    {t.slogan}!
                </h2>
                <p className="text-lg md:text-xl text-[var(--dark-gray)] mb-5 md:w-[80%]">
                    {t.about}.
                </p>

                <button className='w-fit demand-btn transition-bg duration-500 rounded-lg shadow-lg'>
                    {t.askVisit}
                </button>
            </div>
            <figure className='' >
                <img src="worker.png" alt="worker" className='md:h-[70svh] h-[0px] w-[800px] px-7 md:px-1' />
            </figure>
        </div>
    </main>
    </>
  )
}
