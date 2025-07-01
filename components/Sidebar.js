import React from "react";
import Link from "next/link";
import { FaTachometerAlt, FaBus, FaImage, FaRegWindowRestore } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r px-6 py-4">
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
      </ul>
    </aside>
  );
};

export default Sidebar;
