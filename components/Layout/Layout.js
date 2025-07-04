import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      
      {/* PERBAIKAN DI SINI: ubah z-10 -> z-0 */}
      <div className={isAdminRoute ? "" : "relative z-0"}>
        {children}
      </div>
      
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default Layout;
