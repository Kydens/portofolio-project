'use client'
import React, { useState } from "react";
import { ComponentSkill } from "@/components";

const SkillsCard = () => {

    const [startIndex, setStartIndex] = useState(0);
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
    }

    const displayItems = skills.items.slice(startIndex * itemsPerIteration, (startIndex + 1) * itemsPerIteration)
    const buttonDisplayItems = Math.ceil(skills.items.length/itemsPerIteration)

    return (
        <div className="max-w-1/3 h-full skill-card bg-[#F7E6F0] py-4 rounded-md shadow-md shadow-[#9E77BF]/20">
            <h2 className="font-semibold text-xl text-center mb-2">Keahlian Utama</h2>
            
            <div className="flex flex-col justify-between gap-4">
                {/* Skill */}
                <div className="bg-white/50 p-4 rounded-lg">
                    <ul className="grid grid-rows-4 gap-5">
                        {displayItems.map((items, i) => {
                            return (
                                <li className="flex w-full" key={i}>
                                    <ComponentSkill skill={items.name} level={items.level} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                
                {/* Button Skill */}
                <div className="w-full flex justify-center gap-2">
                    {Array.from({ length: buttonDisplayItems }).map((items, i) => {
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