import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        router.push("/login"); // jika belum login, redirect ke /login
      } else {
        setUser(data.user);
      }
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();      // logout dari supabase
    router.push("/admin/login");              // redirect ke halaman login
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar kiri */}
      <Sidebar />

      {/* Konten kanan */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-white-500 border-b shadow-sm">
          <h1 className="text-xl font-semibold text-gray-800">
            Selamat datang, Admin!
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white-500 px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        {/* Konten utama */}
        <main className="p-6">
          <p className="text-gray-700">Ini adalah halaman dashboard admin.</p>
        </main>
      </div>
    </div>
  );
}
