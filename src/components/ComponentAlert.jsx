import React from "react";
import { IoAlertCircle } from 'react-icons/io5'
import { motion } from "framer-motion";

const ComponentAlert = () => {
    return (
        <motion.div initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 20 }} transition={{ duration: 0.3 }} 
                    className="fixed bottom-0 right-0 m-2 w-fit h-fit z-50">
            <div className="alert w-60 md:w-80 h-fit py-3 px-6 rounded-xl bg-red-500">
                <span className="text-white font-semibold flex gap-4 items-center text-sm">
                    <IoAlertCircle size={48} />
                    Maaf, project tidak dapat ditampilkan karena suatu hal.
                </span>
            </div>
        </motion.div>
    );
}

export default ComponentAlert;