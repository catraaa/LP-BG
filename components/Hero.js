"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-screen" id="home">
      {/* Background dengan brightness */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/assets/Hero.jpeg')",
          filter: "brightness(0.1)",
        }}
      />

      {/* Konten Hero */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: false }}
          className="text-lg md:text-xl mb-2 font-medium text-white-500"
        >
          PT Bagong Dekaka Makmur
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white-500"
        >
          Bagong Biru Pariwisata
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: false }}
          className="text-base sm:text-lg md:text-lg mt-4 max-w-3xl text-white-500"
        >
          Bagong Pariwisata berfokus dalam menyewakan bus pariwisata yaitu Big Bus, Medium Canter Bus, Medium Long Bus, Micro Bus, dan Hiace Premio.
          Dengan ini kami siap untuk melayani perjalanan di dalam provinsi, luar provinsi, maupun luar pulau.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: false }}
          className="mt-8"
        >
          <a
            href="#pricing"
            className="bg-blue-500 text-white-500 hover:bg-white hover:text-white-500 px-6 py-3 rounded font-semibold text-lg sm:text-xl transition-all duration-300"
          >
            Katalog
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
