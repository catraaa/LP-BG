import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Timer from "./Timer"; // isinya FloatingMarketing
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith("/admin");

  return (
    <>
      {/* Header hanya tampil kalau bukan route admin */}
      {!isAdminRoute && <Header />}

      {/* Timer (FloatingMarketing) dipindah ke sini */}
      {!isAdminRoute && <Timer />}

      {/* Konten utama */}
      <div className={isAdminRoute ? "" : "relative z-0"}>
        {children}
      </div>

      {/* Footer hanya tampil kalau bukan route admin */}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default Layout;
