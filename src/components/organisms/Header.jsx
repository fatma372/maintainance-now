import React, { useState } from 'react'
import styles from "./Header.module.css"
import { useSelector } from 'react-redux';
import UpperHeader from './UpperHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Header() {
    const {lang,dir,translations} = useSelector((state) => state.language);
    const t=translations[lang].header;
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

  return (
    <>
        <UpperHeader/>
        <header dir={dir} className='flex md:flex-row flex-col justify-between items-center px-4 md:px-13 py-2 bg-[var(--my-gray)] relative'>
            {/* Logo and menu button container */}
            <div className="flex justify-between items-center w-full md:w-auto">
                <div className="logo">
                    <img src="logo.png" className='w-16 h-18' alt="logo" />
                </div>

                {/* Mobile menu button - only visible on small screens */}
                <button 
                    className="md:hidden text-2xl ml-4"
                    onClick={toggleNav}
                    aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
                >
                    <FontAwesomeIcon 
                        icon={isNavOpen ? faTimes : faBars} 
                        className="text-[var(--my-green)] hover:text-[var(--dark-green)] transition-colors"
                    />
                </button>
            </div>

            {/* Navigation */}
            <nav className={`${isNavOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-5 justify-between items-center w-full md:w-[80%] bg-[var(--my-gray)] md:bg-transparent mt-4 md:mt-0`}>
                <ul className="gap-4 flex px-5 flex-wrap justify-center">
                    <li><a href="#home" className='text-[var(--my-green)]'>{t.home}</a></li>
                    <li><a className={styles.navLink} href="#features">{t.features}</a></li>
                    <li><a className={styles.navLink} href="#services">{t.services}</a></li>
                    <li><a className={styles.navLink} href="#offers">{t.offers}</a></li>
                    <li><a className={styles.navLink} href="#contact">{t.contact}</a></li>
                    <li><a className={styles.navLink} href="#join">{t.join}</a></li>
                </ul>
                <div className="buttons flex gap-2 mb-4 md:mb-0">
                    <Link to="/signup" className="signup-btn rounded-lg transition-bg duration-300 bg-[var(--my-green)] text-white px-4 py-2 hover:bg-[var(--dark-green)]">
                        {t.signup}
                    </Link>
                    <Link to="/login" className="login-btn border-3 border-[var(--my-green)] text-[var(--my-green)] px-4 py-2 hover:bg-[var(--light-orange)] hover:text-white rounded-lg transition-all duration-300">
                        {t.login}
                    </Link>
                </div>
            </nav>
        </header>
    </>
  )
}

