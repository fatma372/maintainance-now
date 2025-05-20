import React from 'react'
import { useSelector } from 'react-redux'   

export default function Home() {
    let {lang,dir,translations} = useSelector((state) => state.language);
    let t=translations[lang].home;
  return (
    <>
    <main id='home'>
        <div dir={dir} className='flex md:flex-row flex-col justify-center items-center md:px-20 p-7 gap-3'>
            <div className="text flex flex-col gap-7">
                <h5 className="text-xl text-[var(--light-green)]">
                    {t.welcome}..
                </h5>
                <h2 className='text-5xl font-bold text-[var(--my-green)] slogan w-[95%]'>
                    {t.slogan}!
                </h2>
                <p className="text-lg md:text-xl text-[var(--dark-gray)] mb-8 w-[80%]">
                    {t.about}.
                </p>

                <button className='w-fit demand-btn transition-bg duration-500 rounded-lg shadow-lg'>
                    {t.askVisit}
                </button>
            </div>
            <figure >
                <img src="worker.png" alt="worker" className='h-[70svh] w-[800px] px-7 md:px-1' />
            </figure>
        </div>
    </main>
    </>
  )
}
