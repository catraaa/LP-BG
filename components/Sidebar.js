"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaTachometerAlt,
  FaBus,
  FaImage,
  FaRegWindowRestore,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white border p-2 rounded shadow"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r px-6 py-4 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        <div className="mb-10">
          <img src="/assets/logo.png" alt="Logo" className="h-10" />
        </div>
        <ul className="space-y-4 text-gray-800 font-medium">
          <li>
            <Link href="/admin/dashboard">
              <a className="flex items-center gap-2 hover:text-blue-600">
                <FaTachometerAlt />
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/databus">
              <a className="flex items-center gap-2 hover:text-blue-600">
                <FaBus />
                Data Unit
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/gallery">
              <a className="flex items-center gap-2 hover:text-blue-600">
                <FaImage />
                Galeri
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/FooterContactForm">
              <a className="flex items-center gap-2 hover:text-blue-600">
                <FaRegWindowRestore />
                Footer
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/MarketingAdmin">
              <a className="flex items-center gap-2 hover:text-blue-600">
                <FaWhatsapp />
                Marketing
              </a>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Overlay when sidebar open on mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
