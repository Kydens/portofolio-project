"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdFileCopy,
} from "react-icons/md";
import { EduCard, SkillsCard } from "@/components";

const DashboardAboutMe = () => {
  const expWork = [
    'Design dan Development Website <a href="https://lmsi.co/" target="_blank" rel="noopener noreferrer">LMSI</a>',
    "Design aplikasi Nyaman Mobile",
    "Design aplikasi Absensi Sangati Mobile",
    "Development Dashboard Internal IT Sangati",
  ];

  const highlightLMSI = (text) => {
    if (text.includes("LMSI")) {
      return text.replace("LMSI", "<span style='color: blue;'>LMSI</span>");
    }

    return text;
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/cv_eddy.pdf";
    link.target = "_blank";
    // link.download = 'cv_eddy.pdf';
    link.click();
  };

  const [clickedData, setIsClickedData] = useState(null);

  const isClick = (props) => {
    setIsClickedData(clickedData === props ? null : props);
  };

  return (
    <section className="min-h-screen w-full flex flex-col gap-y-12 mb-24">
      <h1 className="font-bold text-4xl text-center text-[#4E3A69]">
        About Me
      </h1>

      <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
        {/* Image Profile */}
        <div className="home-image w-fit flex justify-center max-w-[300px] max-h-[300px]">
          <Image
            src="/images/profile.jpg"
            width={300}
            height={300}
            alt="profile-image"
            className="rounded-xl"
            style={{ objectFit: "cover", objectPosition: "60% 10%" }}
          />
        </div>

        {/* Description Profile */}
        <div className="flex flex-col gap-8">
          <div className="about-me-text max-w-screen-sm flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-3">Eddy Nathansyah</h1>
            <p className="text-justify">
              aplikasi web menggunakan Laravel, Next.js, Node.js, dan Flask.
              Memiliki pemahaman tentangstruktur data, OOP, RESTful API, dan
              basis data relasional seperti MySQL dan PostgreSQL.
              Mudahberadaptasi dan cepat memahami tugas dengan pengalaman
              bekerja dalam tim. Bersemangatuntuk berkontribusi sebagai
              pengembang yang bertanggung jawab dan pemberi solusi.
            </p>
          </div>
          <div>
            <button
              onClick={() => handleDownload()}
              className="flex items-center gap-2 border-2 rounded-md px-8 py-3 bg-[#9E77BF] text-white font-bold hover:bg-[#9E77BF]/90 transition-all duration-200"
            >
              <MdFileCopy />
              <span>Lihat Detail CV</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Keahlian Utama */}
        <SkillsCard />

        {/* Pendidikan */}
        <EduCard />

        {/* Pengalaman Kerja */}
        <div className="max-w-1/3 work-card bg-[#F7E6F0] px-4 py-4 rounded-md shadow-md shadow-[#9E77BF]/20">
          <h2 className="font-semibold text-xl text-center mb-2">
            Pengalaman Kerja
          </h2>
          <div className="bg-white/50 p-2 rounded-lg">
            <ul className="grid grid-flow-row gap-4">
              <li
                className="hover:bg-white/80 p-4 rounded-lg flex justify-between w-full cursor-pointer"
                onClick={() => isClick("expWork")}
              >
                <div className="flex flex-col w-full" id="work-list">
                  <div className="flex justify-between w-full mb-2">
                    <div className="flex flex-col w-fit">
                      <strong className="text-md md:text-lg">
                        PT. Sangati Soerya Sejahtera
                      </strong>
                      <span className="text-sm text-gray-500">
                        Web Developer & UI/UX Designer (Internship)
                      </span>
                    </div>
                    <div className="w-fit flex flex-col gap-2 py-1">
                      <span className="w-full text-right text-sm text-gray-500">
                        Jan - Agu 2024
                      </span>
                      <span className="w-full flex justify-end">
                        {clickedData === "expWork" ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </span>
                    </div>
                  </div>

                  {clickedData === "expWork" && (
                    <div className="ml-4">
                      <ul className="list-disc list-outside">
                        {expWork.map((data, index) => (
                          <li key={index}>
                            <small
                              dangerouslySetInnerHTML={{
                                __html: highlightLMSI(data),
                              }}
                            />
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
      </div>
    </section>
  );
};

export default DashboardAboutMe;
