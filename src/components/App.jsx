import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../pages/Home/HomePage";
import Catalog from "../pages/Catalog/CatalogPage";

import { useDispatch } from "react-redux";
import { getAllCarThunk, getCarThunk } from "../Redux/thunks";
import { fetchCatalog } from "../service/Api";

import FavoritesPage from "../pages/Favorites/FavoritesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarThunk());
    dispatch(getAllCarThunk());
  }, [dispatch]);

  fetchCatalog();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
