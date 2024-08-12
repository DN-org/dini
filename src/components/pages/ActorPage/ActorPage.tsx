//Packages
import React from "react";

//Styles
import { ActorСontent } from "./ActorPage.styled";

//component
import ActorProfile from "./ActorProfile/ActorProfile";

const ActorPage: React.FC = () => {
  return (
    <ActorСontent>
      <ActorProfile/>
    </ActorСontent>
  );
};

export default ActorPage;
