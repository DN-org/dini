import React from "react";
import { Content } from "./ProfilePage.styled";

import Profile from "./Profile/Profile";
import UserCollection from "./UserCollection/UserCollection";

const ProfilePage: React.FC = () => {
  return(
    <Content>
      <Profile/>
      <UserCollection/>
    </Content>
  );
};

export default ProfilePage;
