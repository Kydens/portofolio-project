'use client'
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdFileCopy } from "react-icons/md"

const EduCard = () => {

    const tekinf = [
        'Aktif mengikut UKM Mapala Universitas Tarumanagara',
        'Ketua Divisi Acara Dies Natalis UKM Mapala Universitas Tarumanagara (Jul 2023)',
        'Anggota Panitia Rapat Rimba UKM Mapala Universitas Tarumanagara (Mei 2023)'
    ];

    const sma = [
        'Juara 1 lomba Musikalisasi Puisi Tingkat Kota Madya Jakarta',
        'Peserta lomba Musikalisasi Puisi Tingkat Provinsi Jakarta',
    ];

    const [clickedData, setIsClickedData] = useState(null)

    const isClick = (skill) => {
        setIsClickedData(clickedData === skill ? null : skill);
    }

    return (
        <div className="max-w-1/3 study-card bg-[#F7E6F0] px-4 py-4 rounded-md shadow-md shadow-[#9E77BF]/20">
            <h2 className="font-semibold text-xl text-center mb-2">Pendidikan</h2>
            <div className="bg-white/50 p-2 rounded-lg">
                <ul className="grid grid-flow-row gap-4">
                    <li className="hover:bg-white/80 p-4 rounded-lg flex justify-between w-full cursor-pointer" onClick={() => isClick('tekinf')}>
                        <div className="flex flex-col w-full" id="study-list">
                            <div className="flex justify-between w-full mb-2">
                                <div className="flex flex-col w-fit md:w-full">
                                    <strong className="text-md md:text-lg">Universitas Tarumanagara</strong>
                                    <span className="text-sm text-gray-500">Teknik Informatika</span>
                                </div>
                                <div className="flex flex-col gap-2 py-1 w-full">
                                    <span className="text-sm text-gray-500 text-end">2021 - 2025</span>
                                    <span className="w-full flex justify-end">
                                        {clickedData === "tekinf" ? 
                                        (<MdKeyboardArrowUp />) : (<MdKeyboardArrowDown />)}
                                    </span>
                                </div>
                            </div>

                            {clickedData === "tekinf" && (
                                <div className="ml-4">
                                    <ul className="list-disc list-outside">
                                        {tekinf.map((data, index) => (
                                            <li key={index}>
                                                <small>{data}</small>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                    <hr />
                    <li className="hover:bg-white/80 p-4 rounded-lg flex justify-between w-full cursor-pointer" onClick={() => isClick('sma')}>
                        <div className="flex flex-col w-full" id="study-list">
                            <div className="flex justify-between w-full mb-2">
                                <div className="flex flex-col w-full">
                                    <strong className="text-md md:text-lg">SMAN 84 Jakarta</strong>
                                    <span className="text-sm text-gray-500">Ilmu Pengetahuan Alam</span>
                                </div>
                                <div className="flex flex-col gap-2 py-1 w-full">
                                    <span className="text-sm text-gray-500 text-end">2018 - 2021</span>
                                    <span className="w-full flex justify-end">
                                        {clickedData === "sma" ? 
                                        (<MdKeyboardArrowUp />) : (<MdKeyboardArrowDown />)}
                                    </span>
                                </div>
                            </div>

                            {clickedData === "sma" && (
                                <div className="ml-4">
                                    <ul className="list-disc list-outside">
                                        {sma.map((data, index) => (
                                            <li key={index}>
                                                <small>{data}</small>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EduCard;