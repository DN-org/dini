//Packages
import styled from "styled-components";
import { TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";

export const MediaCatalogContainer = styled("div")(() => ({

}));

export const MediaContainer = styled("div")(() => ({
    
}));

export const CatalogTabList = styled(TabList)(() => ({
    "&&": {
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      marginBottom: "25px",
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
          padding: "0",
      },
      width:"1240px",
      margin: 'auto',
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gridTemplateRows: "auto",

  }));