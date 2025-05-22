import React from 'react'
import { useSelector } from 'react-redux';
export default function OurServices() {
    let { lang, dir, translations } = useSelector((state) => state.language);
    let t = translations[lang].ourServices;
    let services = t.services;

    return (
        <>
            <section id='services' dir={dir} className=' py-9 px-11'>
                <h2 className='text-xl text-center font-bold text-[var(--my-orange)] mb-11 mt-3'>
                    {t.title}
                </h2>

                <div className='services grid lg:grid-cols-3 sm:grid-cols-2 md:gap-x-30 sm:gap-10 gap-7 md:px-30 sm:px-10 px-5'>
                    {
                        services.map((service, i) =>
                            <div className='card bg-[var(--my-gray)] flex flex-col items-center justify-center gap-4 p-0 pb-3 rounded-3xl transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg' key={i} >
                                <figure>
                                    <img src={`${translations["ar"].ourServices.services[i].title}.png`} className='w-full' alt="" />

                                </figure>
                                <h3 className='text-xl font-bold'>{service.title}</h3>
                                <button key={i} className=' demand-btn transition-bg duration-500 rounded-lg shadow-lg mt-3 w-[80%] mx-auto block'>{t.button}</button>

                            </div>
                        )
                    }


                </div>

            </section>

        </>
    )
}
