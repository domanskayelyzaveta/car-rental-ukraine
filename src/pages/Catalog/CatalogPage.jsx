import React from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import { CatalogListWrapper } from "./CatalogPage.styled";
import FormSelectors from "../../components/FromSelectors/FormSelectors";

const Catalog = () => {
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
