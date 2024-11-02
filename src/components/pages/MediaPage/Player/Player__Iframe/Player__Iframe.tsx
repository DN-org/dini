//Packages
import React from "react";

//Styles
import { FrameStyled } from "./Player__Iframe.styled";

export const PlayerIframeFirst: React.FC = () => {
  return (
    <FrameStyled
      src="https://65793.svetacdn.in/14XmN2qNr4cm/anime-tv-series/913"
      allowFullScreen
      style={{ width: "100%", height: "500px", border: "none", zIndex: 0 }}
    ></FrameStyled>
  );
};

export const PlayerIframeSecond: React.FC = () => {
  return (
    <FrameStyled
      src="https://sansa.allarknow.online:9443/?kp=278217&token=ee8963bfeccfad21d5c4bc6e1b752c"
      allowFullScreen
      style={{ width: "100%", height: "500px", border: "none", zIndex: 0 }}
    ></FrameStyled>
  );
};

export const PlayerIframeThird: React.FC = () => {
  return (
    <FrameStyled
      src="https://65793.svetacdn.in/14XmN2qNr4cm/anime-tv-series/913"
      allowFullScreen
      style={{ width: "100%", height: "500px", border: "none", zIndex: 0 }}
    ></FrameStyled>
  );
};
