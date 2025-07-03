import React from "react";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Head Office Malang",
    address:
      "Jl. Karya Timur No.74, Purwantoro, Kec. Blimbing, Kota Malang, Jawa Timur 65122",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3804565380626!2d112.6423412!3d-7.9474565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629a147ce7b9b%3A0xa0f760ecbc6154af!2sBagong%20Biru%20Pariwisata!5e0!3m2!1sid!2sid!4v1719054099999!5m2!1sid!2sid",
  },
  {
    name: "Office Jabodetabek",
    address:
      "Jl. Diponegoro No.102, Jatimulya, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7651205583345!2d106.9783734!3d-6.2594634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f00518525bb%3A0x4d122bd48469faac!2sGARASI%20PT.%20BAGONG%20DEKAKA%20MAKMUR!5e0!3m2!1sid!2sid!4v1719054099999!5m2!1sid!2sid",
  },
];

const Maps = () => {
  return (
    <section className="py-20 bg-white mt-20" id="map">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-800 mb-2"
        >
          Lokasi Kami
        </motion.h2>

        {/* Underline Decorative */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 h-1 w-24 bg-blue-500 origin-left rounded-full"
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="bg-blue-500 text-white-500 px-4 py-3 font-semibold text-lg">
                {loc.name}
              </div>
              <div className="p-4 text-sm text-gray-700">
                <p>{loc.address}</p>
              </div>
              <div className="relative h-60" style={{ paddingBottom: "20%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={loc.mapSrc}
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maps;
