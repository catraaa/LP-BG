"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const BusForm = () => {
  const [buses, setBuses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    seat: "",
    toilet: "",
    smoking: "",
    cctv: "",
    tv: "",
    bantal: "",
    audio: "",
    marketing_phones: [{ label: "", link: "" }],
  });
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await supabase.from("buses").select("*");
    setBuses(data || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (index, key, value) => {
    const updatedPhones = [...form.marketing_phones];
    updatedPhones[index][key] = value;
    setForm((prev) => ({ ...prev, marketing_phones: updatedPhones }));
  };

  const addPhoneField = () => {
    if (form.marketing_phones.length < 5) {
      setForm((prev) => ({
        ...prev,
        marketing_phones: [...prev.marketing_phones, { label: "", link: "" }],
      }));
    }
  };

  const removePhoneField = (index) => {
    const updatedPhones = form.marketing_phones.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, marketing_phones: updatedPhones }));
  };

  const handleUpload = async () => {
    if (!imageFile) return null;
    const fileName = `${Date.now()}_${imageFile.name}`;
    const { data, error } = await supabase.storage
      .from("bus-images")
      .upload(fileName, imageFile);
    if (error) throw error;
    return supabase.storage.from("bus-images").getPublicUrl(data.path).data.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageUrl = imageFile ? await handleUpload() : form.image || null;

    const busData = {
      ...form,
      image: imageUrl,
    };

    if (editingId) {
      await supabase.from("buses").update(busData).eq("id", editingId);
    } else {
      await supabase.from("buses").insert([busData]);
    }

    setForm({
      title: "",
      category: "",
      seat: "",
      toilet: "",
      smoking: "",
      cctv: "",
      tv: "",
      bantal: "",
      audio: "",
      marketing_phones: [{ label: "", link: "" }],
    });
    setImageFile(null);
    setEditingId(null);
    fetchData();
  };

  const handleEdit = (bus) => {
    setForm({
      ...bus,
      marketing_phones: bus.marketing_phones || [{ label: "", link: "" }],
    });
    setEditingId(bus.id);
  };

  const handleDelete = async (id) => {
    await supabase.from("buses").delete().eq("id", id);
    fetchData();
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Tambah / Edit Data Bus</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {Object.entries(form)
          .filter(([key]) => key !== "marketing_phones")
          .map(([key, value]) => (
            <input
              key={key}
              name={key}
              value={value || ""}
              onChange={handleChange}
              placeholder={key}
              className="border p-2 w-full"
            />
          ))}
        <div className="col-span-2">
          <label className="block font-semibold mb-1">Nomor WhatsApp Marketing (maks. 5):</label>
          {form.marketing_phones.map((phone, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={phone.label}
                onChange={(e) => handlePhoneChange(index, "label", e.target.value)}
                placeholder="Label (cth: Marketing Jatim 1)"
                className="border p-2 w-1/2"
              />
              <input
                type="text"
                value={phone.link}
                onChange={(e) => handlePhoneChange(index, "link", e.target.value)}
                placeholder="Link (cth: https://wa.me/628xx...)"
                className="border p-2 w-1/2"
              />
              {form.marketing_phones.length > 1 && (
                <button type="button" onClick={() => removePhoneField(index)} className="text-red-500">
                  Hapus
                </button>
              )}
            </div>
          ))}
          {form.marketing_phones.length < 5 && (
            <button type="button" onClick={addPhoneField} className="text-blue-500 mt-1">
              + Tambah Nomor
            </button>
          )}
        </div>
        <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
        <button type="submit" className="bg-blue-500 text-white-500 px-4 py-2 rounded">
          {editingId ? "Update" : "Tambah"} Bus
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Daftar Data Bus</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {buses.map((bus) => (
          <div key={bus.id} className="border p-4 rounded">
            <img src={bus.image} alt={bus.title} className="w-full h-40 object-cover mb-2" />
            <h3 className="font-semibold text-lg mb-2">{bus.title}</h3>
            <ul className="text-sm space-y-1 mb-2">
              <li>Seat: {bus.seat}</li>
              <li>Toilet: {bus.toilet}</li>
              <li>Smoking: {bus.smoking}</li>
              <li>CCTV: {bus.cctv}</li>
              <li>TV: {bus.tv}</li>
              <li>Bantal: {bus.bantal}</li>
              <li>Audio: {bus.audio}</li>
            </ul>
            <div className="text-xs text-blue-600 space-y-1 mb-2">
              {bus.marketing_phones?.map((item, i) => (
                <div key={i}>{item.label}: {item.link}</div>
              ))}
            </div>
            <div className="flex justify-between">
              <button className="bg-yellow-400 text-white-500 px-3 py-1 rounded" onClick={() => handleEdit(bus)}>
                Edit
              </button>
              <button className="bg-red-500 text-white-500 px-3 py-1 rounded" onClick={() => handleDelete(bus.id)}>
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusForm;