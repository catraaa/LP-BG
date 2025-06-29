import React from "react";
import Image from "next/image";

const Footer = () => {
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
            Bagong Pariwisata berfokus dalam menyewakan bus pariwisata yaitu
            Big Bus dan Medium Bus. Kami siap melayani perjalanan dalam maupun luar provinsi.
          </p>

          {/* Ikon Media Sosial */}
          <div className="flex mt-2 space-x-4">
            <a
              href="https://www.instagram.com/bagong_pariwisata.official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/Icon/ig.png" alt="Instagram" width={29} height={29} />
            </a>
            <a
              href="https://www.tiktok.com/@bagongbirupariwisata"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/tik-tok.png" alt="Tiktok" width={29} height={29} />
            </a>
            <a
              href="https://www.facebook.com/bagong.pariwisata/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/Icon/fb.png" alt="Facebook" width={32} height={32} />
            </a>
          </div>
        </div>

        {/* Head Office */}
        <div className="flex flex-col sm:col-span-4 text-white">
          <p className="mb-2 font-medium text-lg">Head Office</p>
          <ul className="text-sm md:text-base space-y-1 break-words">
            <li className="flex items-start gap-2">
              🗺️ <span>Jl. Karya Timur No.74, Purwantoro, Kec. Blimbing, Kota Malang, Jawa Timur 65122</span>
            </li>
            <li className="flex items-start gap-2">
              📧 <span>marketingbagongbirupariwisata@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/assets/Icon/wa.png" alt="WA" width={20} height={20} />
              <a href="https://wa.me/6281139708888" target="_blank" rel="noopener noreferrer">
                +62 811-3970-8888
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/assets/Icon/wa.png" alt="WA" width={20} height={20} />
              <a href="https://wa.me/6281130569888" target="_blank" rel="noopener noreferrer">
                +62 811-3056-9888
              </a>
            </li>
          </ul>
        </div>

        {/* Jabodetabek */}
        <div className="flex flex-col sm:col-span-4 text-white">
          <p className="mb-2 font-medium text-lg">Jabodetabek</p>
          <ul className="text-sm md:text-base space-y-1 break-words">
            <li className="flex items-start gap-2">
              🗺️ <span>Jl. Diponegoro No.102, Jatimulya, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510</span>
            </li>
            <li className="flex items-start gap-2">
              📧 <span>jabodetabek@bagongpariwisata.co.id</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/assets/Icon/wa.png" alt="WA" width={20} height={20} />
              <a href="https://wa.me/6281130570888" target="_blank" rel="noopener noreferrer">
                +62 812-1234-5678
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/assets/Icon/wa.png" alt="WA" width={20} height={20} />
              <a href="https://wa.me/6281133317777" target="_blank" rel="noopener noreferrer">
                +62 819-9876-5432
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-gray-300 text-sm px-6 py-4 text-center">
        ©{new Date().getFullYear()} - BAGONG BIRU PARIWISATA
      </p>
    </div>
  );
};

export default Footer;
