'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub } from "react-icons/fa";

const DashboardHome = () => {

    const text = "Website Developer & AI Enthusiast";
    const [displayText, setDisplayText] = useState('');
    const [counter, setCounter] = useState(0);
    const [isTypingComplete, setIsTypyingComplete] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter < text.length) {
                setDisplayText((prev) => prev + text[counter]);
                setCounter((prev) => prev + 1);
            } else {
                setIsTypyingComplete(true);
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [counter, text]);

    return (
        <section className="min-h-screen w-full flex justify-center items-center gap-x-12 relative">
            <div className="home-text max-w-screen-sm flex flex-col justify-center">
                <div>
                    <h1 className="font-bold text-4xl mb-4 heading-home" style={{ color: "#4E3A69" }}>
                        <motion.span>{displayText}</motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: [0,1,0] }} 
                            transition={{ repeat: Infinity, duration: 0.5 , repeatDelay: isTypingComplete ? 1 : 0,}} className="text-center"
                        >|</motion.span>
                    </h1>
                </div>

            <p className="mb-4 text-justify">Hai, saya <strong>Eddy Nathansyah</strong>. Seorang lulusan Teknik Informatika Universitas Tarumanagara dengan pengalaman sebagai Frontend Web Developer dan Pembelajaran Artificial Intelligence (AI). Saya ahli dalam membangun aplikasi berbasis <strong>Laravel</strong>, <strong>Next.js</strong>, dan <strong>Python</strong>, dengan kemampuan dasar dalam design menggunakan <strong>Figma</strong>. Saya selalu tertarik pada hal-hal baru dan teknologi terkini, seperti pengembangan AI.</p>

                <div className="flex gap-2">
                    <button className="flex items-center gap-2 border-2 rounded-full px-6 py-2 bg-[#4E3A69] text-white font-bold hover:bg-[#9E77BF]/90 transition-all duration-300">
                        <FaGithub />
                        <a href="https://github.com/Kydens" target="_blank">Github</a>
                    </button>
                    <button className="flex items-center gap-2 border-2 rounded-full px-6 py-2 bg-[#4E3A69] text-white font-bold hover:bg-[#9E77BF]/90 transition-all duration-300">
                        <FaInstagram />
                        <a href="https://instagram.com/ednath.s" target="_blank">Instagram</a>
                    </button>
                </div>
            </div>
            <div className="home-image w-fit flex justify-center absolute right-0 top-28 -z-10 lg:block lg:relative lg:top-auto lg:right-auto lg:z-0">
                <Image src='/images/imageHome1.jpg' className="rounded-xl shadow-xl lg:block hidden" width={300} height={300} style={{ maxWidth: '300px', maxHeight: '300px', objectFit: 'cover', objectPosition: '50% 75%' }}/>
            </div>
        </section>
    );
};

export default DashboardHome;