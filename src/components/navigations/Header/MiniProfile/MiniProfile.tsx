//Packages
import React from "react";

//Styles
import {
  MiniProfileContainer,
  MiniProfileExitLinkStyled,
  MiniProfileLogoContainerStyled,
  MiniProfileLogoIconStyled,
  MiniProfileNameLinkStyled,
  MiniProfileStyled,
} from "./MiniProfile.styled";

const MiniProfile: React.FC = () => {
  return (
    <MiniProfileStyled>
      <MiniProfileLogoContainerStyled to={"/Profile"}>
        <MiniProfileLogoIconStyled />
      </MiniProfileLogoContainerStyled>
      <MiniProfileContainer>
        <MiniProfileNameLinkStyled to={"/Profile"}>
          ProfileName
        </MiniProfileNameLinkStyled>
        <MiniProfileExitLinkStyled to={"/"}>
          выйти из профиля
        </MiniProfileExitLinkStyled>
      </MiniProfileContainer>
    </MiniProfileStyled>
  );
};

export default MiniProfile;
