import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const AdminUnitList = ({ onEdit }) => {
  const [units, setUnits] = useState([]);

  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, "units"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setUnits(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Yakin ingin menghapus unit ini?")) {
      await deleteDoc(doc(db, "units", id));
      fetchData();
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {units.map((unit) => (
        <div key={unit.id} className="bg-white p-4 rounded shadow">
          <img src={unit.imageUrl} alt={unit.title} className="w-full h-40 object-cover rounded" />
          <h3 className="text-lg font-semibold mt-2">{unit.title}</h3>
          <p className="text-sm text-gray-600">Kategori: {unit.category}</p>
          <div className="flex gap-2 mt-4">
<button
  onClick={() => onEdit(unit)}
  className="bg-yellow-400 text-white px-3 py-1 rounded"
>
  Edit
</button>
            <button
              onClick={() => handleDelete(unit.id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUnitList;
