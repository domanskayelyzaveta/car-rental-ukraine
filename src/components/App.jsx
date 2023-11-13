import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../pages/Home/HomePage";
import Catalog from "../pages/Catalog/CatalogPage";

import { useDispatch, useSelector } from "react-redux";
import { getAllCarThunk, getCarThunk } from "../Redux/thunks";
import { fetchCatalog } from "../service/Api";
import { selectIsLoading } from "../Redux/selectors";

import Loader from "./Loader/Loader";
import FavoritesPage from "../pages/Favorites/FavoritesPage";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCarThunk());
    dispatch(getAllCarThunk());
  }, [dispatch]);

  fetchCatalog();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
};

export default App;
