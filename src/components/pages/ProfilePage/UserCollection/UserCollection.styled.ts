import { Tab } from "@mui/material";
import styled from "styled-components";
import { TabList, TabPanel } from "@mui/lab";
import CustomButton from "../../../CustomButton/CustomButton";

export const UserContainer = styled("div")(() => ({
  display: "grid",
  width: "100%",
  height: 'auto',
  padding: "25px 50px",
  "*": {
    fontFamily: "Play",
  },
}));

export const UserChildContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: "50px",
  padding: "50px 25px",
}));

export const UserSortButton = styled(CustomButton)(() => ({
    width: '300px',
    justifySelf: 'end',
}));

export const UserTabList = styled(TabList)(() => ({
  "&&": {
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    marginBottom: "25px",
    ".MuiTabs-indicator": {
      backgroundColor: "rgba(255, 255, 255, 1)", // Цвет индикатора активной вкладки
    },
  },
}));

export const UserTab = styled(Tab)(() => ({
  "&&": {
    color: "rgba(255,255,255,0.5)",
    "&.Mui-selected": {
      color: "rgba(255,255,255,1)",
    },
  },
}));

export const UserTabPanel = styled(TabPanel)(() => ({
    "&.MuiTabPanel-root":{
        padding: "0",
    },
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    gap: "25px",
}));
