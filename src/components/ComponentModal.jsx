'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { ComponentAlert } from ".";
import { motion, AnimatePresence } from "framer-motion";

const ComponentModal = (props) => {

    const [isAlert, setIsAlert] = useState(false);

    const handleClick = (href) => {
        if (!href) {
            setIsAlert(true);

            const timeout = setTimeout(() => {
                setIsAlert(false);
            }, 3000);

            return () => clearTimeout(timeout);
        } else {
            window.open(href, '_blank');
            props.onClose();
        }
            
    };

    return (
        <>
            <AnimatePresence>
                {isAlert && <ComponentAlert />}
            </AnimatePresence>
            <AnimatePresence>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}}
                        exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                        className="container-modal w-full h-full bg-black/40 fixed top-0 left-0 z-40 flex justify-center items-center" onClick={props.onClose}>
                    <div className="modal relative w-full mx-4 md:w-1/2 lg:w-1/3 xl:w-1/4 min-h-1/2 bg-[#F7E6F0] rounded-xl p-4 flex flex-col justify-between" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content flex flex-col gap-2 w-full mb-4">
                            <Image src={`/images/projects/${props.image}.png`} width={0} height={0} sizes="100vw" className="rounded-md border-[#4E3A69]" style={{ width: '100%', height: 'auto', objectFit: 'cover'}}/>
                        </div>
                        <div className="modal-desc bg-white p-3 rounded-xl">
                            <div className="modal-desc flex flex-col mb-2">
                                <h2 className="font-bold text-2xl">{props.title}</h2>
                                <p>{props.desc}</p>
                            </div>  
                            <div className="modal-button flex gap-2">
                                {props.href?.map((items, i) => (
                                    <button key={i} onClick={() => handleClick(items.url)} className={`rounded-md ${items.url ? 'bg-[#4E3A69]' : 'bg-[#9E77BF]/90'} px-3 py-2 text-white`}>{items.label}</button>
                                ))}
                            </div>
                            <button className="absolute top-0 right-0 m-2 bg-white rounded-full" onClick={props.onClose}>
                                <IoCloseCircle size={32} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default ComponentModal;