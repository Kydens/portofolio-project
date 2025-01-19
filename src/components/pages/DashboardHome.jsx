import React from "react";
import Image from "next/image";
import { FaInstagram, FaGithub } from "react-icons/fa";

const DashboardHome = () => {
    return (
        <section className="min-h-screen w-full flex justify-center items-center gap-x-12 relative">
            <div className="home-text max-w-screen-sm flex flex-col justify-center">
                <h1 className="font-bold text-4xl mb-4" style={{ color: "#4E3A69" }}>Website Developer & AI Enthusiast</h1>

                <p className="mb-4">Hai, saya <strong className="text-[#9E77BF]">Eddy Nathansyah</strong>. Seorang lulusan Teknik Informatika Universitas Tarumanagara dengan pengalaman sebagai Frontend Web Developer dan Pembelajaran AI. Saya ahli dalam membangun aplikasi berbasis <strong className="text-[#FF2D20]">Laravel</strong>, <strong className="text-[#000000]">Next.js</strong>, dan <strong className="text-[#306998]">Python</strong>, dengan kemampuan dasar dalam design menggunakan <strong className="text-[#0ACF83]">Figma</strong>. Saya selalu tertarik pada hal-hal baru dan teknologi terkini, seperti pengembangan Artificial Intelligence.</p>

                <div className="flex gap-2">
                    <button className="flex items-center gap-2 border-2 rounded-full px-6 py-2 bg-[#9E77BF] text-white font-bold hover:bg-[#9E77BF]/90 transition-all duration-200">
                        <FaGithub />
                        <a href="https://github.com/Kydens" target="_blank">Github</a>
                    </button>
                    <button className="flex items-center gap-2 border-2 rounded-full px-6 py-2 bg-[#9E77BF] text-white font-bold hover:bg-[#9E77BF]/90 transition-all duration-200">
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