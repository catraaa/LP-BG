import AdminLayout from "@/components/AdminLayout";
import AdminUnitForm from "@/components/AdminUnitForm";
import AdminUnitList from "@/components/AdminUnitList";
import { useState } from "react";

const DataBus = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSaveComplete = () => {
    setSelectedUnit(null);
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Kelola Data Unit</h1>
      <AdminUnitForm selectedUnit={selectedUnit} onSaveComplete={handleSaveComplete} />
      <AdminUnitList key={refreshKey} onEdit={setSelectedUnit} />
    </AdminLayout>
  );
};

export default DataBus;
