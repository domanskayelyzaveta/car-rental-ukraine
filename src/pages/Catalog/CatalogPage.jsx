import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCatalog } from "../../service/Api";
import { getCarThunk } from "../../Redux/thunks";
import CatalogList from "../../components/CatalogList/CatalogList";
import { CatalogListWrapper } from "./CatalogPage.styled";
import FormSelectors from "../../components/FromSelectors/FormSelectors";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarThunk());
  }, [dispatch]);

  fetchCatalog();

  return (
    <div>
      <FormSelectors />
      <CatalogListWrapper>
        <CatalogList />
      </CatalogListWrapper>
    </div>
  );
};

export default Catalog;
