"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const tabs = ["Visi", "Misi", "Keunggulan"];

const content = {
  Visi: [
    "Menjadi perusahaan transportasi bus bertaraf internasional yang mengedepankan kualitas, profesionalitas, dan layanan terbaik.",
  ],
  Misi: [
    "Mengutamakan kenyamanan dan keamanan penumpang.",
    "Memberikan pelayanan terbaik dan profesional.",
    "Menunjang kemajuan pariwisata di Indonesia.",
    "Memasarkan budaya lokal ke pasar domestik dan internasional.",
  ],
  Keunggulan: [
    "🚌 Unit bus bersih, nyaman, dan full fasilitas.",
    "👨‍✈️ Driver berpengalaman dan ramah.",
    "📞 Layanan pelanggan responsif 24 jam.",
    "💰 Harga kompetitif dan bisa disesuaikan kebutuhan.",
  ],
};

const Benefit = () => {
  const [activeTab, setActiveTab] = useState("Visi");

  return (
    <div className="max-w-6xl mx-auto px-4 mt-44 py-10" id="visi-misi">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="group relative min-h-[320px] rounded-[40px] p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between shadow-md transition-all duration-500 cursor-pointer bg-white hover:bg-blue-500 hover:shadow-2xl"
      >
        {/* Gambar Bus */}
        <div className="relative w-full lg:w-1/2 h-[300px] flex justify-center lg:justify-start mb-6 lg:mb-0 order-1 lg:order-none">
          <div className="absolute  top-0 z-10 mt-6 lg:mt-0">
            <Image
              src="/assets/G4.png"
              alt="Bus 32 Seat"
              width={550}
              height={330}
              className="object-contain drop-shadow-2xl group-hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>

        {/* Teks Interaktif */}
        <div className="w-full lg:w-1/2 px-4 z-20">
          {/* Judul */}
<motion.h3
  variants={textVariant}
  className="text-2xl lg:text-3xl font-bold mb-2 text-center text-black group-hover:text-white-500 transition-colors duration-300"
>
  Bagong Biru Pariwisata
</motion.h3>
<div className="w-16 h-1 mx-auto mb-6 bg-blue-500 group-hover:bg-red-500 transition-colors duration-300 rounded-full" />
          <p className="text-sm mb-6 text-black group-hover:text-white-500 transition-colors duration-300">
            Bagong Pariwisata menyediakan transportasi sewa berupa bus pariwisata yaitu Big Bus dan Medium Bus dengan menggunakan body AVANTE H7 Facelift keluaran tahun 2023 dengan menggunakan sasis HINO EURO 4 tahun 2023. Kami melayani untuk overland Jawa – Bali, Ziarah Wali, MICE (Meeting, Inventions, Conventions, Exhibitions), Study Tour, dan City Tour.
          </p>

{/* Tab Button */}
<div className="flex justify-start space-x-6 mb-4">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`text-sm lg:text-base font-semibold relative transition-colors duration-300 ${
        activeTab === tab
          ? "text-blue-500 group-hover:text-white-500"
          : "text-blue-500 group-hover:text-white-500"
      }`}
    >
      {tab}
      {activeTab === tab && (
        <motion.div
          layoutId="underline"
          className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 group-hover:bg-red-500"
        />
      )}
    </button>
  ))}
</div>


          {/* Isi Tab */}
          <div className="space-y-2 min-h-[10px]">
            {activeTab === "Visi" &&
              content[activeTab].map((item, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-sm lg:text-base text-black text-bold group-hover:text-white-500"
                >
                  {item}
                </motion.p>
              ))}

            {activeTab === "Misi" &&
              content[activeTab].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="list-disc ml-5 text-sm lg:text-base text-black group-hover:text-white-500"
                >
                  {item}
                </motion.li>
              ))}

            {activeTab === "Keunggulan" &&
              content[activeTab].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-sm lg:text-base text-black group-hover:text-white-500"
                >
                  {item}
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Benefit;
