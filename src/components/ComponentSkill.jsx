import Image from "next/image";
import React from "react";

const ComponentSkill = (props) => {
    const level = props.level || "0%";
    const barColor =
        parseInt(level) >= 80
        ? "#4CAF50"
        : parseInt(level) >= 50
        ? "#FFC107"
        : "#F44336";

    return (
        <div className="flex justify-around items-center w-full">
            <div className={`Image-${props.skill}`}>
                <Image src={`/images/${props.skill}.svg`} width={80} height={80} />
            </div>
            <div className="flex flex-col w-full ml-4">
                <h2 className="font-semibold text-md text-[#4E3A69]">{props.skill}</h2>
                <div className={`BarSkill-${props.skill} flex-grow relative`}>
                    <div className="w-full h-4 bg-white rounded border-2"></div>
                    <div className={`absolute top-0 h-4 rounded border-2`} style={{ width: `${level}`, backgroundColor: `${barColor}` }}></div>
                </div>
            </div>
        </div>
    );
}

export default ComponentSkill    