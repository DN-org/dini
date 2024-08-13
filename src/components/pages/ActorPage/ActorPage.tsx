//Packages
import React from "react";

//Styles
import { ActorСontent } from "./ActorPage.styled";

//component
import ActorProfile from "./ActorProfile/ActorProfile";
import ActorWorksCarousel from "./ActorWorksCarousel/ActorWorksCarousel";

const ActorPage: React.FC = () => {
  return (
    <ActorСontent>
      <ActorProfile/>
      <ActorWorksCarousel/>
    </ActorСontent>
  );
};

export default ActorPage;
