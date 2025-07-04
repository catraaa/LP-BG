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
    <>
      {/* Dropdown */}
      {open && (
        <div className="fixed bottom-24 right-4 z-[9999] w-[90vw] max-w-xs bg-white-500 shadow-xl rounded-xl border border-blue-500 p-4">
          <h4 className="text-center font-bold text-black mb-3">Marketing</h4>
          <div className="flex flex-col gap-2">
            {marketings.map((item) => (
              <a
                key={item.id}
                href={`https://wa.me/${item.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white-500 px-4 py-2 rounded-md text-sm font-semibold"
              >
                <Image src="/assets/Icon/wa.png" alt="WA" width={20} height={20} />
                <span className="truncate">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Tombol */}
      <div className="fixed bottom-6 right-4 z-[9999]">
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-600 hover:bg-blue-700 text-white-500 font-semibold px-5 py-3 rounded-full shadow-lg flex items-center gap-2"
        >
          <Image src="/assets/Icon/wa.png" alt="Chat Icon" width={24} height={24} />
          <span>Contact Us</span>
        </button>
      </div>
    </>
  );
};

export default FloatingMarketing;
