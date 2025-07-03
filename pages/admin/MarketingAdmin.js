"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";

const MarketingAdmin = () => {
  const [marketings, setMarketings] = useState([]);
  const [form, setForm] = useState({ label: "", number: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await supabase
      .from("marketing_contacts")
      .select("*")
      .order("created_at", { ascending: true });
    setMarketings(data || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.label || !form.number) return;

    if (editingId) {
      await supabase.from("marketing_contacts").update(form).eq("id", editingId);
    } else {
      await supabase.from("marketing_contacts").insert([form]);
    }

    setForm({ label: "", number: "" });
    setEditingId(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setForm({ label: item.label, number: item.number });
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    await supabase.from("marketing_contacts").delete().eq("id", id);
    fetchData();
  };

  return (
    <div className="flex min-h-screen bg-white-500">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-2xl mx-auto bg-white-500 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Kelola Kontak Marketing</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Label</label>
              <input
                type="text"
                placeholder="Contoh: Jawa Timur 1"
                value={form.label}
                onChange={(e) => setForm({ ...form, label: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nomor WhatsApp</label>
              <input
                type="text"
                placeholder="Contoh: 6281234567890"
                value={form.number}
                onChange={(e) => setForm({ ...form, number: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white-500 py-2 rounded font-semibold transition"
            >
              {editingId ? "Simpan Perubahan" : "Tambah"}
            </button>
          </form>

          {/* Daftar Kontak */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Daftar Kontak</h3>
            {marketings.length === 0 ? (
              <p className="text-sm text-gray-500">Belum ada data.</p>
            ) : (
              <ul className="space-y-3">
                {marketings.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center bg-gray-50 border p-3 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.number}</p>
                    </div>
                    <div className="space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="px-3 py-1 text-sm text-red-500 bg-yellow-500 hover:bg-yellow-600 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1 text-sm text-white-500 bg-red-500 hover:bg-red-600 rounded"
                      >
                        Hapus
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketingAdmin;
