"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { GiWaterBottle } from "react-icons/gi";


import {
  FaToilet,
  FaSmoking,
  FaVideo,
  FaTv,
  FaFireExtinguisher,
  FaHammer,
} from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { GiPillow, GiMicrophone } from "react-icons/gi";

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [projects, setProjects] = useState([]);

  const categories = [
    "Semua",
    "Big Bus",
    "Medium Canter",
    "Medium Long",
    "Jumbo",
    "Hiace Premio",
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("buses")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching bus data:", error);
      } else {
        setProjects(data || []);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    selectedCategory === "Semua"
      ? projects
      : projects.filter((item) => item.category === selectedCategory);

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-20 bg-white-500">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-2 mt-4 inline-block border-b-4 border-blue-500 pb-1"
        >
          Daftar Pilihan Bus
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-black-500 mb-6"
        >
          Pilihan Bus Pariwisata Biru untuk Perjalanan Anda
        </motion.p>

        <div className="flex justify-center mb-6">
          <select
            className="border rounded px-4 py-2 text-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-500">Data bus belum tersedia...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
                className="group bg-white max-w-sm w-full rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl mx-auto"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 mb-4">
                    <p className="flex items-center gap-2">
                      <MdAirlineSeatReclineNormal /> Seat: {project.seat}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaVideo /> CCTV: {project.cctv}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaTv /> Smart TV: {project.tv}
                    </p>
                    <p className="flex items-center gap-2">
                      <GiMicrophone /> Audio Android: {project.audio}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaSmoking /> Smoking Area: {project.smoking}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaToilet /> Toilet: {project.toilet}
                    </p>
                    <p className="flex items-center gap-2">
                      <GiPillow /> Bantal Selimut: {project.bantal_selimut || "-"}
                    </p>
                    <p className="flex items-center gap-2">
                      <GiWaterBottle /> Dispenser: {project.dispenser || "-"}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaFireExtinguisher /> APAR {project.apar}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaHammer /> Safety Hammer {project.safety_hammer}
                    </p>
                  </div>

                  {Array.isArray(project.marketing_phones) &&
                    project.marketing_phones.length > 0 && (
                      <div className="mt-auto flex justify-center">
                        <div className="relative inline-block w-full">
                          <select
                            onChange={(e) => {
                              if (e.target.value) {
                                window.open(e.target.value, "_blank");
                              }
                            }}
                            className="appearance-none w-full bg-blue-500 text-white-500 text-sm font-medium px-4 py-2 pr-8 rounded-xl shadow hover:bg-blue-600 transition duration-300 cursor-pointer"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Sewa
                            </option>
                            {project.marketing_phones.map((entry, i) => (
                              <option key={i} value={entry.link}>
                                {entry.label}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white-500">
                            ▼
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
