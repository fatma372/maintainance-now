import React from 'react'
import SocialMediaIcons from '../molecules/SocialMediaIcons'

import { useSelector, useDispatch } from 'react-redux';
import {setLang} from '../../services/store/languageSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

export default function UpperHeader() {

    const {lang} = useSelector((state) => state.language);
    const languageName=lang==="ar"?"English":"العربية";
   const languagebuttonDir= lang==="ar"?"ltr":"rtl";
    const dispatch = useDispatch();

    const handleLang = () => {
        dispatch(setLang(lang === "ar" ? "en" : "ar"));

        document.dir = lang === "ar" ? "ltr" : "rtl";
    }
  return (
    <div className='flex justify-start items-center px-9 bg-[var(--light-green)]'dir="ltr">
        <div className="py-1 pr-1">
            <SocialMediaIcons/>
        </div>

        <button
        dir={languagebuttonDir}
        className="border-l-3 border-[var(--my-green)] px-2 my-1 pb-1" 
        onClick={() => handleLang()}>
           <span>
             {languageName}
           </span>
               <FontAwesomeIcon icon={faEarthAmericas} size="md" className="mx-1"/> {/* Adjust size as needed */}

        </button>

    </div>
  )
}
