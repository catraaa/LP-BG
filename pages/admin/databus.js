import React from "react";
import Sidebar from "@/components/Sidebar";
import BusForm from "@/components/BusForm"; // pastikan path dan file ini ada

const DataBusPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <BusForm />
      </div>
    </div>
  );
};

export default DataBusPage;
