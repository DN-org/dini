import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const ContainerTabs = styled(Tabs)(() => ({
    "&&": { 
        
    '&.MuiTabs-indicator':{
        borderBottom:'solid 1px grey !important'
    }
     },
}));

export const TextTab = styled(Tab)(() => ({
    "&&": {
      color: "white", // базовый цвет
      "&.Mui-selected": {
        borderBottom: "solid 1px grey", // цвет при выборе
      },
      "&:hover": {
        color: "lightgrey", // цвет при наведении
      },
      "&:focus": {
        color: "darkgrey", // цвет при фокусе
      },
    },
  }));
  

export const MediaContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
}));

export const MediaContent = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "0.8fr 1fr",
  justifyItems: "center",
  alignItems: "center",
  width: "100%",
  padding: "0 0 30px",
  img: {
    width: "175px",
  },
}));

export const ContentContainer = styled("div")(() => ({
  width: "100%",
  display: "grid",
  gridTemplateRows: "repeat(3, 1fr)",
  alignItems: "center",
  rowGap: "5px",
  h4: {
    fontSize: "20px",
  },
}));

//del
export const Star = styled("p")(() => ({}));
