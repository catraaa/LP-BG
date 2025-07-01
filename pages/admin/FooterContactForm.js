// File: pages/admin/FooterContactForm.js
"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";

const FooterContactForm = () => {
  const [contacts, setContacts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    region: "",
    address: "",
    email: "",
    phones: [{ label: "", link: "" }],
  });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const { data, error } = await supabase.from("footer_contacts").select("*");
    if (!error) setContacts(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (index, field, value) => {
    const updatedPhones = [...form.phones];
    updatedPhones[index][field] = value;
    setForm({ ...form, phones: updatedPhones });
  };

  const addPhoneField = () => {
    if (form.phones.length < 5) {
      setForm({ ...form, phones: [...form.phones, { label: "", link: "" }] });
    }
  };

  const removePhoneField = (index) => {
    const updatedPhones = form.phones.filter((_, i) => i !== index);
    setForm({ ...form, phones: updatedPhones });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await supabase.from("footer_contacts").update(form).eq("id", editingId);
    } else {
      await supabase.from("footer_contacts").insert([form]);
    }
    resetForm();
    fetchContacts();
  };

  const resetForm = () => {
    setForm({ region: "", address: "", email: "", phones: [{ label: "", link: "" }] });
    setEditingId(null);
  };

  const handleEdit = (contact) => {
    setForm(contact);
    setEditingId(contact.id);
  };

  const handleDelete = async (id) => {
    await supabase.from("footer_contacts").delete().eq("id", id);
    fetchContacts();
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-white-500">
        <h1 className="text-2xl font-bold mb-4">Kelola Kontak Footer</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        >
          <input
            type="text"
            name="region"
            value={form.region}
            onChange={handleChange}
            placeholder="Region (contoh: Head Office)"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Alamat"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded"
            required
          />

          <div className="col-span-2">
            <label className="block font-semibold mb-2">Nomor WhatsApp Marketing (maks. 5):</label>
            {form.phones.map((phone, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Label (contoh: +62 812-xxxx)"
                  value={phone.label}
                  onChange={(e) => handlePhoneChange(index, "label", e.target.value)}
                  className="border p-2 rounded w-1/2"
                />
                <input
                  type="url"
                  placeholder="Link (contoh: https://wa.me/628xxx)"
                  value={phone.link}
                  onChange={(e) => handlePhoneChange(index, "link", e.target.value)}
                  className="border p-2 rounded w-1/2"
                />
                {form.phones.length > 1 && (
                  <button type="button" onClick={() => removePhoneField(index)} className="text-white-500">Hapus</button>
                )}
              </div>
            ))}
            {form.phones.length < 5 && (
              <button type="button" onClick={addPhoneField} className="text-blue-600">+ Tambah Nomor</button>
            )}
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-white-500 px-4 py-2 rounded hover:bg-blue-600"
            >
              {editingId ? "Update Kontak" : "Tambah Kontak"}
            </button>
          </div>
        </form>

        <h2 className="text-xl font-semibold mb-3">Daftar Kontak</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map((c) => (
            <div key={c.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold mb-1">{c.region}</h3>
              <p className="text-sm">📍 {c.address}</p>
              <p className="text-sm">📧 {c.email}</p>
              <div className="mt-2 text-sm text-blue-700">
                {c.phones?.map((p, i) => (
                  <div key={i}>
                    <a href={p.link} target="_blank" rel="noreferrer">
                      {p.label}
                    </a>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-3">
                <button onClick={() => handleEdit(c)} className="bg-yellow-400 text-blue-700 px-3 py-1 rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(c.id)} className="bg-red-500 text-white-500 px-3 py-1 rounded">
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FooterContactForm;
