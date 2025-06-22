import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Galeri = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const images = [
    { src: "/assets/g1.jpeg", caption: "Bigbus seat 50" },
    { src: "/assets/g2.jpeg", caption: "Bigbus seat 50" },
    { src: "/assets/g3.jpeg", caption: "Medium Long seat 39" },
    { src: "/assets/g4.jpeg", caption: "Medium seat 29" },
  ];

  return (
    <section className="pt-20 md:p-20 bg-white-500" id="galeri">
      <div className="text-center">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-gray-800"
        >
          Galeri
        </motion.h3>

        {/* Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-1 w-24 bg-blue-500 rounded-full mx-auto my-2 origin-left"
        ></motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-black mb-10"
        >
          Nikmati perjalanan bersama <span className="font-medium text-blue-500">Bagong Biru Pariwisata</span>
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Slider {...settings} className="rounded-lg">
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 w-full bg-blue-600 bg-opacity-80 text-white-500 text-sm md:text-base text-center py-2">
                  {image.caption}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

// Tombol Previous
const PreviousArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-white-500 shadow-md hover:bg-white/80 rounded-full p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  </div>
);

// Tombol Next
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-white-500 shadow-md hover:bg-white/80 rounded-full p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);

export default Galeri;
