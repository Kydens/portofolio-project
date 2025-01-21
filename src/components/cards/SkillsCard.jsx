'use client'
import React, { useState } from "react";
import { motion } from "framer-motion"
import { ComponentSkill } from "@/components";

const SkillsCard = () => {

    const [startIndex, setStartIndex] = useState(0);
    const [onTouchStart, setOnTouchStart] = useState(null);
    const [onTouchEnd, setOnTouchEnd] = useState(null);
    const [direction, setDirection] = useState(null);
    const itemsPerIteration = 4;

    const skills = {
        items: [
            { name: 'HTML', level: '100%' },
            { name: 'CSS', level: '85%' },
            { name: 'TailwindCSS', level: '85%' },
            { name: 'BootstrapCSS', level: '80%' },
            { name: 'Laravel', level: '80%' },
            { name: 'Javascript', level: '70%' },
            { name: 'Next.js', level: '70%' },
            { name: 'Nuxt.js', level: '60%' },
            { name: 'Python', level: '60%' },
            { name: 'MySQL', level: '60%' },
        ],
    };

    const displayItems = skills.items.slice(startIndex * itemsPerIteration, (startIndex + 1) * itemsPerIteration);
    const totalDisplayItems = Math.ceil(skills.items.length/itemsPerIteration);

    const handleSlideStart = (e) => {
        setOnTouchStart(e.targetTouches[0].clientX);
    };

    const handleSlideMove = (e) => {
        setOnTouchEnd(e.targetTouches[0].clientX)
    };

    const handleSlideEnd = (e) => {
        if (onTouchStart && onTouchEnd) {
            const diff = onTouchEnd - onTouchStart;
            if (diff > 50 && startIndex > 0) {
                setDirection('right');
                setStartIndex((prev) => prev - 1);
            }

            if (diff < -50 && startIndex < totalDisplayItems - 1) {
                setDirection('left');
                setStartIndex((prev) => prev + 1);
            }
        }

        setOnTouchStart(null);
        setOnTouchEnd(null);
    };

    return (
        <div className="max-w-1/3 h-full skill-card bg-[#F7E6F0] py-4 px-4 rounded-md shadow-md shadow-[#9E77BF]/20">
            <h2 className="font-semibold text-xl text-center mb-2">Keahlian Utama</h2>
            
            <div className="flex flex-col justify-between gap-4">
                {/* Skill */}
                <div className="bg-white/50 p-4 rounded-lg" onTouchStart={handleSlideStart} onTouchMove={handleSlideMove} onTouchEnd={handleSlideEnd}>
                    <motion.ul className="grid grid-rows-4 gap-5" 
                        key={startIndex} 
                        initial={{ x: direction === 'right' ? '-20%' : direction === 'left' ? '20%' : 0, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        exit={{ x: direction === 'right' ? '20%' : direction === 'left' ? '-20%' : 0, opacity: 0 }} 
                        transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}>
                        {displayItems.map((items, i) => {
                            return (
                                <motion.li className="flex w-full" 
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: i * 0.05 }}>
                                    <ComponentSkill skill={items.name} level={items.level} />
                                </motion.li>
                            );
                        })}
                    </motion.ul>
                </div>
                
                {/* Button Skill */}
                <div className="w-full flex justify-center gap-2">
                    {Array.from({ length: totalDisplayItems }).map((items, i) => {
                        return (
                            <button className={`rounded-full w-4 h-4 ${startIndex == i ? 'bg-[#4E3A69]/80' : 'bg-white/80 cursor-pointer'}`} onClick={() => setStartIndex(i)} key={i}></button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SkillsCard;