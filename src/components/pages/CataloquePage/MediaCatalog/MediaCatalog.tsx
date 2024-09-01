//Packages
import React from "react";

//Components
import {
  MediaCatalogContainer,
  MediaContainer,
  CatalogTab,
  CatalogTabList,
  CatalogTabPanel,
  CatalogStack,
  CatalogPagination,
} from "./MediaCatalog.styled";

import { TabContext } from "@mui/lab";
import MediaCard from "./MediaCard/MediaCard";

const MediaCatalog: React.FC = () => {
  const [value, setValue] = React.useState("1");
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 20;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setPage(1); // Сброс страницы при смене вкладки
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const renderMediaCards = (totalItems: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const currentItems = Array.from({ length: totalItems }).slice(
      startIndex,
      startIndex + itemsPerPage
    );
    return currentItems.map((_, index) => <MediaCard key={index} />);
  };

  return (
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
          <CatalogTabPanel value="1">{renderMediaCards(100)}</CatalogTabPanel>
          <CatalogTabPanel value="2">{renderMediaCards(10)}</CatalogTabPanel>
          <CatalogTabPanel value="3">{renderMediaCards(10)}</CatalogTabPanel>
          <CatalogTabPanel value="4">{renderMediaCards(10)}</CatalogTabPanel>
          <CatalogTabPanel value="5">{renderMediaCards(10)}</CatalogTabPanel>
          <CatalogTabPanel value="6">{renderMediaCards(10)}</CatalogTabPanel>
        </TabContext>
        <CatalogStack spacing={2}>
          <CatalogPagination
            count={Math.ceil(100 / itemsPerPage)}
            size="large"
            page={page}
            onChange={handlePageChange}
            shape="rounded"
          />
        </CatalogStack>
      </MediaContainer>
    </MediaCatalogContainer>
  );
};

export default MediaCatalog;
