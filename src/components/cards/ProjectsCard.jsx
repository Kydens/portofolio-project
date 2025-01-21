'use client'
import React, { useState } from "react";
import Image from "next/image";
import { ComponentAlert, ComponentModal } from "..";

const ProjectsCard = (props) => {

    const [showAlert, setShowAlert] = useState(false);

    const handleClick = (href) => {
        if (href === '') {
            setShowAlert(true);

            
        } else {
            window.open(href, '_blank');
        }
    }

    return (
        <>
            {/* {showAlert && <ComponentAlert />} */}
            {showAlert && <ComponentModal />}
            <div onClick={() => handleClick(props.href)} className="card h-full w-full px-4 py-4 rounded-md shadow-md border-gray-50 border-2 shadow-[#9E77BF]/20 bg-white border-[#4E3A69]/30 hover:bg-[#F7E6F0] transition-all duration-200 cursor-pointer">
                <div className="card-body">
                    <div className="card-image mb-2" style={{ position: 'relative', width: '100%', maxWidth: '1200px'}}>
                        <Image src={`/images/projects/${props.image}.png`} width={0} height={0} sizes="100vw" className="rounded-md border-[#4E3A69]" style={{ width: '100%', height: 'auto', objectFit: 'cover'}}/>
                    </div>
                    <div className="p-2 rounded-lg">
                        <div className="card-title mb-1">
                            <h2 className="text-lg font-bold">{props.title}</h2>
                        </div>
                        <div className="card-text">
                            <p className="line-clamp-3">{props.desc}</p>
                        </div>
                    </div>
                </div>

                {props.tags.length > 0 && (    
                    <div className="card-span flex flex-wrap px-2 gap-y-2 gap-x-1">
                        {props.tags.map((items, i) => {
                            return (
                                <span className="rounded-full mr-2 bg-[#4E3A69] px-3">
                                    <small key={i} className="text-white">{items}</small>
                                </span>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

export default ProjectsCard;