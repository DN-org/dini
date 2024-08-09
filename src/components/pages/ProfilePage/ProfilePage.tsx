import React from "react";
import { Content } from "./ProfilePage.styled";

import Profile from "./Profile/Profile";

const ProfilePage: React.FC = () => {
  return(
    <Content>
      <Profile/>
    </Content>
  );
};

export default ProfilePage;
