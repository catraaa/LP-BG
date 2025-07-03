"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

const FloatingMarketing = () => {
  const [open, setOpen] = useState(false);
  const [marketings, setMarketings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("marketing_contacts")
        .select("*")
        .order("created_at", { ascending: true });
      if (data) setMarketings(data);
    };

    fetchData();
  }, []);

  return (
    <div className="fixed bottom-24 right-4 md:bottom-14 md:right-10 z-50">
      {open && (
        <div className="bg-white shadow-xl rounded-xl p-4 mb-3 border border-blue-500 w-64 max-w-[90vw]">
          <h4 className="font-bold text-center text-black mb-3 text-sm md:text-base">Marketing</h4>
          {marketings.map((item) => (
            <a
              key={item.id}
              href={`https://wa.me/${item.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-md mb-2 transition-all w-full"
            >
              <Image
                src="/assets/Icon/wa.png"
                alt="WA"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="truncate">{item.label}</span>
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-hijau-500 hover:bg-hijau-500 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-all flex items-center gap-2 text-sm md:text-base w-full max-w-[12rem]"
      >
        <Image src="/assets/Icon/wa.png" alt="Chat Icon" width={24} height={24} />
        <span className="whitespace-nowrap">Contact Us</span>
      </button>
    </div>
  );
};

export default FloatingMarketing;
