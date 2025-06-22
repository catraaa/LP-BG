import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Daftar logo untuk slider
const logos = [
  { id: 1, src: "/assets/waskita.png" },
  { id: 2, src: "/assets/Marga1.jpg" },
  { id: 1, src: "/assets/grand.png" },
  { id: 2, src: "/assets/galeria.jpg" },
  { id: 1, src: "/assets/uni.jpeg" },
  { id: 1, src: "/assets/waskita.png" },
  { id: 2, src: "/assets/Marga1.jpg" },
  { id: 1, src: "/assets/grand.png" },
  { id: 2, src: "/assets/galeria.jpg" },
  { id: 1, src: "/assets/uni.jpeg" },
  { id: 1, src: "/assets/waskita.png" },
  { id: 2, src: "/assets/Marga1.jpg" },
  { id: 1, src: "/assets/grand.png" },
  { id: 2, src: "/assets/galeria.jpg" },
  { id: 1, src: "/assets/uni.jpeg" },
];

const Unggul = () => {
  return (
    <div className="overflow-hidden w-full py-10 mb-10">
      {/* Judul */}
      <div className="flex justify-center items-center text-black-600 font-bold mb-10 text-3xl">
        Our
        <span className="text-maroon-500 ml-2">Partner</span>
      </div>

      {/* Slider */}
      <div className="relative">
        <motion.div
          className="flex gap-8"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }} // Durasi animasi
        >
          {/* Iterasi pertama logo */}
          {logos.map((logo) => (
            <div className="flex-shrink-0" key={logo.id}>
              <Image src={logo.src} alt={`Logo ${logo.id}`} width={100} height={60} layout="fixed" objectFit="contain" />
            </div>
          ))}

          {/* Iterasi kedua untuk loop tak terbatas */}
          {logos.map((logo) => (
            <div className="flex-shrink-0" key={`${logo.id}-duplicate`}>
              <Image src={logo.src} alt={`Logo ${logo.id}`} width={100} height={60} layout="fixed" objectFit="contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Unggul;
