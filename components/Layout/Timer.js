"use client";
import React, { useState } from "react";
import Image from "next/image";

const marketings = [
  { label: "Marketing Malang", number: "6281234567890" },
  { label: "Marketing Malang", number: "6282234567890" },
  { label: "Marketing Bekasi", number: "6283234567890" },
  { label: "Marketing Bekasi", number: "6283234567890" },
];

const FloatingMarketing = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 md:bottom-14 md:right-10 z-50">
      {/* Panel Dropdown */}
      {open && (
        <div className="bg-white-500 shadow-xl rounded-xl p-4 mb-3 border border-blue-500 w-[85vw] md:w-64">
          <h4 className="font-bold text-center text-black-500 mb-3">Marketing</h4>
          {marketings.map((item, idx) => (
            <a
              key={idx}
              href={`https://wa.me/${item.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 hover:bg-green-700 text-white-500 text-sm font-medium px-4 py-2 rounded-md mb-2 transition-all"
            >
              <Image src="/assets/Icon/wa.png" alt="WA" width={20} height={20} />
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Tombol Utama */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-hijau-500 hover:bg-hijau-500 text-white-500 font-semibold px-5 py-3 rounded-full shadow-lg transition-all flex items-center gap-2 text-sm md:text-base"
      >
        <Image src="/assets/Icon/wa.png" alt="Chat Icon" width={24} height={24} />
        <span>Contact Us</span>
      </button>
    </div>
  );
};

export default FloatingMarketing;
