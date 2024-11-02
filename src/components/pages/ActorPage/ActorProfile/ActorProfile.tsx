//Packages
import React from "react";

//Styles
import {
  ProfileActorContainer,
  AvatarContainer,
  InformationActorContainer,
  NameActorContainer,
  PrimaryName,
  CustomButtonContainer,
  SecondaryName,
  AboutActorContainer,
  AboutActorContent,
} from "./ActorProfile.styled";

//component
import CustomButton from "../../../CustomButton/CustomButton";

const ActorProfile: React.FC = () => {
  return (
    <ProfileActorContainer>
      <AvatarContainer>
        <img
          src="https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/865d2d0e-bac6-4a78-a0ed-17a87b285069/280x420"
          alt=""
        />
      </AvatarContainer>

      <InformationActorContainer>
        <NameActorContainer>
          <PrimaryName>Райан Гослинг</PrimaryName>
          <CustomButtonContainer>
          <CustomButton>
            <h4>Добавить в категорию</h4>
          </CustomButton>
          </CustomButtonContainer>
          <SecondaryName>Ryan Gosling</SecondaryName>
        </NameActorContainer>

        <AboutActorContainer>
          <h3>О персоне</h3>

          <AboutActorContent>
            <p>Карьера</p>
            <p>Актер, Продюсер, Режиссер, Сценарист</p>
          </AboutActorContent>

          <AboutActorContent>
            <p>Место рождения</p>
            <p>Лондон, Онтарио, Канада</p>
          </AboutActorContent>

          <AboutActorContent>
            <p>Рост</p>
            <p>1.84 м</p>
          </AboutActorContent>

          <AboutActorContent>
            <p>Дата рождения</p>
            <p>12 ноября, 1980</p>
          </AboutActorContent>

          <AboutActorContent>
            <p>Знак задиака рак</p>
            <p>Скорпион</p>
          </AboutActorContent>
          
          <AboutActorContent>
            <p>Возраст</p>
            <p>43 года</p>
          </AboutActorContent>

          <AboutActorContent>
            <p>Всего работ</p>
            <p>222</p>
          </AboutActorContent>

        </AboutActorContainer>
      </InformationActorContainer>
    </ProfileActorContainer>
  );
};

export default ActorProfile;
