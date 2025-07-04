import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Timer from "./Timer";
import { useRouter } from "next/router";

// Layout.js
const Layout = ({ children }) => {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      {!isAdminRoute && (
        <div className="fixed top-0 w-full z-50">
          <Timer />
        </div>
      )}
      <div className={isAdminRoute ? "" : "relative z-10"}>
        {children}
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default Layout;
