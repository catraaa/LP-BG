import React from "react";
import AdminLayout from "../../components/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-4">Selamat Datang, Admin 👋</h1>
      <p className="text-gray-700">Gunakan menu di sidebar untuk mengelola website.</p>
    </AdminLayout>
  );
}
