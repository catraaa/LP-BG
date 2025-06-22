import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const slides = ["/assets/Hero.jpeg", "/assets/Hero.jpeg", "/assets/Hero.jpeg"];

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            {/* Layer background image */}
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})`, filter: "brightness(0.3)" }}
              ></div>
            </div>

            {/* Layer konten */}
            <div className="relative z-10 w-full h-screen flex flex-col justify-center items-center text-white-500 text-center px-4">
              <p className="text-lg md:text-xl mb-2 font-medium text-white-500">PT Bagong Dekaka Makmur</p>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
  Bagong Biru Pariwisata
</h1>              <p className="text-base sm:text-l md:text-l mt-4 max-w-3xl text-white-500">
Bagong Pariwisata berfokus dalam menyewakan bus pariwisata yaitu Big Bus dan Medium Bus. Dengan ini kami siap untuk melayani perjalanan di dalam provinsi, luar provinsi, maupun luar pulau.  </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="bg-blue-500 text-black hover:bg-gray-100 px-6 py-3 rounded font-semibold text-lg sm:text-xl"
                >
                  Katalog
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigasi Panah */}
      <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-40 p-2 rounded-full cursor-pointer">
        <FaChevronLeft size={20} />
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-40 p-2 rounded-full cursor-pointer">
        <FaChevronRight size={20} />
      </div>

      {/* Typing Animation */}
      <style jsx>{`
        @keyframes typing {
          0% {
            width: 0;
          }
          100% {
            width: 95%;
          }
        }
        .animate-typing {
          animation: typing 4s steps(30, end) infinite;
          white-space: nowrap;
          overflow: hidden;
          border-right: 4px solid white;
          display: inline-block;
          max-width: 100%;
        }

        @media (max-width: 600px) {
          .animate-typing {
            width: 10ch;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .animate-typing {
            width: 18ch;
          }
        }
        @media (min-width: 769px) {
          .animate-typing {
            width: 26ch;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
