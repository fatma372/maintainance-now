import React from 'react'
import { useSelector } from 'react-redux';
export default function HowToDemand() {
    let {lang,dir,translations} = useSelector((state) => state.language);
    let t=translations[lang].demandWay;
  return (
    <div className='bg-[var(--my-gray)] py-7 px-11' dir={dir}>
        <h2 className='text-xl text-center font-bold text-[var(--my-orange)] mb-7'>
            {t.title}
        </h2>

        <div className="steps grid md:grid-cols-3 sm:grid-cols-2 gap-2 items-center py-3 mt-3">
            <div className='flex flex-col justify-center items-center'>
                <figure>
                    <img src="demand-service.png" className='w-50'  alt="" />
                </figure>
                <h3 className='font-bold text-xl mt-2 mb-4'>{t.steps[0].title}</h3>
                <p className='text-[var(--dark-gray)]'>
                    {t.steps[0].description}
                </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <figure>
                    <img src="choose-time.png" className='w-50' alt="" />
                </figure>
                <h3 className='font-bold text-xl mt-2 mb-4'>{t.steps[1].title}</h3>
                <p className='text-[var(--dark-gray)]'>
                    {t.steps[1].description}
                </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <figure>
                    <img src="pay.png" className='w-50' alt="" />
                </figure>
                <h3 className='font-bold text-xl mt-2 mb-4'>{t.steps[2].title}</h3>
                <p className='text-[var(--dark-gray)]'>
                    {t.steps[2].description}
                </p>
            </div>
        </div>
        
    </div>
  )
}
