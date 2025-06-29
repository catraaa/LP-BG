import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaBus, FaImages, FaMoneyBill, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import Image from "next/image";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md">
        <div className="flex items-center px-6 py-4 border-b">
          <Image src="/assets/logo.png" alt="Logo" width={120} height={40} />
          <span className="ml-4 font-bold text-lg">Admin</span>
        </div>
        <nav className="p-4 space-y-2 text-gray-800">
          <a href="/admin/dashboard" className="flex items-center px-4 py-2 rounded bg-blue-100 text-blue-700 font-semibold">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </a>
          <a href="/admin/databus" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded">
            <FaMoneyBill className="mr-2" /> Data Unit
          </a>
          <a href="/admin/galeri" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded">
            <FaImages className="mr-2" /> Galeri
          </a>
          <a href="/admin/footer" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded">
            <FaBus className="mr-2" /> Footer
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-end items-center p-4 border-b relative">
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
              <Image
                src="/assets/bigbus3.jpeg"
                width={40}
                height={40}
                className="rounded-full"
                alt="Profile"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow rounded w-32 z-50">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-black bg-blue-500 hover:bg-gray-500"
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
