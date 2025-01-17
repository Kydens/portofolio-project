import React from "react";
import { MdEmail } from "react-icons/md";

const DashboardFooter = () => {
    return (
        <div className="h-full bg-[#F7E6F0]">
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-8 lg:p-12 gap-y-14">
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-bold">Contact</h2>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className="text-sm sm:text-[16px]">Email</td>
                                <td style={{ width: '5%' }}></td>
                                <td className="text-sm sm:text-[16px]">: nathsyahed@gmail.com</td>
                            </tr>
                            <tr>
                                <td className="text-sm sm:text-[16px]" style={{ width: '1%', whiteSpace: 'nowrap' }}>Contact Person</td>
                                <td style={{ width: '5%' }}></td>
                                <td className="text-sm sm:text-[16px]">: 082113177686</td>
                            </tr>
                            <tr>
                                <td className="text-sm sm:text-[16px]">Instagram</td>
                                <td style={{ width: '5%' }}></td>
                                <td className="text-sm sm:text-[16px]">: @ednath.s</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="w-full text-lg font-bold md:text-end">Want to Ask?</h2>
                    <div className="flex flex-col">
                        <p className="text-sm sm:text-[16px] md:text-end">Feel Free to Ask and Contact Me!</p>
                        <p className="text-sm sm:text-[16px] md:text-end mb-3">Contact Me on Email</p>
                        <a href="mailto:nathsyahed@gmail.com" className="md:text-end">
                            <button className="bg-white p-3 rounded-full">
                                <MdEmail size={48} />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <footer className="bg-[#4E3A69] text-white p-4 text-center">
                &copy; 2025 Eddy Nathansyah. All rights reserved.
            </footer>
        </div>
    );
}

export default DashboardFooter;