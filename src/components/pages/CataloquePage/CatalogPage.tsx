//Packages
import React from "react";

//Components
import { CatalogСontent } from "./CatalogPage.styled";
import MediaCatalog from "./MediaCatalog/MediaCatalog";
import Filter from "./Filter/Filter";

const CatalogPage: React.FC = () => {
  return (
    <CatalogСontent>
      <MediaCatalog/>
      <Filter/>
      
    </CatalogСontent>
  );
};

export default CatalogPage;
