'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <nav className='shadow-sm bg-[#03001417] backdrop-blur-md shadow-[#2A0E61]/50 z-50 fixed w-[90%] mx-auto top-[10px] rounded-3xl  py-[8px] left-[5%]'>
            <div className='max-w-full px-4 sm:px-6  lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <Link href="/" legacyBehavior>
                                <a className='text-white flex items-center'>
                                    <Image
                                        src="/VeritexLogo.png" // Update the path to your logo
                                        alt="Logo"
                                        width={80}
                                        height={80}
                                    />
                                    <span className='ml-2 text-xl font-bold'>Veritex Innovation</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <Link href="/" legacyBehavior>
                                <a className={`${styles.navLink} text-white rounded-lg px-3 py-2`}>Home</a>
                            </Link>
                            <Link href="/about" legacyBehavior>
                                <a className={`${styles.navLink} text-white rounded-lg px-3 py-2`}>About</a>
                            </Link>
                            <Link href="/services" legacyBehavior>
                                <a className={`${styles.navLink} text-white rounded-lg px-3 py-2`}>Services</a>
                            </Link>
                            <Link href="/contact" legacyBehavior>
                                <a className={`${styles.navLink} text-white rounded-lg px-3 py-2`}>Contact</a>
                            </Link>
                        </div>
                    </div>
                    <div className='md:hidden flex items-center'>
                        <button
                            className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                            onClick={toggleNavbar}
                        >
                            {isClick ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/" legacyBehavior>
                            <a className={`${styles.navLink} block text-white rounded-lg px-3 py-2`}>Home</a>
                        </Link>
                        <Link href="/about" legacyBehavior>
                            <a className={`${styles.navLink} block text-white rounded-lg px-3 py-2`}>About</a>
                        </Link>
                        <Link href="/services" legacyBehavior>
                            <a className={`${styles.navLink} block text-white rounded-lg px-3 py-2`}>Services</a>
                        </Link>
                        <Link href="/contact" legacyBehavior>
                            <a className={`${styles.navLink} block text-white rounded-lg px-3 py-2`}>Contact</a>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
