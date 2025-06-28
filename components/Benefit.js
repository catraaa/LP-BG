"use client";

import React, { useState } from "react";
import Image from "next/image";

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
    "👨‍✈️ Driver berpengalaman, bersertifikat, dan memiliki etika baik dan ramah.",
    "📞 Layanan pelanggan responsif 24 jam.",
    "💰 Harga kompetitif dan bisa disesuaikan kebutuhan.",
  ],
};

const Benefit = () => {
  const [activeTab, setActiveTab] = useState("Visi");

  return (
    <div className="max-w-6xl mx-auto px-4 mt-44 py-10" id="visi-misi">
      <div className="relative flex flex-col lg:flex-row bg-white-500 shadow-md rounded-3xl overflow-hidden group transition-all duration-500 hover:bg-blue-500">
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
          <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-center lg:text-left text-black group-hover:text-white-500 transition-colors duration-300">
            Bagong Biru Pariwisata
          </h3>
          <div className="w-16 h-1 mb-6 mx-auto lg:mx-0 bg-blue-500 group-hover:bg-red-500 transition-colors duration-300 rounded-full" />

          <p className="text-sm lg:text-base mb-6 text-black group-hover:text-white-500 transition-colors duration-300">
            Bagong Pariwisata menyediakan transportasi sewa berupa bus pariwisata Big Bus, Medium Canter Bus, Medium Long Bus, dan Hiace Premio dengan body AVANTE H7 Facelift dan sasis HINO EURO 4. Kami melayani overland Jawa–Bali, Luar Pulau, Ziarah Wali, MICE, Study Tour, dan City Tour.
          </p>

          {/* Tab Button */}
          <div className="flex space-x-4 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 text-sm transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-black font-bold"
                    : "text-blue-500 group-hover:text-white-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Isi Tab */}
          <div className="space-y-2 min-h-[80px]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
