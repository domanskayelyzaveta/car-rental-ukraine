import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../pages/Home/HomePage";
import Catalog from "../pages/Catalog/CatalogPage";
import Favorites from "../pages/Favorites/FavoritesPage";

const App = () => {
  return (
    //isLoading ? (
    //   <Loader />
    // ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
