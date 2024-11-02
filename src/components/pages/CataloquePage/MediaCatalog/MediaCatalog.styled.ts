import styled from "styled-components";
import { TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

export const MediaCatalogContainer = styled("div")(() => ({
  padding: "20px 0", // Добавляем отступы
}));

export const MediaContainer = styled("div")(() => ({
  maxWidth: "1240px",
  margin: "0 auto", // Центрируем контейнер
}));

export const CatalogTabList = styled(TabList)(() => ({
  "&&": {
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    margin:'0 0 20px',
    ".MuiTabs-indicator": {
      backgroundColor: "rgba(255, 255, 255, 0)", // Цвет индикатора активной вкладки
    },
  },
}));

export const CatalogTab = styled(Tab)(() => ({
  "&&": {
    color: "rgba(255,255,255,0.5)",
    "&.Mui-selected": {
      color: "rgba(255,255,255,1)",
    },
  },
}));

export const CatalogTabPanel = styled(TabPanel)(() => ({
  "&.MuiTabPanel-root":{
    padding: 0,
},
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  rowGap:'20px'
}));

export const CatalogStack = styled(Stack)(() => ({
  "&&": {
    alignItems: "center", // Центрируем пагинацию по горизонтали
    marginTop: "20px", // Отступ сверху
  },
}));

export const CatalogPagination = styled(Pagination)(() => ({
  "&& .MuiPaginationItem-root": {
    color: "rgba(255, 255, 255, 0.7)", // Цвет элементов пагинации
    "&.Mui-selected": {
      backgroundColor: "rgba(255, 255, 255, 0.2)", // Цвет фона активного элемента
    },
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Цвет фона при наведении
    },
  },
}));
