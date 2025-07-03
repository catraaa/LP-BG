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
        <div className="bg-white-500 shadow-xl rounded-xl p-4 mb-3 border border-blue-500 w-[52] md:w-64">
          <h4 className="font-bold text-center text-black-500 mb-3">Marketing</h4>
          {marketings.map((item) => (
            <a
              key={item.id}
              href={`https://wa.me/${item.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 hover:bg-green-700 text-white-500 text-sm font-medium px-4 py-2 rounded-md mb-2 transition-all w-52"
            >
              <Image src="/assets/Icon/wa.png" alt="WA" width={20} height={20} />
              {item.label}
            </a>
          ))}
        </div>
      )}
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
