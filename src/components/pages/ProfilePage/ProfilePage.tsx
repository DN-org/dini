import React from "react";
import { Content } from "./ProfilePage.styled";

import Profile from "./Profile/Profile";
import UserRating from "./UserRating/UserRating";

const ProfilePage: React.FC = () => {
  return(
    <Content>
      <Profile/>
      <UserRating/>
    </Content>
  );
};

export default ProfilePage;
