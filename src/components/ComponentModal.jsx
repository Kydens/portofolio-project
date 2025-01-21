'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { ComponentAlert } from ".";

const ComponentModal = (props) => {

    const [isAlert, setAlert] = useState(false);
    const link = [
        'Github',
        // 'Live Website',
    ];

    const handleClick = (href) => {
        if (href == '') {
            setAlert(true);

            setTimeout(() => {
                setAlert(false);
            }, 3000);
        } else {
            window.open(href, '_blank');
            props.onClose();
        }
            
    };

    return (
        <>
            {isAlert && <ComponentAlert />}
            <div className="container-modal w-full h-full bg-black/40 fixed top-0 left-0 z-50 flex justify-center items-center" onClick={props.onClose}>
                <div className="modal relative w-full mx-4 md:w-1/2 lg:w-1/3 xl:w-1/4 min-h-1/2 bg-white rounded-xl p-4 flex flex-col justify-between" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content flex flex-col gap-2 w-full mb-4">
                        <Image src={`/images/projects/${props.image}.png`} width={0} height={0} sizes="100vw" className="rounded-md border-[#4E3A69]" style={{ width: '100%', height: 'auto', objectFit: 'cover'}}/>
                        <div className="modal-desc flex flex-col">
                            <h2 className="font-bold text-2xl">{props.title}</h2>
                            <p>{props.desc}</p>
                        </div>
                    </div>
                    <div className="modal-button flex gap-2">
                        {link.map((items, i) => (
                            <button key={i} onClick={() => handleClick(props.href)} className="rounded-md bg-[#4E3A69] px-3 py-2 text-white">{items}</button>
                        ))}
                    </div>
                    <button className="absolute top-0 right-0 m-2 bg-white rounded-full" onClick={props.onClose}>
                        <IoCloseCircle size={32} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default ComponentModal;