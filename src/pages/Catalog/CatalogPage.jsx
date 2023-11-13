import React from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import { CatalogListWrapper } from "./CatalogPage.styled";
import FormSelectors from "../../components/FromSelectors/FormSelectors";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../Redux/selectors";

const Catalog = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FormSelectors />
          <CatalogListWrapper>
            <CatalogList />
          </CatalogListWrapper>
        </>
      )}
    </div>
  );
};

export default Catalog;
