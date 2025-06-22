"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const accordionContent = [
  {
    title: "Bus pariwisata mana yang paling direkomendasi?",
    description:
      "Kami memiliki 4 jenis bus di antaranya Big Bus dengan Seat 45, Seat 32 (Legrest), Seat 59, dan Seat 48. Kami menjamin semua armada kami merupakan armada bus yang premium dengan fasilitas yang baik dan lengkap.",
  },
  {
    title: "Bagaimana cara memesan armada bus Bagong Pariwisata?",
    description:
      "Untuk pemesanan armada bus kami, dapat langsung menghubungi kami melalui Whatsapp +62811-3970-8888",
  },
  {
    title: "Apa saja layanan Bagong Pariwisata?",
    description:
      "Kami melayani untuk overland Jawa – Bali, Ziarah Wali, MICE (Meeting, Inventions, Conventions, Exhibitions), Study Tour, dan City Tour. Kami akan melayani sesuai dengan kebutuhan Anda.",
  },
];

const AccordionItem = ({ title, description, isOpen, onClick }) => (
  <div className="border-b border-white/30">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full px-4 py-4 text-left text-white-500 font-semibold hover:bg-blue-600 transition duration-300"
    >
      <span>{title}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-white-500" />
      ) : (
        <ChevronDown className="w-5 h-5 text-white-500" />
      )}
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="px-4 pb-4 text-sm text-white-500/90"
        >
          {description}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-2 py-32 bg-white relative" id="faq-card">
      <div className="max-w-6xl mx-auto relative">
        <div className="bg-blue-500 shadow-lg rounded-2xl p-6 sm:p-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Accordion Text */}
            <div>
              <h2 className="text-3xl font-bold text-white-500 mb-6">
                Pertanyaan yang sering diajukan
              </h2>
              {accordionContent.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  isOpen={activeIndex === index}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                />
              ))}
            </div>

            {/* Gambar Responsive */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="lg:absolute lg:-top-48">
                <Image
                  src="/assets/HP.png"
                  alt="Gambar Tentang Kami"
                  width={210}
                  height={400}
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
