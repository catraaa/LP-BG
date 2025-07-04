"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

const FloatingMarketing = () => {
  const [open, setOpen] = useState(false);
  const [marketings, setMarketings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("marketing_contacts")
        .select("*")
        .order("created_at", { ascending: true });

      if (data) setMarketings(data);
    };

    fetchData();
  }, []);

  return (
    <div className="fixed bottom-6 right-4 z-[9999] flex flex-col items-end">
      {/* Dropdown naik ke atas tombol */}
      {open && (
        <div className="mb-3 w-64 max-w-[90vw] bg-white-500 border border-red-500 rounded-xl shadow-lg p-4 animate-fadeInUp">
          <h4 className="text-center font-bold text-black mb-3">Marketing</h4>
          {marketings.map((item) => (
            <a
              key={item.id}
              href={`https://wa.me/${item.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 hover:bg-red-700 text-white-500 text-sm font-semibold px-4 py-2 rounded-md mb-2"
            >
              <Image
                src="/assets/Icon/wa.png"
                alt="WA"
                width={20}
                height={20}
              />
              <span className="truncate">{item.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Tombol Utama */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-500 hover:bg-red-700 text-white-500 font-semibold px-5 py-3 rounded-full shadow-lg transition-all flex items-center gap-2"
      >
        <Image src="/assets/Icon/wa.png" alt="WA" width={24} height={24} />
        <span>Contact Us</span>
      </button>
    </div>
  );
};

export default FloatingMarketing;
