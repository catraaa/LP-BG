import { useState } from "react";
import { db, storage } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AdminUnitForm = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    seat: "",
    toilet: "",
    smoking: "",
    cctv: "",
    tv: "",
    audio: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("FORM DATA ➡️", form);
  console.log("FORM IMAGE FILE ➡️", form.image);

  if (!form.image) {
    alert("Silakan pilih gambar!");
    return;
  }

    try {
      const imageRef = ref(storage, `units/${Date.now()}-${form.image.name}`);
      await uploadBytes(imageRef, form.image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "units"), {
        title: form.title || "",
        category: form.category || "",
        imageUrl,
        description: {
          seat: form.seat || "",
          toilet: form.toilet || "",
          smoking: form.smoking || "",
          cctv: form.cctv || "",
          tv: form.tv || "",
          audio: form.audio || "",
        },
      });

      alert("✅ Unit berhasil ditambahkan!");

      // Reset form
      setForm({
        title: "",
        category: "",
        seat: "",
        toilet: "",
        smoking: "",
        cctv: "",
        tv: "",
        audio: "",
        image: null,
      });

      // Reset input file
      document.getElementById("image").value = "";
    } catch (err) {
      console.error("❌ Gagal submit:", err);
      alert("Gagal menambahkan unit. Cek console untuk detail error.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-2">Tambah Unit Baru</h2>
      <input name="title" value={form.title} placeholder="Judul" onChange={handleChange} required className="border w-full p-2 rounded" />
      <input name="category" value={form.category} placeholder="Kategori" onChange={handleChange} required className="border w-full p-2 rounded" />
      <input name="seat" value={form.seat} placeholder="Jumlah Seat" onChange={handleChange} className="border w-full p-2 rounded" />
      <input name="toilet" value={form.toilet} placeholder="Toilet (Ya/Tidak)" onChange={handleChange} className="border w-full p-2 rounded" />
      <input name="smoking" value={form.smoking} placeholder="Smoking (Ya/Tidak)" onChange={handleChange} className="border w-full p-2 rounded" />
      <input name="cctv" value={form.cctv} placeholder="Jumlah CCTV" onChange={handleChange} className="border w-full p-2 rounded" />
      <input name="tv" value={form.tv} placeholder="Jumlah TV" onChange={handleChange} className="border w-full p-2 rounded" />
      <input name="audio" value={form.audio} placeholder="Audio Android (Ya/Tidak)" onChange={handleChange} className="border w-full p-2 rounded" />
      <input id="image" name="image" type="file" accept="image/*" onChange={handleChange} required className="border w-full p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Simpan</button>
    </form>
  );
};

export default AdminUnitForm;
