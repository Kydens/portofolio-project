'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ComponentNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeHash, setActiveHash] = useState('');
    const pathname = usePathname();
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleHash = (hash) => {
        setActiveHash(hash);
        console.log(hash)
    }

    useEffect(() => {
        const hashLink = window.location.hash;
        setActiveHash(hashLink);
    }, [pathname]);

    return (
        <nav className="sticky top-0 w-full h-fit border-gray-200 z-50" style={{ backgroundColor: '#4E3A69' }}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Portofolio</span>
                </a>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
                    <ul
                        className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
                        style={{ backgroundColor: '#4E3A69' }}
                    >
                        <li>
                            <Link href="#home" onClick={() => handleHash('#home')} className={`block py-2 px-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FDFDB4] md:px-2 md:py-1 ${activeHash === "" || activeHash == '#home' ? 'text-[#FDFDB4]' : 'text-white'} hover:bg-white/20 hover:text-white`}>Home</Link>
                        </li>
                        <li>
                            <Link href="#about" onClick={() => handleHash('#about')} className={`block py-2 px-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FDFDB4] md:px-2 md:py-1 ${activeHash == '#about' ? 'text-[#FDFDB4]' : 'text-white'} hover:bg-white/20 hover:text-white`}>About</Link>
                        </li>
                        <li>
                            <Link href="#projects" onClick={() => handleHash('#projects')} className={`block py-2 px-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FDFDB4] md:px-2 md:py-1 ${activeHash == '#projects' ? 'text-[#FDFDB4]' : 'text-white'} hover:bg-white/20 hover:text-white`}>Project</Link>
                        </li>
                        <li>
                            <Link href="#contact" onClick={() => handleHash('#contact')} className={`block py-2 px-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FDFDB4] md:px-2 md:py-1 ${activeHash == '#contact' ? 'text-[#FDFDB4]' : 'text-white'} hover:bg-white/20 hover:text-white`}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default ComponentNavbar;
