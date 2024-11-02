import React from "react";
import {
  AvatarContainer,
  ProfileContainer,
  ViewedContent,
  ViewedContainer,
  Viewed,
  RegistrationDate,
} from "./Profile.styled";

import CustomButton from "../../../CustomButton/CustomButton";

const Profile: React.FC = () => {
  return (
    <ProfileContainer>

      <AvatarContainer>
        <img
          src="https://sun9-3.userapi.com/impg/sS8R9BM4LfjTEWCifue2R4xTMA3BB4cc2g-85g/vvEXGkaj5NE.jpg?size=435x660&quality=95&sign=3f2f1ad440befd13a047ce89c9840594&type=album"
          alt=""
        />
        <h2>Skuf42</h2>
        <CustomButton>
          <p>Настройка профиля</p>
        </CustomButton>
      </AvatarContainer>

      <ViewedContainer>
        <ViewedContent>
          <h2>Просмотрено</h2>
          <Viewed>
            <p>Фильмы</p>
            <h3>30</h3>
          </Viewed>
          <Viewed>
            <p>Сериалы</p>
            <h3>30</h3>
          </Viewed>
          <Viewed>
            <p>Мультфильмы</p>
            <h3>30</h3>
          </Viewed>
          <Viewed>
            <p>Мультсериалы</p>
            <h3>30</h3>
          </Viewed>
          <Viewed>
            <p>Аниме</p>
            <h3>30</h3>
          </Viewed>
        </ViewedContent>
        <RegistrationDate><h3>Дата регистрации 02.08.2024</h3></RegistrationDate>
      </ViewedContainer>
      
    </ProfileContainer>
  );
};

export default Profile;
