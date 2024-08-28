//Packages
import React from "react";

//Components
import { CatalogСontent } from "./CatalogPage.styled";
import MediaCatalog from "./MediaCatalog/MediaCatalog";

const CatalogPage: React.FC = () => {
  return (
    <CatalogСontent>
      <MediaCatalog/>
    </CatalogСontent>
  );
};

export default CatalogPage;
