import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <Suspense fallback={<Loader />}></Suspense>
    </div>
  );
};

export default Layout;
