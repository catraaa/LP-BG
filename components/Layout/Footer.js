"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const Footer = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const { data, error } = await supabase
        .from("footer_contacts")
        .select("*")
        .order("region", { ascending: true });
      if (!error) setContacts(data);
    };
    fetchContacts();
  }, []);

  const groupedContacts = contacts.reduce((acc, contact) => {
    if (!acc[contact.region]) acc[contact.region] = [];
    acc[contact.region].push(contact);
    return acc;
  }, {});

  return (
    <div className="bg-gray-600 flex flex-col pt-6 pb-6">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 flex flex-col sm:grid sm:grid-cols-12 sm:grid-rows-1 gap-6">
        {/* Logo dan Deskripsi */}
        <div className="flex flex-col sm:col-span-4 text-white">
          <div className="mb-2">
            <Image
              src="/assets/logo.png"
              alt="Logo Bagong"
              className="h-12 w-18"
              width={150}
              height={60}
            />
          </div>
          <p className="mb-2 text-sm md:text-base">
            <strong className="font-semibold">Bagong Biru Pariwisata</strong> -
            Bagong Biru Pariwisata berfokus dalam menyewakan bus pariwisata yaitu Big Bus, Medium Canter Bus, Medium Long Bus, Micro Bus dan Hiace Premio.
            Kami siap melayani perjalanan dalam maupun luar provinsi.
          </p>
          <div className="flex mt-2 space-x-4">
            <a href="https://www.instagram.com/bagong_pariwisata.official/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/Icon/ig.png" alt="Instagram" width={29} height={29} />
            </a>
            <a href="https://www.tiktok.com/@bagongbirupariwisata" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/tik-tok.png" alt="Tiktok" width={29} height={29} />
            </a>
            <a href="https://www.facebook.com/bagong.pariwisata/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/Icon/fb.png" alt="Facebook" width={32} height={32} />
            </a>
          </div>
        </div>

        {/* Kontak Region */}
        {Object.entries(groupedContacts).map(([region, entries], idx) => (
          <div key={idx} className="flex flex-col sm:col-span-4 text-white">
            <p className="mb-2 font-medium text-lg">{region}</p>
            <ul className="text-sm md:text-base space-y-1 break-words">
              <li className="flex items-start gap-2">🗺️ <span>{entries[0].address}</span></li>
              <li className="flex items-start gap-2">📧 <span>{entries[0].email}</span></li>
              {entries[0].phones?.map((phone, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Image src="/assets/Icon/wa.png" alt="WA" width={20} height={20} />
                  <a href={phone.link} target="_blank" rel="noopener noreferrer">
                    {phone.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-gray-300 text-sm px-6 py-4 text-center">
        ©{new Date().getFullYear()} - BAGONG BIRU PARIWISATA
      </p>
    </div>
  );
};

export default Footer;