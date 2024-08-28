//Packages
import React from "react";

//Components
import {
  MediaCatalogContainer,
  MediaContainer,
  CatalogTab,
  CatalogTabList,
  CatalogTabPanel,
} from "./MediaCatalog.styled";

import { TabContext } from "@mui/lab";
import MediaCard from "./MediaCard/MediaCard";

const MediaCatalog: React.FC = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderMediaCards = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <MediaCard key={index} />
    ));
  };
  return(
    <MediaCatalogContainer>
    <MediaContainer>
      <TabContext value={value}>
        <CatalogTabList onChange={handleChange}>
        <CatalogTab label="Все" value="1" />
          <CatalogTab label="Фильмы" value="2" />
          <CatalogTab label="Сериалы" value="3" />
          <CatalogTab label="Мультфильмы" value="4" />
          <CatalogTab label="Мультсериалы" value="5" />
          <CatalogTab label="Аниме" value="6" />
        </CatalogTabList>
        <CatalogTabPanel value="1">{renderMediaCards(5)}</CatalogTabPanel>
        <CatalogTabPanel value="2">{renderMediaCards(1)}</CatalogTabPanel>
        <CatalogTabPanel value="3">{renderMediaCards(1)}</CatalogTabPanel>
        <CatalogTabPanel value="4">{renderMediaCards(1)}</CatalogTabPanel>
        <CatalogTabPanel value="5">{renderMediaCards(1)}</CatalogTabPanel>
        <CatalogTabPanel value="6">{renderMediaCards(1)}</CatalogTabPanel>
      </TabContext>
    </MediaContainer>
  </MediaCatalogContainer>
  );
};

export default MediaCatalog;
