import React from 'react'
import styles from "./Header.module.css"
import { useSelector } from 'react-redux';
import UpperHeader from './UpperHeader';

export default function Header() {
    const {lang,dir,translations} = useSelector((state) => state.language);
    const t=translations[lang].header;
  return (
    <>
        <UpperHeader/>
        <header dir={dir} className='flex md:flex-row flex-col gap-5 justify-between items-center px-4 py-2 bg-[var(--my-gray)]'>
            <div className="logo">
                <img src="logo.png" className='w-17 h-20' alt="logo" />
            </div>

            <nav>
                <ul className="gap-4 flex px-5 flex-wrap justify-center">
                    <li><a  href="#home" className='text-[var(--my-green)]'>{t.home}</a></li>
                    <li><a className={styles.navLink} href="#features">{t.features}</a></li>
                    <li><a className={styles.navLink} href="#services">{t.services}</a></li>
                    <li><a className={styles.navLink} href="#offers">{t.offers}</a></li>
                    <li><a className={styles.navLink} href="#contact">{t.contact}</a></li>
                    <li><a className={styles.navLink} href="#join">{t.join}</a></li>
                    
                </ul>
            </nav>

            <div className="buttons flex gap-2">
                <button className="signup-btn rounded-lg transition-bg duration-300">{t.signup}</button>
                <button className="login-btn border-3 border-[var(--my-orange)] bg-[var(--my-orange)] hover:bg-[var(--light-orange)] text-white rounded-lg transition-bg duration-300">{t.login}</button>
            </div>

        </header>
    </>

  )
}
