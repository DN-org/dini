import { Link } from "react-router-dom";
import styled from "styled-components";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";

export const MiniProfileStyled = styled("div")(() => ({
  width: "200px",
  height: "45px",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "10px",
  padding: "0 5px",
}));

export const MiniProfileLogoContainerStyled = styled(Link)(() => ({
  display: "flex",
  width: "30px",
  height: "30px",
  backgroundColor: "#fff",
  justifyContent:'center',
  alignItems: 'center',
  borderRadius: "50%",
  cursor: "pointer",
}));

export const MiniProfileLogoIconStyled = styled(Person2RoundedIcon)(() => ({
  color: "#000",
}));

export const MiniProfileContainer = styled("div")(() => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyContent: 'center',
    alignItems: 'center'
}));

export const MiniProfileNameLinkStyled = styled(Link)(() => ({
    fontSize: '14px',
    maxWidth: '150px',
}));

export const MiniProfileExitLinkStyled = styled(Link)(() => ({
    fontSize: '11px',
    maxWidth: '150px',
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '400',
}));
