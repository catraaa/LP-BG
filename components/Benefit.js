"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariant}
        className="relative flex flex-col lg:flex-row bg-white shadow-md rounded-[30px] overflow-hidden group transition-all duration-500 hover:bg-blue-500"
      >
        {/* Gambar Bus */}
        <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto flex items-center justify-center bg-transparent z-10">
          <Image
            src="/assets/G4.png"
            alt="Bus Pariwisata"
            width={500}
            height={330}
            className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Teks dan Tab */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center z-20">
          {/* Judul */}
          <motion.h3
            variants={textVariant}
            className="text-2xl lg:text-3xl font-bold mb-2 text-center lg:text-left text-black group-hover:text-white-500 transition-colors duration-300"
          >
            Bagong Biru Pariwisata
          </motion.h3>
          <div className="w-16 h-1 mb-6 mx-auto lg:mx-0 bg-blue-500 group-hover:bg-red-500 transition-colors duration-300 rounded-full" />

          {/* Deskripsi */}
          <p className="text-sm lg:text-base mb-6 text-black group-hover:text-white-500 transition-colors duration-300">
            Bagong Pariwisata menyediakan transportasi sewa berupa bus pariwisata Big Bus dan Medium Bus dengan body AVANTE H7 Facelift tahun 2023 dan sasis HINO EURO 4. Kami melayani overland Jawa–Bali, Ziarah Wali, MICE, Study Tour, dan City Tour.
          </p>

          {/* Tab Button */}
          <div className="flex space-x-4 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-semibold relative transition-colors duration-300 ${
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 min-h-[80px]"
            >
              {activeTab === "Misi" &&
                content[activeTab].map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm lg:text-base list-disc ml-5 text-black group-hover:text-white-500 transition-colors"
                  >
                    {item}
                  </li>
                ))}

              {(activeTab === "Visi" || activeTab === "Keunggulan") &&
                content[activeTab].map((item, idx) => (
                  <p
                    key={idx}
                    className="text-sm lg:text-base text-black group-hover:text-white-500 transition-colors"
                  >
                    {item}
                  </p>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Benefit;
