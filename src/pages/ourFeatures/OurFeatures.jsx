import React from 'react'
import { useSelector } from 'react-redux';
import HowToDemand from '../../components/organisms/HowToDemand';
export default function OurFeatures() {

   const {lang,dir,translations} = useSelector((state) => state.language);
   const t=translations[lang].ourFeatures;
    

    return (
        <>
        <div id='features' className="text-center py-8 pb-0 px-4 md:px-8 max-w-6xl mx-auto" dir={dir}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--my-orange)] mb-2">{t.title}</h2>
            <p className="text-lg md:text-xl text-[var(--dark-orange)] mb-8">{t.subTitle}</p>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-8 pb-0 items-end h-full">
                {/* First Column */}
                <div className="first-col flex md:flex-col gap-4">
                    {/* Feature 1 */}
                    <div className="p-3 hover:shadow-lg flex flex-col justify-center items-center transition-shadow duration-300 hover:-translate-y-1">
                        <img src="save-time.png" alt="save time" />
                        <h3 className="text-xl line-clamp-2 font-semibold text-gray-800 mb-3">{t.features[0].title}</h3>
                        <p className="text-gray-600 line-clamp-3 leading-relaxed">{t.features[0].description}.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-3 hover:shadow-lg flex flex-col justify-center items-center transition-shadow duration-300 hover:-translate-y-1">
                        <img src="save-money.png" alt="save money" />
                        <h3 className="text-xl line-clamp-2 font-semibold text-gray-800 mb-3">{t.features[1].title}</h3>
                        <p className="text-gray-600 line-clamp-3 leading-relaxed">{t.features[1].description}.</p>
                    </div>
                </div>
                

                {/* image  */}
                <div className="second-col flex md:items-end items-center justify-center">
                    <figure>
                        <img src="ourFeaturs-phone.png" className='w-full p-2 md:h-[100%] sm:h-[70svh] h-[60svh]' alt="" />
                    </figure>
                </div>

                {/* third column */}
                <div className="third-col  flex md:flex-col gap-4">
                    {/* Feature 3 */}
                    <div className="p-3 hover:shadow-lg flex flex-col justify-center items-center transition-shadow duration-300 hover:-translate-y-1">
                        <img src="easy-contact.png" alt="easy contact" />
                        <h3 className="text-xl line-clamp-2 font-semibold text-gray-800 mb-3">{t.features[2].title}</h3>
                        <p className="text-gray-600 line-clamp-3 leading-relaxed">{t.features[2].description}.</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="p-3 hover:shadow-lg flex flex-col justify-center items-center transition-shadow duration-300 hover:-translate-y-1">
                        <img src="guarantee.png" alt="service guarantee" />
                        <h3 className="text-xl line-clamp-2 font-semibold text-gray-800 mb-3">{t.features[3].title}</h3>
                        <p className="text-gray-600 line-clamp-3 leading-relaxed">{t.features[3].description}.</p>
                    </div>
                </div>
            </div>
        </div>
        <HowToDemand/>
        </>
    );

}
