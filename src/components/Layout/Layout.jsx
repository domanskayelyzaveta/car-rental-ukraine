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
      <main className="container">
        <Outlet />
      </main>
      <Suspense fallback={<div>{<Loader />}</div>}></Suspense>
    </div>
  );
};

export default Layout;
