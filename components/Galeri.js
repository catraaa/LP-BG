import React, { useState } from "react";
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
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    {
      caption: "Big Bus seat 50",
      thumbs: ["/assets/bigbus3.jpeg", "/assets/bigbus1.jpeg", "/assets/bigbus1.jpeg"],
    },
    {
      caption: "Medium Long seat 39",
      thumbs: ["/assets/mediumlong2.jpeg", "/assets/g3.jpeg"],
    },
    {
      caption: "Medium seat 29",
      thumbs: ["/assets/g44.jpeg", "/assets/medium2.jpeg"],
    },
  ];

  return (
    <section className="pt-20 md:p-20 bg-white-500" id="galeri">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-semibold text-gray-800">Galeri</h3>
        <div className="h-1 w-24 bg-blue-500 rounded-full mx-auto my-2" />
        <p className="text-sm text-black">
          Nikmati perjalanan bersama <span className="text-blue-500 font-medium">Bagong Biru Pariwisata</span>
        </p>
      </div>

      <Slider {...settings} className="rounded-lg">
        {images.map((item, i) => (
          <GalleryItem key={i} thumbs={item.thumbs} caption={item.caption} />
        ))}
      </Slider>
    </section>
  );
};

const GalleryItem = ({ thumbs, caption }) => {
  const [selectedImage, setSelectedImage] = useState(thumbs[0]);

  return (
    <div className="px-2">
      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
        <Image src={selectedImage} alt={caption} layout="fill" objectFit="cover" className="rounded-lg" />
        <div className="absolute bottom-0 w-full bg-blue-600 bg-opacity-80 text-white-500 text-sm md:text-base text-center py-2">
          {caption}
        </div>
      </div>
      <div className="flex gap-2 mt-2 justify-center">
        {thumbs.map((thumb, i) => (
          <div
            key={i}
            className={`relative w-16 h-10 border-2 rounded overflow-hidden cursor-pointer ${
              selectedImage === thumb ? "border-blue-600" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(thumb)}
          >
            <Image src={thumb} alt={`thumb-${i}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

const PreviousArrow = ({ onClick }) => (
  <div className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
    <div className="bg-white-500 shadow-md hover:bg-white/80 rounded-full p-2">
      <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
    <div className="bg-white-500 shadow-md hover:bg-white/80 rounded-full p-2">
      <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);

export default Galeri;
