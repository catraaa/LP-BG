"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

const AdminGallery = () => {
  const [caption, setCaption] = useState("");
  const [images, setImages] = useState([]);
  const [gallery, setGallery] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [editingCaption, setEditingCaption] = useState("");

  const fetchGallery = async () => {
    const { data, error } = await supabase
      .from("galleries")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setGallery(data);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleImageUpload = async (files) => {
    const uploaded = [];

    for (let file of files) {
      const filePath = `gallery/${Date.now()}-${file.name}`;
      const { error } = await supabase.storage
        .from("bus-images")
        .upload(filePath, file);

      if (!error) {
        const url = supabase.storage
          .from("bus-images")
          .getPublicUrl(filePath).data.publicUrl;
        uploaded.push(url);
      } else {
        console.error("Upload error:", error);
      }
    }

    setImages(uploaded);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!caption || images.length === 0) return;

    const { error } = await supabase.from("galleries").insert([
      {
        caption,
        images,
      },
    ]);

    if (!error) {
      setCaption("");
      setImages([]);
      fetchGallery();
    } else {
      console.error("Insert error:", error);
    }
  };

  const handleDelete = async (id) => {
    await supabase.from("galleries").delete().eq("id", id);
    fetchGallery();
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!editingCaption) return;

    const { error } = await supabase
      .from("galleries")
      .update({ caption: editingCaption })
      .eq("id", editingId);

    if (!error) {
      setEditingId(null);
      setEditingCaption("");
      fetchGallery();
    } else {
      console.error("Update error:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Kelola Galeri</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow p-4 rounded-md mb-8"
        >
          <div className="mb-4">
            <label className="block font-semibold mb-1">Caption</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Upload Gambar</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files)}
            />
            <div className="flex gap-2 mt-2 flex-wrap">
              {images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt="preview"
                  width={80}
                  height={80}
                  className="rounded object-cover"
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Tambahkan Galeri
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gallery.map((item) => (
            <div key={item.id} className="border rounded shadow-sm p-4 bg-white">
              {editingId === item.id ? (
                <form onSubmit={handleEditSubmit}>
                  <input
                    type="text"
                    value={editingCaption}
                    onChange={(e) => setEditingCaption(e.target.value)}
                    className="w-full border px-2 py-1 rounded mb-2"
                  />
                  <div className="flex gap-2 text-sm">
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Simpan
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="text-gray-500"
                    >
                      Batal
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h2 className="font-semibold mb-2">{item.caption}</h2>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.images?.map((url, i) => (
                      <Image
                        key={i}
                        src={url}
                        alt={`img-${i}`}
                        width={100}
                        height={60}
                        className="rounded object-cover"
                      />
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    <button
                      onClick={() => {
                        setEditingId(item.id);
                        setEditingCaption(item.caption);
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:underline"
                    >
                      Hapus
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;
